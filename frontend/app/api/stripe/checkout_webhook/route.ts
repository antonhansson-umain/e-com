import {Stripe} from 'stripe'
import {NextResponse} from 'next/server'
import {headers} from 'next/headers'
import {createOrder} from '@/actions/createOrder'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: Request) {
  let event: Stripe.Event

  try {
    const stripeSignature = (await headers()).get('stripe-signature')

    event = stripe.webhooks.constructEvent(
      await req.text(),
      stripeSignature as string,
      process.env.STRIPE_CHECKOUT_WEBHOOK_SECRET as string,
    )
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    // On error, log and return the error message.
    if (err! instanceof Error) console.log(err)
    console.log(`❌ Error message: ${errorMessage}`)
    return NextResponse.json({message: `Webhook Error: ${errorMessage}`}, {status: 400})
  }

  // Successfully constructed event.
  console.log('✅ Successfully constructed event:', event.id)

  const permittedEvents: string[] = [
    'checkout.session.completed',
    'checkout.session.expired',
    'payment_intent.succeeded',
    'payment_intent.payment_failed',
  ]

  if (permittedEvents.includes(event.type)) {
    let data

    try {
      switch (event.type) {
        case 'checkout.session.completed':
          data = event.data.object as Stripe.Checkout.Session
          console.log(`💰 CheckoutSession status: ${data.payment_status}`)
          if (!data.id) {
            console.error('No Checkout Session ID returned from Checkout Session')
            return
          }
          const lineItems = await stripe.checkout.sessions.listLineItems(data.id)
          if (!lineItems) {
            console.error('No Line Items returned from Checkout Session')
            return
          }
          const customerEmail = data.customer_details?.email
          if (!customerEmail) {
            console.error('No customer email returned from Checkout Session')
            return
          }
          createOrder(data.id, customerEmail, lineItems)
          break
        case 'checkout.session.expired':
          data = event.data.object as Stripe.Checkout.Session
          console.log(`💰 CheckoutSession status: ${data.payment_status}`)
          break
        case 'payment_intent.payment_failed':
          data = event.data.object as Stripe.PaymentIntent
          console.log(`❌ Payment failed: ${data.last_payment_error?.message}`)
          break
        case 'payment_intent.succeeded':
          data = event.data.object as Stripe.PaymentIntent
          console.log(`💰 PaymentIntent status: ${data.status}`)
          break
        default:
          throw new Error(`Unhandled event: ${event.type}`)
      }
    } catch (error) {
      console.log(error)
      return NextResponse.json({message: 'Webhook handler failed'}, {status: 500})
    }
  }

  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({message: 'Received'}, {status: 200})
}

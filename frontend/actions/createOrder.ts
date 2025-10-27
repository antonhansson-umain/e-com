'use server'

import {stripe} from '@/lib/stripe'
import Stripe from 'stripe'
import {writeClient} from '@/sanity/lib/client'

export async function createOrder(
  sessionId: string,
  customerEmail: string,
  lineItems: Stripe.ApiList<Stripe.LineItem>,
) {
  const products = await Promise.all(
    lineItems.data.map(async (item) => {
      if (item.price && item.price.product) {
        const stripeProductId = item.price.product
        const product = await stripe.products.retrieve(stripeProductId as string)
        return {
          _type: 'orderItem',
          item: {
            _type: 'reference',
            _ref: product.metadata.productId,
          },
          quantity: item.quantity,
        }
      }
    }),
  )
  const order = {
    _type: 'order',
    _id: `order-${sessionId}`,
    products,
    customerEmail,
    status: 'paid',
    stripeCheckoutSessionId: sessionId,
  }

  writeClient.create(order, {autoGenerateArrayKeys: true}).then((res) => {
    console.log(`Order was created, document ID is ${res._id}`)
  })
}

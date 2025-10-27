import 'server-only'

import Stripe from 'stripe'

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
  appInfo: {
    // For sample support and debugging, not required for production:
    name: 'ecom-wow-records',
    url: 'https://github.com/antonhansson-umain/e-com',
    version: '0.0.1',
  },
  typescript: true,
})

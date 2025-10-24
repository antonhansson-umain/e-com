# WOW Records

A vinyl e‑commerce store built with **Next.js**, **Sanity CMS**, and **Stripe Checkout**.  
Fast loads, editable campaign pages, and a persistent cart for a seamless shopping experience.

---

## Core Features

- **CMS‑driven Home:** Campaigns and featured sections editable via Sanity.    
- **Filtering:** Shop page filters by **genre** and/or **country**, handled by a single `getAlbums` query.
- **Persistent Cart:** Managed with **Zustand** + `persist`, stored in **localStorage**.  
- **Stripe Checkout:** Secure purchase flow with session validation before clearing the cart.  
- **Optimized Images:** `urlForImage()` from Sanity to load appropriate image sizes.  

---

## Stack

| Tool | Purpose |
|------|----------|
| **Next.js** | Frontend, routing |
| **Sanity** | Headless CMS for content |
| **Zustand** | Cart state management |
| **Stripe** | Payments & checkout |
| **TypeScript** | Type safety |
| **Vercel** | Hosting & deployment |

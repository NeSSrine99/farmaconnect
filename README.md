This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Steps of create a shoppingCart

## step 1 : Create Cart Context

     We created a context file CartContext.js to manage cart state globally.

     cartItems: an array that holds the current items in the cart.

     addToCart(product): adds a product to the cart. If it already exists, it increases the quantity.

     removeFromCart(productId): removes a product by its ID.

     clearCart(): clears the entire cart.

     The context provider wraps the whole app in app/layout.js to make it accessible everywhere.

## step 2 : Setup Context Provider

     We wrapped our app with <CartProvider> inside app/layout.js to provide access to the cart state and functions in all components.

## step 3 : Connect the "Add to Cart" Button

     In the product Card component, we used the addToCart() function from the context to add products to the cart when the user clicks the “Ajouter” button.

     We passed a product object with id, nom, prix, image, and quantity: 1 as default.

## step 4 : Build the ShoppingCart Component

     We created a ShoppingCart component to display the added products dynamically.

     It shows product name, price, quantity, and image.

     It includes a delete button to remove items from the cart.

     We used the cartItems and removeFromCart functions from the context to control the cart.

## step 5 : Display Cart Item Count in Navbar (Cart Badge)

     We created a CartIcon component to display the total number of items in the cart as a badge on the cart icon.

     We used the useCart() hook to access cartItems from context.

     We calculated the total quantity by summing up the quantity of each item.

     If the cart is not empty, a red badge with the item count is shown.

     This badge is useful to let users know how many products they have added to their cart.

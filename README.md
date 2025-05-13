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

## Step 6 : Persist Cart Using localStorage

      To keep cart items after refreshing the page, we used `localStorage`.

      On app startup, we check if `localStorage` contains a saved cart.
      If yes, we load it into the cart state.
      Whenever the cart is updated, we save the new cart to `localStorage`.

      This helps improve the user experience by keeping cart data between sessions (temporarily, without a backend).

## Step 7: Add "Clear Cart" Button

      We added a new function clearCart inside the CartContext to remove all products from the cart.

      Then, we added a button in the cart UI that calls this function when clicked.

      This allows the user to quickly reset the cart with a single action.

## Step 8: Add Quantity Control Buttons in the Cart

      We added two new functions increaseQuantity and decreaseQuantity to the CartContext to allow users to change the quantity of items in their cart.

      Then, we updated the cart UI to show + and - buttons next to each item.
      This makes it easier for users to manage the quantity of each product directly from the cart view

## Step 8: Calculating the Total Price in the Cart

      We added a new function getTotalPrice inside the CartContext to calculate the total cost of all items in the cart.
      To avoid the issue of NaN, we made sure to convert the product price (prix) to a number using parseFloat() before multiplying it by the quantity.
      This function is then used in the cart UI to display the total price dynamically.

## Step 8: Create Cart Page with Checkout Button

      We created a new page at /cart to display the user's shopping cart in detail.
      It includes the following features:

### Steps of create a clerk

Using outdated Clerk methods (e.g., `authMiddleware()`, `_app.tsx`, or references to the older `pages/` structure) will:

1. **Break** your Next.js application's authentication flow.
2. Introduce **inconsistencies** with Next.js App Router.
3. Cause confusion around environment variables and server/client code.
4. Force maintainers to **refactor** and **debug** extensively.

---

## **6. AI MODEL RESPONSE TEMPLATE**

When answering questions about Clerk + Next.js integration, your response **MUST**:

1. **Use** the exact code patterns in the **Up-to-Date Quickstart Sample** above.
2. **Never** reference older or deprecated approaches.
3. **Reflect** all mandatory checks in "AI MODEL VERIFICATION STEPS."

**Example**:

> Below is the correct approach using Clerk with Next.js App Router:
>
> ```typescript
> // Show clerkMiddleware usage in middleware.ts
> // Show <ClerkProvider> usage in app/layout.tsx
> // Show usage of Clerk's React components (SignInButton, etc.)
> ```

---

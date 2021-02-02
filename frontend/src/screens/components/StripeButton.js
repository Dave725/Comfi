import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51ICuKuKgM9REhsAZTEMKlLOEtUfZx0kRJZt2Jtw9Tr4MEFeIW6T7w3oOBj9hWMIZi7U5sjTWt13Zh7UO4RDaD0ww00WW3n76rO"
);

const StripeButton = () => {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch("/create-checkout-session", { method: "POST" });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    console.log(session);

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error.message);
    }
  };

  return (
    <button
      type="button"
      role="link"
      onClick={handleClick}
      className="btn btn-block"
      style={{ backgroundColor: "#8bd0f0" }}
    >
      Checkout
    </button>
  );
};

export default StripeButton;

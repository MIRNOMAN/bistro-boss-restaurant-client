import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="please pay"></SectionTitle>
            <div>
               <Elements stripe={stripePromise}>
                  <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;

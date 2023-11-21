import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const {user} = useAuth();
    const [error, setError] =useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transaction, setTransaction] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCarts();
    const totallprice = cart.reduce((totall, item) => totall+item.price,0)

    useEffect(() =>{
      if(totallprice > 0){
        axiosSecure.post('/create-payment-intent', {price: totallprice})
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
      }
    },[axiosSecure, totallprice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
    console.log(card);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,

        })

        if(error){
            console.log('payment error',error);
            setError(error.message);
        }else{
            console.log('payment method',paymentMethod);
            setError('');
        }

        // confirm the payment

        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email : user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('payment error',confirmError);
        }else{
            console.log('payment method',paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('payment success id',paymentIntent.id)
                setTransaction(paymentIntent.id)

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totallprice,
                    data: new Date(),
                    transactionId : paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending',
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res);
                if(res.data?.paymentResult?.insertedId){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "payment successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary mt-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600 text-2xl">{error}</p>
                {transaction && <p className="text-green-700 text-xl mt-2">Your transaction id : {transaction}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;
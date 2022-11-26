import axios from 'axios';
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';


toast.configure();

const PaymentForm =()=>{
  const PriceForStripe = 1 * 100;
  const publishableKey = 'pk_test_51K0HkmBSRhQkmr4f2bflfcqbVSoCQIAWdWevOm4heUo0TNbPCT3LDHbTGWN1CPYMu2mKxPXWD6jWYF6X2KGqN8gF00XW6BjjhN';

  const onToken = (token) => {
    console.log(token);

    // axios.post('http://localhost:7000/payment', token)
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.log(error.response);
      
    // })


    if(token){
      toast.success('Payement Successful!', {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
    }
  }

  return(
     <StripeCheckout
     label="Pay with Card"
     name="Dream House"
     
     description={`Your total is ${1}`}
     amount={PriceForStripe}
     panelLabel=" Pay now"
     token={onToken}
     stripeKey={publishableKey}/>
     );
}
export default PaymentForm;
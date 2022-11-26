import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const stripePromise = loadStripe("pk_test_51K0HkmBSRhQkmr4f2bflfcqbVSoCQIAWdWevOm4heUo0TNbPCT3LDHbTGWN1CPYMu2mKxPXWD6jWYF6X2KGqN8gF00XW6BjjhN");

const useStyles = makeStyles({
  contentForgot:{
      padding:50,
      backgroundColor:'white',
      marginTop:150,
      marginBottom:200
  }
});
const PaymentCheckout=({giaTien,dataBds})=> {
  console.log(dataBds);
  const classes = useStyles();
  const handleClick = async () => {

    const stripe = await stripePromise;

    const response = await fetch(
      "http://localhost:7000/payment",
      {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            "product": {
                "name": "Thanh toán cho bản tin nhà đất của bạn.",
                "image": "https://tienphong.us/upload/image/bai-viet/nhung-yeu-to-hinh-thanh-nen-mot-ngoi-nha-dep-toan-dien-1.png",
                "amount": parseInt(giaTien),
                "quantity": 1
            }
        })
      }
    );

    const session = await response.json(); 

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
       console.log(result.error)
    }
  };

  return (
    <div>
      <br/>
      <Typography gutterBottom >Đây là loại tin có phí. Thanh toán cho bản tin của bạn?</Typography>
      <br/>
      <Grid container spacing="3">
      <Grid item xs={3}> 
        </Grid>
        <Grid item xs={6} > 
          <Button fullWidth variant='contained' color='primary' role="link" onClick={handleClick}>
          Click here to Pay
          </Button>
          <br/>
          <br/>
          <br/>
        </Grid>
        
      </Grid>
     
    </div>
  );
}

export default PaymentCheckout;
import { Button, FormControl, Grid, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import StripeCheckout from 'react-stripe-checkout';

const useStyles = makeStyles({
  contentForgot:{
      padding:50,
      backgroundColor:'white',
      marginTop:150,
      marginBottom:200
  }
});
const PaymentSchema = yup.object().shape({
    cvc: yup.number().typeError('CVC should be a number.').required("(*) Nhập mã CVC."),
    expiry: yup.string().required("(*) Nhập ngày hết hạn trên thẻ."),
    focus: yup.string().required("(*) Nhập focus."),
    name: yup.string().required("(*) Nhập họ tên."),
    email: yup.string().required("(*) Nhập email."),
    number: yup.number().typeError('CVC should be a number.').required("(*) Nhập mã số thẻ."),
   
});
  
const PaymentPost = () =>{
    const classes = useStyles();
    

    const [card, setCard]=useState({     
        cvc: "",  
        expiry:"",
        name:"",
        focus:"",
        email:"",
        number:""
    });
    
    // const [pass,setPass]=useState({password:''})
    // const { id,token } = useParams();


    return(
        <div >
            <Grid container spacing={3}>

                <Grid item xs={12} >
 
                <Formik
                initialValues={card}
                validationSchema={PaymentSchema}
                onSubmit={async (values, {resetForm}) => {
                    console.log(values);
                    
                    //resetForm()
                }}
              >
                {({values, errors, handleChange, handleBlur, touched}) => (
                  <Form>
                  
                    <Grid container spacing={3}>

                    <Grid item xs={12}>
                     <br/>
                      <Cards 
                        cvc={values.cvc}
                        expiry={values.expiry}
                        focused={values.focus}
                        name={values.name}
                        number={values.number}
                      />

                    </Grid>
  
                    

                    <Grid item xs={12}>
                     <TextField fullWidth
                        error={errors.number && touched.number}
                        name="number"
                        value={values.number}
                        label='Enter Card Number'
                        variant="outlined"    
                        onChange={handleChange}
                        helperText={errors.number && touched.number
                          ? errors.number
                          : null} 
                        />             
                      </Grid>

                      <Grid item xs={6}>
                     <TextField fullWidth
                        error={errors.name && touched.name}
                        name="name"
                        value={values.name}
                        label='Enter Your Name'
                        variant="outlined"    
                        onChange={handleChange}
                        helperText={errors.name && touched.name
                          ? errors.name
                          : null} 
                        />             
                      </Grid>

                      <Grid item xs={6}>
                      <TextField fullWidth
                        error={errors.email && touched.email}
                        name="email"
                        value={values.email}
                        label='Enter Your Email'
                        variant="outlined"    
                        onChange={handleChange}
                        helperText={errors.email && touched.email
                          ? errors.email
                          : null} 
                        />             
                      </Grid>

                      <Grid item xs={6}>
                      <TextField fullWidth
                        error={errors.expiry && touched.expiry}
                        name="expiry"
                        value={values.expiry}
                        label='Enter Expriry Date'
                        variant="outlined"    
                        onChange={handleChange}
                        helperText={errors.expiry && touched.expiry
                          ? errors.expiry
                          : null} 
                        />             
                      </Grid>

                      <Grid item xs={6}>
                     <TextField fullWidth
                        error={errors.cvc && touched.cvc}
                        name="cvc"
                        value={values.cvc}
                        label='Enter CVC'
                        variant="outlined"    
                        onChange={handleChange}
                        helperText={errors.cvc && touched.cvc
                          ? errors.cvc
                          : null} 
                        />             
                      </Grid>

                      <Grid item xs={12}>
                        <Button size='large' variant='contained' color='primary'
                        type="submit"
                        fullWidth>
                        PAY $3.00
                            </Button>
                        </Grid>

                  </Grid>

                  </Form>
                )}
                </Formik>
                

              
                </Grid>

                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </div>
    )
}
export default PaymentPost;
import { Button, FormControl, Grid, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { MdLock } from "react-icons/md";
import * as yup from "yup";
import { emailResetPass } from "../../store/actions/resetpassAction";
import useStyles from "./styles";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSchema = yup.object().shape({
    email: yup
    .string('(*) Enter your email.')
    .email('(*) Enter a valid email.')
    .required('(*) Email is required.')
  });
  
const FormResetPass = () =>{
    const classes = useStyles();

    const [user, setUser]=useState({     
        email: "",  
      });

    return(
        <div >
        <div >

    <Grid container>
      <Grid item xs={7} className={classes.containLogin}></Grid>
      <Grid item xs={5} className={classes.containLogin2}>
     
      <div className={classes.paperLogin1}>
      <MdLock className={classes.iconLock}/>

      <Formik
      initialValues={user}
      validationSchema={EmailSchema}
      onSubmit={async (values, {resetForm}) => {
          console.log(values);
           
          emailResetPass(values);
         
          resetForm()
         
      }}
    >
      {({values, errors, handleChange, touched}) => (
        <Form className={classes.form}>
        
          <Grid container spacing={6}>

          <Grid item xs={12}>
          
              <Typography component="h1" variant="h5">
              Nhập email đặt lại mật khẩu
              </Typography>
          </Grid>

          <Grid item xs={12}>
            
           <TextField fullWidth
            error={errors.email && touched.email}
              name="email"
              value={values.email}
              label='Nhập email của bạn'
              variant="outlined"
              onChange={handleChange}
              helperText={errors.email && touched.email
                ? errors.email
                : null}
             
            />
                         
            </Grid>

            <Grid item xs={12}>
              <Button size='large' variant='contained' color='primary'
              type="submit"
              fullWidth>
              Confirm
                  </Button>
              </Grid>

        </Grid>

        </Form>
      )}
      </Formik>
      </div>
      </Grid>
    </Grid>
 
    </div>
        {/*
            <Grid container spacing={10}>
                <Grid item xs={4}></Grid>

                <Grid item xs={4} className={classes.contentForgot}>
 
                <Formik
                initialValues={user}
                validationSchema={EmailSchema}
                onSubmit={async (values, {resetForm}) => {
                    console.log(values);
                     
                    resetForm()
                   
                }}
              >
                {({values, errors, handleChange, touched}) => (
                  <Form className={classes.form}>
                  
                    <Grid container spacing={6}>

                    <Grid item xs={12}>
                    
                        <Typography component="h1" variant="h5">
                        Nhập email đặt lại mật khẩu
                        </Typography>
                    </Grid>
  
                    <Grid item xs={12}>
                      
                     <TextField fullWidth
                      error={errors.email && touched.email}
                        name="email"
                        value={values.email}
                        label='Nhập email của bạn'
                        variant="outlined"
                        onChange={handleChange}
                        helperText={errors.email && touched.email
                          ? errors.email
                          : null}
                       
                      />
                                   
                      </Grid>

                      <Grid item xs={12}>
                        <Button size='large' variant='contained' color='primary'
                        type="submit"
                        fullWidth>
                        Confirm
                            </Button>
                        </Grid>

                  </Grid>

                  </Form>
                )}
                </Formik>
              
                </Grid>

                <Grid item xs={12}>
                    
                </Grid>
                        </Grid> */}
        </div>
    )
}
export default FormResetPass;
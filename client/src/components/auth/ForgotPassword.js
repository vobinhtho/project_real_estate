import { Button, FormControl, Grid, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { useParams } from "react-router";
import { updateResetPass } from "../../store/actions/resetpassAction";

const useStyles = makeStyles({
  contentForgot:{
      padding:50,
      backgroundColor:'white',
      marginTop:150,
      marginBottom:200
  }
});
const ForgotSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, "Mật khẩu quá ngắn.")
      .max(20, "Mật khẩu quá dài.")
      .required("(*) Nhập mật khẩu."),
      passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], '(*) Mật khẩu không khớp vui lòng nhập lại.')
        .required("(*) Nhập lại mật khẩu.")
  });
  
const ForgotPassword = () =>{
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);

    const [user, setUser]=useState({     
        password: "",  
        passwordConfirmation:"",
    });
    
    const [pass,setPass]=useState({password:''})
    const { id,token } = useParams();


    return(
        <div >
            <Grid container spacing={10}>
                <Grid item xs={4}></Grid>

                <Grid item xs={4} className={classes.contentForgot}>
 
                <Formik
                initialValues={user}
                validationSchema={ForgotSchema}
                onSubmit={async (values, {resetForm}) => {
                    console.log(id,token);
                    pass.password=values.password;
                    updateResetPass(pass,id,token)
                    resetForm()
                }}
              >
                {({values, errors, handleChange, touched}) => (
                  <Form className={classes.form}>
                  
                    <Grid container spacing={6}>

                    <Grid item xs={12}>
                    
                        <Typography component="h1" variant="h5">
                        Reset Password
                        </Typography>
                    </Grid>
  
                    <Grid item xs={12}>
                      
                     <TextField fullWidth
                      error={errors.password && touched.password}
                        name="password"
                        value={values.password}
                        label='Nhập mật khẩu mới'
                        variant="outlined"
                        type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                        onChange={handleChange}
                        helperText={errors.password && touched.password
                          ? errors.password
                          : null}
                        InputProps={{ // <-- This is where the toggle button is added.
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                //onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                      
                      
                      </Grid>
                   
                      <Grid item xs={12}>
                          <TextField fullWidth
                          name="passwordConfirmation"
                          value={values.passwordConfirmation}
                          error={errors.passwordConfirmation && touched.passwordConfirmation}
                          label='Nhập lại mật khẩu mới'
                          variant="outlined"
                          onChange={handleChange}
                          helperText={
                            errors.passwordConfirmation && touched.passwordConfirmation
                              ? errors.passwordConfirmation
                              : null
                          }
                          type={showPassword1 ? "text" : "password"} 
                          InputProps={{ 
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword1}
                                  //onMouseDown={handleMouseDownPassword}
                                  >
                                  {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                        </Grid> 

                      <Grid item xs={12}>
                        <Button size='large' variant='contained' color='primary'
                        type="submit"
                        fullWidth>
                        Apply
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
export default ForgotPassword;
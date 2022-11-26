import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import useStyles from "./styles";
import { Typography, TextField, Button, Container,Paper, Grid, InputAdornment, IconButton } from "@material-ui/core";

import { signIn } from "../../store/actions/authActions";
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { FcKey } from "react-icons/fc";
import ClientCaptcha from "react-client-captcha";
import { MdLock } from "react-icons/md";
import { toast } from "react-toastify";

// const useStyles = makeStyles({
//   // formStyle: {
//   //   margin: "0px auto",
//   //   padding: "30px",
//   //   borderRadius: "9px",
//   //   boxShadow: "0px 0px 12px -3px #000000",
//   // },
//   // spacing: {
//   //   marginTop: "20px",
//   // },
// });
const SignupSchema = yup.object({
  email: yup
    .string('(*) Enter your email.')
    .email('(*) Enter a valid email.')
    .required('(*) Email is required.'),
    password: yup
    .string("(*) Enter your password.")
    .min(6, "(*) Password too short.")
    .max(20, "(*) Password too long.")
    .required("(*) Enter your password."),
});
const SignIn = () => {
   const classes = useStyles();
   const auth = useSelector((state) => state.auth);
   //console.log(auth);
   const dispatch = useDispatch();
  // const [creds, setCreds] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(signIn(creds.email, creds.password));
  //   setCreds({ email: "", password: "" });
  // };


  const [captch, setCaptch] = useState("");
  const loadCaptcha = (code) => {
    setCaptch(code);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  //console.log(auth.fullname);
 // if (auth._id) return <Redirect to="/" />;

 
// 
    if(auth._id && auth.role==='khachhang') 
    {return <Redirect to="/"/>}
    else{
      if(auth._id && (auth.role==='admin' || auth.role==='nhanvien')) {return (
        <Redirect to="/"/>
      )}
    }
    // if(auth._id) {return <Redirect to="/"/>}
    // else if(auth.role==='admin' || auth.role==='nhanvien') {return <Redirect to="/admin"/>}
    //if(auth._id) {return <Redirect to="/"/>}
//  else if (auth._id && auth.role==='admin') 
//     return <Redirect to="/homeadmin"/>
//     else if (auth._id && auth.role==='nhanvien') 
//     return <Redirect to="/homeadmin"/>
 
 //console.log(auth);

  return (
    <div >

    <Grid container>
      <Grid item xs={7} className={classes.containLogin}></Grid>
      <Grid item xs={5} className={classes.containLogin2}>
      
      <div className={classes.paperLogin1}>
        
      <MdLock className={classes.iconLock}/>
      <Typography component="h1" variant="h5">
        User Login
      </Typography>
      <Formik
        initialValues={{
          email:'',password:'', mabaove:''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
            //console.log(values);
          if(values.mabaove !== captch){
            alert("Nhập mã bảo vệ không đúng vui lòng nhập lại!");
            window.location.reload();
          } 
          if(values.mabaove===captch){
            //console.log(values.email,values.password);
            dispatch(signIn(values.email,values.password));
          }        
        }}
      >
        {({values, errors, handleChange, touched}) => (
          <Form className={classes.form}>
          <Grid container spacing={3}>
          
          <Grid item xs={12}>
            <TextField
              error={errors.email && touched.email}
              variant="outlined"
              fullWidth
              value={values.email}
              onChange={handleChange}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              helperText={
                errors.email && touched.email ? errors.email : null
              }
            />
          </Grid>

          <Grid item xs={12}>
         <TextField fullWidth
          error={errors.password && touched.password}
            name="password"
            value={values.password}
            label='Password'
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
          
              <Grid item xs={6}>
                  <TextField fullWidth 
                  //onChange={(e)=>setGetcode(e.target.value)}
                  onChange={handleChange}
                  name="mabaove"
                  value={values.mabaove}
                  variant="outlined" InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FcKey className={classes.iconKey} />
                      </InputAdornment>
                    ),
                  }}
                  label="Nhập mã bảo vệ"/>
              </Grid>

              <Grid item xs={6}>
                <ClientCaptcha charsCount={5} fontColor={"green"} fontFamily={"Arial Nova Light"} height={55} width={175} captchaCode={loadCaptcha} retry={true} />
              </Grid>
   
            </Grid>
            <Button size='large'className={classes.btnSignIn}
              type="submit"
              fullWidth
            >
              Login
            </Button>
           
            <Typography gutterBottom>
              Create new an account? <Link className={classes.styleLink1} to="/signup">SignUp</Link>  
            </Typography>

            <Typography>
              <Link className={classes.styleLink2} to="/emailreset">Forgot Password</Link>  
            </Typography>
          </Form>
        )}
      </Formik>
      </div>
      </Grid>
    </Grid>
 
    </div>
  );
};

export default SignIn;

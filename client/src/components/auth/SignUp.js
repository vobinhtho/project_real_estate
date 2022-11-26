import React, { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {getAddress} from '../../store/actions/addressAction'
import useStyles from './styles'
import { Typography, TextField, Button, Container, Paper, Grid, FormControl, InputLabel, Select, MenuItem, InputAdornment, IconButton, OutlinedInput, FormHelperText } from "@material-ui/core";
import { signUp } from "../../store/actions/authActions";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ClientCaptcha from "react-client-captcha";
import "react-client-captcha/dist/index.css";
import { FcKey } from "react-icons/fc";

const SignupSchema = yup.object().shape({
  fullname: yup.string().required("(*) Nhập họ và tên"),
  CID: yup.string().required("(*) Nhập CMND/CCCD."),
  phone_number: yup.string().required("(*) Nhập số điện thoại."),
  email: yup
    .string()
    .email("(*) Email không hợp lệ.")
    .required("(*) Nhập địa chỉ email."),
  password: yup
    .string()
    .min(6, "Mật khẩu quá ngắn.")
    .max(20, "Mật khẩu quá dài.")
    .required("(*) Nhập mật khẩu."),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], '(*) Nhập lại password không đúng')
    .required("(*) Nhập lại mật khẩu")
});

const SignUp = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const address = useSelector(state=>state.address);
  useEffect(() => {
      dispatch(getAddress());
  },[dispatch])

  //if (auth._id) return <Redirect to="/" />;

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);

  const [captch, setCaptch] = useState("");
  const loadCaptcha = (code) => {
    setCaptch(code);
  };

  const [user, setUser]=useState({   
    fullname: "",
    email: "",
    password: "",
    phone_number:"",
    CID: "",
    address:{province:'',district:'',ward:''},
    dob:"",
    sex:"Chưa cập nhật",
    avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg==",
    active:"true",
    role:"khachhang",
    passwordConfirmation:"",
    mabaove:"",
  });

  const [tinhThanh,setTinhthanh]=useState('');
  const [quanHuyen,setQuanhuyen]=useState('');

  const handleProvince = (data) =>{setTinhthanh(data.target.value);}
  const handleDistrict = (data) =>{setQuanhuyen(data.target.value);}

  const district = address.filter(dt => dt.province_name === tinhThanh);
  const ward = district.filter(dt => dt.district_name === quanHuyen);
  // const state = useSelector((state)=>state);
  // console.log(state);
  console.log(auth.fullname);
  if (auth._id) return <Redirect to="/" />;

  return (

    <div>
      <Grid container>
        <Grid item xs={7} className={classes.containLogin}></Grid>
        <Grid item xs={5} className={classes.containSignUp}>

        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          SIGN UP
        </Typography>
        <Formik
          initialValues={user}
          validationSchema={SignupSchema}
          onSubmit={async (values, {resetForm}) => {
              //console.log(values);
            if(values.mabaove !== captch){
              alert("Nhập mã bảo vệ không đúng vui lòng nhập lại!");
            } 
            if(values.mabaove===captch){
               dispatch(signUp(values)); //resetForm({values: user}); 
            } 
            //window.location.reload()
            resetForm()       
          }}
        >
          {({values, errors, handleChange, touched}) => (
            <Form className={classes.form}>
            
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    error={errors.fullname && touched.fullname}
                    name="fullname"
                    value={values.fullname}
                    variant="outlined"
                    fullWidth autoFocus
                    onChange={handleChange}
                    label="Họ và tên"
                    helperText={
                      errors.fullname && touched.fullname
                        ? errors.fullname
                        : null
                    }
                  />
                </Grid>
                
                <Grid item xs={6}>
                  <TextField
                    error={errors.email && touched.email}
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    label="Địa chỉ Email"
                    name="email"
                    autoComplete="email"
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                <TextField
                  variant="outlined" fullWidth
                  //value={moment(employeeData.dob).format('YYYY-MM-DD')}
                  value={values.dob}
                  label="Ngày sinh"
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  //defaultValue={moment(employeeData.dob).format('YYYY MM DD')}
                  InputLabelProps={{
                    shrink: true,
                  }}
              />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                  error={errors.CID && touched.CID}
                  name="CID"
                  value={values.CID}
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  label="CMND/CCCD"
                  type='number'
                  helperText={
                    errors.CID && touched.CID
                      ? errors.CID
                      : null
                  }
                />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                  error={errors.phone_number && touched.phone_number}
                  name="phone_number"
                  value={values.phone_number}
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  label="Số điện thoại"
                  type='number'
                  helperText={
                    errors.phone_number && touched.phone_number
                      ? errors.phone_number
                      : null
                  }
                />
                </Grid>

                <Grid item xs={6}>
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
                    name="passwordConfirmation"
                    value={values.passwordConfirmation}
                    error={errors.passwordConfirmation && touched.passwordConfirmation}
                    label='Nhập lại password'
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
                
                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" fullWidth required>
                    <InputLabel>Tỉnh/TP</InputLabel>
                    <Select
                      name="address.province"
                      onChange={handleChange}
                      onClick={handleProvince}
                      label="Tỉnh/Thành"
                    >
                    {Array.from(new Set(address.map((j) => j.province_name))).map((pn) => (
                      <MenuItem key={pn._id} value={`${pn}`}>{pn}</MenuItem>
                    ))}
                      
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" fullWidth required>
                    <InputLabel>Quận/Huyện</InputLabel>
                    <Select
                      name="address.district"
                      //value={values.address.district}
                     onChange={handleChange}
                     label="Quận/Huyện"
                      onClick={handleDistrict}>
                      {Array.from(new Set(district.map((j) => j.district_name))).map((pn) => (
                        <MenuItem key={pn._id} value={`${pn}`}>{pn}</MenuItem>
                      ))}
                      </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" fullWidth required>
                    <InputLabel>Phường/Xã</InputLabel>
                    <Select
                      name="address.ward"
                      //value={values.address.ward_name}
                      onChange={handleChange}
                      label="Phường/Xã"
                      >
                      {Array.from(new Set(ward.map((j) => j.ward_name))).map((pn) => (
                        <MenuItem key={pn._id} value={`${pn}`}>{pn}</MenuItem>
                      ))}
                    </Select>
                   
                  </FormControl>
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
                <ClientCaptcha charsCount={5} fontColor={"green"} fontFamily={"Arial Nova Light"} height={55} width={200} captchaCode={loadCaptcha} retry={true} />
              </Grid>
              
            </Grid>

              
              <Button size='large' className={classes.btnSignIn}
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
             
              <Typography>
                Do you have account? <Link className={classes.styleLink1} to="/signin">Login</Link>  
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

export default SignUp;

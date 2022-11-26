import { Box, Button, CardMedia, FilledInput, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, NativeSelect, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { getAddress } from "../../store/actions/addressAction";
import { loadUser, signOut} from "../../store/actions/authActions";
import { getUser, getUserbyId, updateUser } from "../../store/actions/userActions";
import storage from '../firebase/firebase';
import img1 from '../img/login.png'
import useStyles from "./styles"
import FileBase from 'react-filebase64';
import { toast } from "react-toastify";


toast.configure();
const SignupSchema = yup.object().shape({
    fullname: yup.string().required("(*) Nhập họ và tên"),
    CID: yup.string().required("(*) Nhập CMND/CCCD."),
    phone_number: yup.string().required("(*) Nhập số điện thoại.")
  });

const Account = () =>{
    
    const classes = useStyles();
    const { id } = useParams();
    const dispatch = useDispatch();

    const address = useSelector(state=>state.address);
    const userLogin = useSelector(state=>state.auth);
  
    const currentId=1;
    const user = useSelector((state) => (currentId ? state.user.find((u) => u._id === id) : null));
    //
    const [userData, setUserData] =useState(
        {fullname:'', email: '', phone_number:  '', CID: '', address:{province:'',district:'',ward:''}, dob:  '', sex:  '',avatar: ''} 
    );

    const [tinhThanh,setTinhthanh]=useState();
    const [quanHuyen,setQuanhuyen]=useState();
    const [phuongXa,setPhuongxa]=useState();
    const [cover, setCover]=useState(img1);
    const [img, setImage]=useState('');

    //console.log(user);
    useEffect(() => {
      if(user) setUserData(user);
      if(user) setTinhthanh(user.address.province);
      if(user) setQuanhuyen(user.address.district);
      if(user) setCover(user.avatar);
    });

    const handleProvince = (data) =>{
        setTinhthanh(data.target.value);
        console.log(data.target.value)
    }

    const handleDistrict = (data) =>{
      setQuanhuyen(data.target.value);
    }
    const district = address.filter(dt => dt.province_name === tinhThanh);
    const ward = district.filter(dt => dt.district_name === quanHuyen);

    const handleSetIMG =(d)=>{
       setImage(d);
    }

    return(
     
        <Grid container spacing={5} className={classes.paperLogin}>
            <Grid item xs={3}></Grid>

            <Grid item xs={6}>
              <Paper className={classes.paper1}>
              <Formik
                enableReinitialize= {true}
                initialValues={userData}
                validationSchema={SignupSchema}
                onSubmit={async (values, {resetForm}) => {
                  console.log(values)
                  //console.log(userData._id)
                  if(img==='') {values.avatar=cover}
                  if(img!=='') {values.avatar=img}
                  dispatch(updateUser(values, user._id));
                  toast.success('Cập nhật thành công !', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "light"
                  });
                }}
              >
              {({values, errors, handleChange, touched,handleBlur}) => (
                <Form className={classes.form}>
                  <Grid container spacing={3}>
                  
                  <Grid item xs={3}>
                    <img  src={img==='' ? cover : img} className={classes.imgAvatar}/>
                  <br/>
                   
                  <FileBase type="file" multiple={false} 
                  onDone={(base64) => handleSetIMG(base64.base64)} 
                  />
                  
                  </Grid>
                  
                  <Grid item xs={8}>
                  <Typography className={classes.welcom}>Hello, {userData.fullname} </Typography>
                  </Grid>
                    <Grid item xs={6}>
                      <TextField
                         error={errors.fullname && touched.fullname}
                         name="fullname"
                         value={values.fullname}
                         variant="outlined"
                         fullWidth
                         onChange={handleChange}
                         label="Họ và tên"
                        onBlur={handleBlur}
                        helperText={
                          errors.fullname && touched.fullname
                            ? errors.fullname
                            : null
                       }
                      />
                    </Grid>
                    
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        fullWidth disabled
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                      />
                    </Grid>
   
                    <Grid item xs={6}>
                    <TextField
                      variant="outlined" fullWidth
                      value={moment(values.dob).format('YYYY-MM-DD')}
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
                        <RadioGroup name='sex' row fullWidth value = {values.sex} onChange={handleChange}>
                          <FormControlLabel value="Nam" control={<Radio color="primary"/>} label="Nam" />
                          <FormControlLabel value="Nữ" control={<Radio color="primary"/>} label="Nữ" />
                        </RadioGroup>
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
                  
                    <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" fullWidth>
                    <InputLabel>Tỉnh/Thành</InputLabel>
                    <Select
                      name="address.province"
                      value={values.address.province}
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
                      <FormControl variant="outlined" fullWidth>
                      <InputLabel>Quận/Huyện</InputLabel>
                      <Select
                        name="address.district"
                        value={values.address.district}
                        onChange={handleChange}
                        label="Quận/Huyện"
                        onClick={handleDistrict}
                        >
                        {Array.from(new Set(district.map((j) => j.district_name))).map((pn) => (
                            <MenuItem key={pn._id} value={`${pn}`}>{pn}</MenuItem>
                        ))}
                        
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" fullWidth>
                        <InputLabel>Phường/Xã</InputLabel>
                        <Select
                          name="address.ward"
                          value={values.address.ward}
                          onChange={handleChange}
                          //onClick={handleWard}
                          label="Phường/Xã"
                          >
                          {Array.from(new Set(ward.map((j) => j.ward_name))).map((pn) => (
                            <MenuItem key={pn._id} value={`${pn}`}>{pn}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                          </Grid>
                </Grid>
    
                  <Button size='large' className={classes.btnSignIn}
                    type="submit"
                    fullWidth //onClick={handleUpload}
                    >
                    Save changes
                  </Button>
                 
                 
                </Form>
              )}
            </Formik>
              </Paper>
            </Grid>
         
        </Grid>
    );
}
export default Account;
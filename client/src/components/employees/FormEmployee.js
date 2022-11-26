import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Container, Grid, InputAdornment, IconButton } from '@material-ui/core';
import FileBase from 'react-filebase64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
//import {createEmployee,updateEmployee} from '../../actions/employees'
import {FormControl,InputLabel,Select,MenuItem,Snackbar} from '@material-ui/core'
import moment from 'moment'
import * as yup from "yup";
import { getAddress } from '../../store/actions/addressAction';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { addUser } from '../../store/actions/userActions';


const EmployeeSchema = yup.object().shape({
  fullname: yup.string().required("(*) Nhập họ và tên"),
  email: yup
    .string()
    .email("(*) Email không hợp lệ.")
    .required("(*) Nhập địa chỉ email."),
  password: yup
    .string()
    .min(6, "Mật khẩu quá ngắn.")
    //.max(20, "Mật khẩu quá dài.")
    .required("(*) Nhập mật khẩu.")
});
const FormEmployee = ({ currentId, setCurrentId, handleClose }) => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const ngay = moment().format('YYYY-MM-DD');
  const dispatch = useDispatch();
  const address = useSelector(state=>state.address);
  //console.log(ngay);
  const [quyenSudung, setQuyensudung]= useState('nhanvien');

  const employees = useSelector((state) => (currentId ? state.user.find((nv) => nv._id === currentId) : null));

  const [employeeData, setEmployeeData] = useState(
     {  
      fullname: "",
      email: "",
      password: "123456",
      phone_number:"",
      CID: "",
      address:{province:'',district:'',ward:''},
      dob:ngay,
      sex:"Chưa cập nhật",
      avatar:"https://firebasestorage.googleapis.com/v0/b/nhadat-69e69.appspot.com/o/images%2Flogin.png?alt=media&token=6b3dc58f-3d0f-4fe1-b6ca-bbb6b968f535",
      active:"true",
      role:quyenSudung,
  });
  const [tinhThanh, setTinhthanh]=useState("");
  const [quanHuyen, setQuanhuyen]=useState("");
  
  useEffect(() => {
    if (employees) setEmployeeData(employees);
  });


  const handleProvince = (data) =>{setTinhthanh(data.target.value);}
  const handleDistrict = (data) =>{setQuanhuyen(data.target.value);}
 
  const district = address.filter(dt => dt.province_name === tinhThanh);
  const ward = district.filter(dt => dt.district_name === quanHuyen);

  console.log(tinhThanh+quanHuyen)


  return (
    <Container>
        <Formik
          enableReinitialize= {true}
          initialValues={employeeData}
          validationSchema={EmployeeSchema}
          onSubmit={async (values, {resetForm}) => {
              console.log(values);   
              dispatch(addUser(values)); 
              resetForm();
              handleClose();
          }}
        >
          {({values, errors, handleChange,handleBlur, touched}) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
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
                  <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">Quyền sử dụng</InputLabel>
                  <Select
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    label="Quyền sử dụng"
                    onBlur={handleBlur}
                  >
                    <MenuItem name='nhanvien' value='nhanvien'>Nhân Viên</MenuItem>
                    <MenuItem name='admin' value='admin'>Admin</MenuItem>
                  </Select>
                  </FormControl>
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
                  <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">Giới tính</InputLabel>
                  <Select
                    value={values.sex}
                    onChange={handleChange}
                    label="Giới tính"
                    onBlur={handleBlur}
                  >
                    <MenuItem name='Nam' value='Nam'>Nam</MenuItem>
                    <MenuItem name='Nữ' value='Nữ'>Nữ</MenuItem>
                    <MenuItem name='Chưa cập nhật' value='Chưa cập nhật'>Chưa cập nhật</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                
                
                <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel>Tỉnh/Thành</InputLabel>
                    <Select
                      name="address.province"
                      value={values.address.province}
                      onChange={handleChange}
                      onClick={handleProvince}
                      //onBlur={handleBlur}
                      label="Tỉnh/Thành"
                    >
                    {Array.from(new Set(address.map((j) => j.province_name))).map((pn) => (
                      <MenuItem value={pn}>{pn}</MenuItem>
                    ))}
                      
                    </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" fullWidth >
                    <InputLabel>Quận/Huyện</InputLabel>
                    <Select
                      name="address.district"
                      value={values.address.district}
                      onChange={handleChange}
                      label="Quận/Huyện"
                      onClick={handleDistrict}
                      //onBlur={handleBlur}
                      >
                      {Array.from(new Set(district.map((j) => j.district_name))).map((pn) => (
                        <MenuItem value={pn}>{pn}</MenuItem>
                      ))}
                      </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" fullWidth >
                    <InputLabel>Phường/Xã</InputLabel>
                    <Select
                      name="address.ward"
                      value={values.address.ward}
                      onChange={handleChange}
                      label="Phường/Xã"
                      //onBlur={handleBlur}
                      >
                      {Array.from(new Set(ward.map((j) => j.ward_name))).map((pn) => (
                        <MenuItem value={pn}>{pn}</MenuItem>
                      ))}
                    </Select>
                   
                  </FormControl>
              </Grid>

              <Grid item xs={12} sm={2}>
                <FormControl variant="outlined"  >
                  <Button size='large' color="primary" variant="contained" fullWidth
                    type="submit">
                    Submit
                  </Button>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl variant="outlined"  required>
                  <Button size='large' fullWidth
                    type="submit" color="default" variant="contained">
                    Cancel  
                  </Button>
                </FormControl>
              </Grid>
              
            </Grid>
            </Form>
          )}
        </Formik>
    
    </Container>
  );
};

export default FormEmployee;

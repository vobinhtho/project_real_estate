import { Button, FormControl, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useState,useEffect } from 'react'
import * as yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { addContract, getContracts, updateContract } from '../../store/actions/contractAction';
import { number } from 'yup/lib/locale';
import { toast } from 'react-toastify';
import { updateReal_estate } from '../../store/actions/realEstateAction';

toast.configure()
const useStyles = makeStyles({

	formContract:{
		marginTop:80,
		marginLeft:50, marginRight:50,
		padding:50,
		marginBottom:80
	},
	hopdongtitle:{
		textAlign:'center',
		fontSize:30,
		textTransform:'uppercase',
		color:'#3577e6',
		marginBottom:50
	}
});
const ContractSchema = yup.object().shape({
    type_of_contract: yup.string().required("(*) Nhập loại hợp đồng."),
    name_of_real_estate: yup.string().required("(*) Nhập tên bất động sản."),
	value: yup.string().required("(*) Nhập giá trị của bất động sản."),
	percent: yup.string().required("(*) Nhập phần trăm tiền hoa hồng của công ty."),
	CIDA: yup.string().required("(*) Nhập CMND của bên A."),
	addressA: yup.string().required("(*) Nhập địa chỉ bên A."),
	phone_numberA: yup.string().required("(*) Nhập số điện thoại bên A."),
	representA: yup.string().required("(*) Nhập người đại diện bên A."),
	addressB: yup.string().required("(*) Nhập địa chỉ bên B."),
	phone_numberB: yup.string().required("(*) Nhập số điện thoại bên B."),
	representB: yup.string().required("(*) Nhập họ tên người đại diện bên B."),
	CIDB: yup.string().required("(*) Nhập CMND bên B."),

});
const ContractItem =({realid, currentId, setCurrentId, handleClose })=>{

	const classes = useStyles();

	//const { id } = useParams();

  const dispatch = useDispatch();

	const contracts = useSelector((state) => (currentId ? state.contracts.find((nv) => nv._id === currentId) : null));

  console.log(realid)
  console.log('cur'+currentId)

	// const [value, setValue]=useState(0);
	// const [percent, setPercent]=useState(0);
	// const [commision, setCommision]=useState(0);

  const [contractData, setContractData] = useState({
		type_of_contract: '', 
		name_of_real_estate: '', 
		value: 0,
		percent: 0,
		commision:'', 
		employeeid:'619e6d80b383dcd0b33a6b0f',
		realestateid: realid,
		CIDA:'',
		addressA:'',
		phone_numberA:'',
		representA:'',
		addressB:'',
		phone_numberB:'',
		representB:'',
		CIDB:'',
	   // date:ngay,
		status:'create',
	});

  const realestate = useSelector((state) => (realid ? state.realestate.find((nv) => nv._id === realid) : null));
  const [trangthai, setTrangthai]=useState('contract');

  const [updateData, setUpdateData]=useState();
	useEffect(() => {
		if (contracts) setContractData(contracts);
    if (realestate) setUpdateData(realestate);
	});

	console.log(updateData);
  

//	const dispatch = useDispatch();
	  
	return(
		<div>
    <br/>
		<Typography gutterBottom className={classes.hopdongtitle}> Hợp đồng mua bán bất động sản, nhà đất</Typography>
		<Formik
          enableReinitialize= {true}
          initialValues={contractData}
          validationSchema={ContractSchema}
          onSubmit={async (values, {resetForm}) => {
              console.log(values);
          if(currentId===0){
            updateData.status='contract';
            dispatch(addContract(values));
            dispatch(updateReal_estate(updateData,realid));
            console.log(realestate)
            handleClose();
          }
          else{
            dispatch(updateContract(values,currentId))
            handleClose()

          toast.success('Cập nhật hợp đồng thành công !', {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            theme: "light"
          });
				
			  }
			  //resetForm();
        }}
        >
          {({values, errors, handleChange, handleBlur, touched}) => (
            <Form>
              <Grid container spacing={3}>        
              <Grid item xs={4}>
                  <TextField
                    error={errors.type_of_contract && touched.type_of_contract}
                    name="type_of_contract"
                    value={values.type_of_contract}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Loại hợp đồng"
                    helperText={
                      errors.type_of_contract && touched.type_of_contract
                        ? errors.type_of_contract
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    error={errors.name_of_real_estate && touched.name_of_real_estate}
                    name="name_of_real_estate"
                    value={values.name_of_real_estate}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Tên bất động sản"
                    helperText={
                      errors.name_of_real_estate && touched.name_of_real_estate
                        ? errors.name_of_real_estate
                        : null
                    }
                  />
                </Grid>

				
				<Grid item xs={4}>
				<TextField
					error={errors.value && touched.value}
					name="value"
					value={values.value}
					variant="outlined"
					fullWidth 
					onChange={handleChange}
					label="Giá trị hợp đồng"
					helperText={
					errors.value && touched.value
						? errors.value
						: null
					}
			  		/>
				</Grid>


                <Grid item xs={4}>
                  <TextField
                    error={errors.representA && touched.representA}
                    name="representA"
                    value={values.representA}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Họ tên người đại diện bên A"
                    helperText={
                      errors.representA && touched.representA
                        ? errors.representA
                        : null
                    }
                  />
				  </Grid>

				  <Grid item xs={4}>
                  <TextField
                    error={errors.representB && touched.representB}
                    name="representB"
                    value={values.representB}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Họ tên người đại diện bên B"
                    helperText={
                      errors.representB && touched.representB
                        ? errors.representB
                        : null
                    }
                  />
				  </Grid>

				
				<Grid item xs={4}>
				<TextField
					error={errors.percent && touched.percent}
					name="percent"
					value={values.percent}
					variant="outlined"
					fullWidth 
					onChange={handleChange}
					label="Số phần trăm"
					helperText={
					errors.percent && touched.percent
						? errors.percent
						: null
					}
				/>
				</Grid>

				  <Grid item xs={4}>
                  <TextField
                    error={errors.CIDA && touched.CIDA}
                    name="CIDA"
                    value={values.CIDA}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Số CMND người đại diện bên A"
                    helperText={
                      errors.CIDA && touched.CIDA
                        ? errors.CIDA
                        : null
                    }
                  />
				  </Grid>

				  <Grid item xs={4}>
                  <TextField
                    error={errors.CIDB && touched.CIDB}
                    name="CIDB"
                    value={values.CIDB}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Số CMND người đại diện bên B"
                    helperText={
                      errors.CIDB && touched.CIDB
                        ? errors.CIDB
                        : null
                    }
                  />
				  </Grid>

			
				<Grid item xs={4}>
				<TextField
					name="commision"
					value={(parseFloat(values.value)*parseFloat(values.percent))/parseFloat(100)}
					variant="outlined"
					fullWidth 
					onChange={handleChange}
					label="Phần trăm thành tiền"
				/>
				</Grid>

				  <Grid item xs={4}>
                  <TextField
                    error={errors.phone_numberA && touched.phone_numberA}
                    name="phone_numberA"
                    value={values.phone_numberA}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Số điện thoại người đại diện bên A"
                    helperText={
                      errors.phone_numberA && touched.phone_numberA
                        ? errors.phone_numberA
                        : null
                    }
                  />
				  </Grid>

				  <Grid item xs={4}>
                  <TextField
                    error={errors.phone_numberB && touched.phone_numberB}
                    name="phone_numberB"
                    value={values.phone_numberB}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Số điện thoại người đại diện bên B"
                    helperText={
                      errors.phone_numberB && touched.phone_numberB
                        ? errors.phone_numberB
                        : null
                    }
                  />
				  </Grid>

				  <Grid item xs={2}> </Grid>

				  <Grid item xs={4}>
                  <TextField
                    error={errors.addressA && touched.addressA}
                    name="addressA"
                    value={values.addressA}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Địa chỉ người đại diện bên A"
                    helperText={
                      errors.addressA && touched.addressA
                        ? errors.addressA
                        : null
                    }
                  />
				  </Grid>

				  <Grid item xs={4}>
                  <TextField
                    error={errors.addressB && touched.addressB}
                    name="addressB"
                    value={values.addressB}
                    variant="outlined"
                    fullWidth 
                    onChange={handleChange}
                    label="Địa chỉ người đại diện bên B"
                    helperText={
                      errors.addressB && touched.addressB
                        ? errors.addressB
                        : null
                    }
                  />
				  </Grid>
                

			  <Grid item xs={4}></Grid>
			  
              <Grid item xs={12} >
                <FormControl fullWidth variant="outlined"  >
                  <Button size='large' color="primary" variant="contained" fullWidth
                    type="submit">
                    Submit
                  </Button>
                </FormControl>
              </Grid>
              
            </Grid>
			
            </Form>
          )}
        </Formik>

        <br/>
		</div>
	)
}
export default ContractItem;
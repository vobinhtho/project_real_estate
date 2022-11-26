import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { deleteReal_estate, updateReal_estate } from '../../store/actions/realEstateAction';
import { toast } from 'react-toastify';
import { deleteContract, updateContract } from '../../store/actions/contractAction';


const useStyles = makeStyles({
	content:{
		marginTop:50,
		marginRight:400,
		marginLeft:200
	}
});
  
toast.configure();

const SaveContract =({currentId,realid, setCurrentId, handleClose })=>{
	const classes = useStyles();

	const contracts = useSelector((state) => (currentId ? state.contracts.find((nv) => nv._id === currentId) : null));

	const realestate = useSelector((state) => (realid ? state.realestate.find((nv) => nv._id === realid) : null));
	console.log("idBDS"+realid);

	const [updateData, setUpdateData]=useState();
	const [updateDataRE, setUpdateDataRE]=useState();
	const [trangthai, setTrangthai]=useState('create');

	useEffect(() => {
		if (contracts) setUpdateData(contracts);
		if (realestate) setUpdateDataRE(realestate);
		if (contracts) setTrangthai(contracts.status)
	  });

	console.log(updateData);
	const dispatch = useDispatch();

	const handleApprove = () =>{
		updateData.status='saved';
		dispatch(updateContract(updateData,currentId));
		toast.success('Hợp đồng đã lưu trữ sẽ không được xóa hoặc chỉnh sửa !', {
          position: "top-center",
          autoClose: 3000,
          theme: "light"
        });
		handleClose();
	}

	const handleDelete=()=>{
		dispatch(deleteContract(currentId))
		updateDataRE.status='approved';
		dispatch(updateReal_estate(updateDataRE,realid))
		handleClose();
	}
	//console.log(status)
	
	
	return(
		<div>
		<br/>
		<Grid container spacing={3}>
			<Grid item xs={1}></Grid>
			<Grid item xs={11}>
			<Typography gutterBottom>Bạn có muốn lưu trữ hợp đồng này ? <br/>Hợp đồng lưu trữ sẽ không được xóa hoặc chỉnh sửa.</Typography>
			</Grid>

			<Grid item xs={2}></Grid>
			<Grid item xs={3}>
				<Button fullWidth variant='contained' color='default' onClick={handleClose}>Cancel</Button>
			</Grid>

			{trangthai==='create' ? 
			<Grid item xs={5}>
				<Button onClick={handleApprove} fullWidth variant='contained' color='primary'>Lưu trữ</Button>
			</Grid> :
			<Grid item xs={5}>
				<Button disabled onClick={handleApprove} fullWidth variant='contained' color='primary'>Lưu trữ</Button>
			</Grid>
			}

			<Grid item xs={2}></Grid>
			
			<Grid item xs={1}></Grid>
			<Grid item xs={11}>
			<Typography gutterBottom>Bạn muốn xóa hợp đồng này ?</Typography>
			</Grid>

			<Grid item xs={2}></Grid>
			<Grid item xs={3}>
				<Button fullWidth variant='contained' color='default' onClick={handleClose}>Cancel</Button>
			</Grid>
			<Grid item xs={5}>
			<Button onClick={handleDelete} fullWidth variant='contained' color='secondary'>Xóa hợp đồng</Button>
			</Grid>

			
		</Grid>
		<br/>
		<br/>
		<br/>
		</div>
	)
}
export default SaveContract;
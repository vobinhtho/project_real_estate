import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { deleteReal_estate, updateReal_estate } from '../../store/actions/realEstateAction';
import { toast } from 'react-toastify';


const useStyles = makeStyles({
	content:{
		marginTop:50,
		marginRight:400,
		marginLeft:200
	}
});
  
toast.configure();
const ApproveRE =({ currentId, setCurrentId, handleClose })=>{
	const classes = useStyles();

	const realestate = useSelector((state) => (currentId ? state.realestate.find((nv) => nv._id === currentId) : null));

//	console.log(realestate);

	const [updateData, setUpdateData]=useState();
	const [trangthai, setTrangthai]=useState('create');

	useEffect(() => {
		if (realestate) setUpdateData(realestate);
		if (realestate) setTrangthai(realestate.status)
	  });

	console.log(updateData);
	const dispatch = useDispatch();

	const handleApprove = () =>{
		updateData.status='approved';
		dispatch(updateReal_estate(updateData,currentId));
		toast.success('Bản tin đã được phê duyệt!', {
          position: "top-center",
          autoClose: 3000,
          theme: "light"
        });
		handleClose();
	}

	const handleDelete=()=>{
		dispatch(deleteReal_estate(currentId))
		handleClose();
	}
	//console.log(status)
	
	
	return(
		<div>
		<br/>
		<Grid container spacing={3}>
			<Grid item xs={1}></Grid>
			<Grid item xs={11}>
			<Typography gutterBottom>Bạn có muốn duyệt bài đăng cho bản tin này ?</Typography>
			</Grid>

			<Grid item xs={2}></Grid>
			<Grid item xs={3}>
				<Button fullWidth variant='contained' color='default' onClick={handleClose}>Cancel</Button>
			</Grid>

			{trangthai==='create' ? 
			<Grid item xs={5}>
				<Button onClick={handleApprove} fullWidth variant='contained' color='primary'>Duyệt bản tin</Button>
			</Grid> :
			<Grid item xs={5}>
				<Button disabled onClick={handleApprove} fullWidth variant='contained' color='primary'>Duyệt bản tin</Button>
			</Grid>
			}

			<Grid item xs={2}></Grid>
			
			<Grid item xs={1}></Grid>
			<Grid item xs={11}>
			<Typography gutterBottom>Bạn muốn xóa bản tin này ?</Typography>
			</Grid>

			<Grid item xs={2}></Grid>
			<Grid item xs={3}>
				<Button fullWidth variant='contained' color='default' onClick={handleClose}>Cancel</Button>
			</Grid>
			<Grid item xs={5}>
			<Button onClick={handleDelete} fullWidth variant='contained' color='secondary'>Xóa bản tin</Button>
			</Grid>

			
		</Grid>
		<br/>
		<br/>
		<br/>
		</div>
	)
}
export default ApproveRE;
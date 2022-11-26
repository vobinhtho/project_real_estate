import React,{useEffect,useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch,useSelector } from 'react-redux';
import moment from 'moment'
import Avatar from '@material-ui/core/Avatar';
import {TextField,DialogTitle,DialogContent,Dialog,DialogActions,DialogContentText,Typography, TableBody, Grid, Badge} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import {Box} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import FormEmployee from '../employees/FormEmployee'
import { useHistory, useLocation } from 'react-router-dom';
import { deleteUser, getUser } from '../../store/actions/userActions';
import { MdDelete, MdEdit } from 'react-icons/md';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 800,
  },
  button: {
    margin: 5,
  },
  
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);
export default function Employees() {

  const [currentId, setCurrentId] = useState(0);

  const classes = useStyles();
  //lay all employee 
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getUser());
  }, [dispatch])
  //const employees = useSelector((state)=>state.user.filter(x=>x.role==='nhanvien'))
  const employees = useSelector((state)=>state.user.filter(x => x.role==='khachhang'))

  //slice page
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // show open and close
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentId(0);
  };
  
  //search 
  const [search, setSearch] = useState("");
  const handleSearch=(e)=>{
     console.log(e.target.value);
     setSearch(e.target.value);
    
  }
  
  return (
    
    <div className={classes.root}>
    <div>
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth maxWidth={"md"} open={open}>
    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      <Box display="flex" alignItems="center">
      <Box flexGrow={1} >Add nhan vien</Box>
        <Box>
            <IconButton onClick={handleClose}>
                  <CloseIcon/>
            </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent dividers>
     <FormEmployee currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose}/>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose} color="primary">
        CLOSE FORM
      </Button>
    </DialogActions>
  </Dialog>
    </div>
    <Table>
      <TableRow>
        <TableCell><Button variant="contained" color="primary" startIcon={<AddCircleIcon/>} onClick={handleClickOpen}>Add Customer</Button></TableCell>
        <TableCell>
          <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" name="search" 
           onChange={handleSearch} value={search}
          />
        </TableCell>
        <TableCell>
        <Button className={classes.searchButton} variant="contained" color="primary">Search</Button>
        </TableCell>
      </TableRow>
    </Table>
      
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
          <TableCell padding="checkbox"><Checkbox/></TableCell>
          <TableCell>Avatar</TableCell>
          <TableCell>Họ và tên</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Số điện thoại</TableCell>
          <TableCell>Địa chỉ</TableCell>
          <TableCell>Giới tính</TableCell>
          <TableCell>Ngày sinh</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
        </TableHead>
        {employees.filter(item=>{
            return Object.keys(item).some(key=>{
              return item[key].toString().toLowerCase().includes(search.toLowerCase());
            })
          }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee)=>{
              return(
              <TableRow key={employee._id}>
              <TableCell padding="checkbox"><Checkbox/></TableCell>

              <TableCell onClick={()=>(setCurrentId(employee._id),handleClickOpen())}>       
              <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                <Avatar src={employee.avatar}/>
                </StyledBadge>        
              
              </TableCell>
              <TableCell onClick={()=>(setCurrentId(employee._id),handleClickOpen())}>{employee.fullname}</TableCell>
              
              <TableCell onClick={()=>(setCurrentId(employee._id),handleClickOpen())}>{employee.email}</TableCell>
              
              <TableCell onClick={()=>(setCurrentId(employee._id),handleClickOpen())}>{'0'+employee.phone_number}</TableCell>
              <TableCell >{employee.address.province ==='' ? 'Chưa cập nhật' : employee.address.province }</TableCell>
              <TableCell onClick={()=>(setCurrentId(employee._id),handleClickOpen())}>{employee.sex}</TableCell>
              <TableCell onClick={()=>(setCurrentId(employee._id),handleClickOpen())}>{moment(employee.dob).format('DD/MM/YYYY')}</TableCell>
              <TableCell>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="large"
                onClick={()=>(setCurrentId(employee._id),handleClickOpen())}>
               <MdEdit/>
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                size="large"
                onClick={() => dispatch(deleteUser(employee._id))}
            >
            <MdDelete/>
            </Button>
              </TableCell>
              
              </TableRow>
              );
            })
          }
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <formEmployee/>
    </div>
  );
}

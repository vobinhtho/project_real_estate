import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import {TextField,DialogTitle,DialogContent,Dialog,DialogActions,DialogContentText,Typography, TableBody, Grid} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import {Box} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { deleteUser, getUser } from '../../store/actions/userActions';
import { MdDelete, MdEdit, MdSave } from 'react-icons/md';
import { getContracts } from '../../store/actions/contractAction';
import ContractItem from './ContractItem';
import { IoPrintSharp } from 'react-icons/io5';
import SaveContract from './SaveContract'


const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop:30, paddingRight:10
  },
  container: {
    maxHeight: 800,
  },
  button: {
    margin: 5,
  },
  link:{
    textDecoration:'none',
    color:'#000'
  },
  saved:{
    color:'#e03c31',
    fontWeight:'bold'
  }
  
});


export default function Contracts() {

  const [currentId, setCurrentId] = useState(0);
  const [realid, setRealId] = useState(0);

  const classes = useStyles();
  //lay all employee 
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getContracts());
  }, [dispatch])
  //const employees = useSelector((state)=>state.user.filter(x=>x.role==='nhanvien'))
  const contracts = useSelector((state)=>state.contracts)

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

  const [openSave, setOpenSave] = useState(false);
  const handleClickOpenSave = () => {
    setOpenSave(true);
  };

  const handleClose = () => {
    setOpenSave(false);
    setOpen(false);
    setCurrentId(0);
    setRealId(0);
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
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth maxWidth={"lg"} open={open}>
    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      <Box display="flex" alignItems="center">
      <Box flexGrow={1} >Edit Contract</Box>
        <Box>
            <IconButton onClick={handleClose}>
                  <CloseIcon/>
            </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent dividers>
     <ContractItem realid={realid} setRealId={setRealId} currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose}/>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose} color="primary">
        CLOSE FORM
      </Button>
    </DialogActions>
  </Dialog>
    </div>

    <div>
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth maxWidth={"sm"} open={openSave}>
    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      <Box display="flex" alignItems="center">
      <Box flexGrow={1} >Save Contract</Box>
        <Box>
            <IconButton onClick={handleClose}>
                  <CloseIcon/>
            </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent dividers>
     <SaveContract realid={realid} setRealId={setRealId} currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose}/>
    </DialogContent>
  
  </Dialog>
    </div>
    
    <Table>
      <TableRow>
        <TableCell></TableCell>
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
          <TableCell>STT</TableCell>
          <TableCell>Item ID</TableCell>
          <TableCell>Loại hợp đồng</TableCell>
          <TableCell>Người bán</TableCell>
          <TableCell>Người mua</TableCell>
          <TableCell>Giá trị</TableCell>
          <TableCell>Ngày lập</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
        </TableHead>
        {contracts.filter(item=>{
            return Object.keys(item).some(key=>{
              return item[key].toString().toLowerCase().includes(search.toLowerCase());
            })
          })
          .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee,i)=>{
              return(

              <TableRow className={employee.status ==='create' ? classes.saved : ''}>

              <TableCell>{i+1}</TableCell>

              <TableCell>{employee._id}</TableCell>

              <TableCell>{employee.type_of_contract}</TableCell>

  
              <TableCell>{employee.representA}</TableCell>
            
              <TableCell>{employee.representB}</TableCell>
              <TableCell>{employee.value} VNĐ</TableCell>
              
              <TableCell onClick={()=>(setCurrentId(employee._id),handleClickOpen())}>{moment(employee.created_date).format('DD/MM/YYYY')}</TableCell>
              <TableCell>
              {employee.status==='create' ?
              (<span>
                <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="large"
                onClick={()=>(setCurrentId(employee._id), setRealId(employee.realestateid), handleClickOpen())}>
                <MdEdit/>
              </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  size="large"
                  onClick={()=>(setCurrentId(employee._id), setRealId(employee.realestateid), handleClickOpenSave())}
              >
              <MdSave/>
              </Button> 
              </span>)
              :
              <span>
              <Button
                  disabled
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large"
                    onClick={()=>(setCurrentId(employee._id), handleClickOpen())}>
                  <MdEdit/>
              </Button>
              <Button
               disabled
                variant="contained"
                color="secondary"
                className={classes.button}
                size="large"
                
            >
            <MdSave/>
            </Button>
            </span>
            }

            <Button
            variant="contained"
            color="default"
            className={classes.button}
            size="small"
            >
            <Link className={classes.link} to={"/admin/contractform/"+employee._id}>
            <IoPrintSharp/>
            </Link>
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
        count={contracts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <formEmployee/>
    </div>
  );
}

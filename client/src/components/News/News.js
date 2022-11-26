import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
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
import {TextField,DialogTitle,DialogContent,Dialog,DialogActions,DialogContentText,Typography, CircularProgress, Grid} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import {Box} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';

import { useHistory, useLocation } from 'react-router-dom';
import {Card,CardMedia,CardContent,CardActions,CardActionArea} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import New from './New/New'
import { deleteTintuc, getTintucs } from '../../store/actions/tintucsAction';
import FormNew from './FormNew'
import TestForm from './TestForm';
import {MdAddToPhotos} from 'react-icons/md'

const useStyles = makeStyles({
  button: {
    margin: 5,
  },
  itemTinTuc:{
    marginBottom:10
  },
  btnsearch:{
    marginTop:9,marginBottom:30
  },
  containerTinTuc:{
    paddingRight:30,
    marginTop:20
  },
  iconAdd:{
    color:'#3f51b5',
    height:50,width:50,
    paddingLeft:10,
    paddingTop:10
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
  },
  cover: {
    width: 220,
    minWidth:220,
    minHeight:180,
    height:180
  },
  content_abstract:{
    fontSize:14
  },
  date_tintuc:{
    fontSize:14,
    color:'grey',
    marginBottom:5
  },
  titleNew: {
    fontSize:17,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical"
  },
  tomtatNew: {
    fontSize:15,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical"
  },
  button_tintuc:{
    marginTop:-15
  }
  
});

export default function News() {

  const [currentId, setCurrentId] = useState(0);

  const classes = useStyles();
  //lay all employee 
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getTintucs());
  }, [dispatch])
  
  const tintucs = useSelector((state) => state.tintucs);

  //slice page
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  //search 
  const [search, setSearch] = useState("");
  const handleSearch=(e)=>{
     console.log(e.target.value);
     setSearch(e.target.value);
    
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentId(0);
  };

  //console.log(tintucs);
  return (
    <div>
    <div>
    <Dialog onClose={handleClose} fullWidth maxWidth={"md"} open={open}>
    <DialogTitle  onClose={handleClose}>
      <Box display="flex" alignItems="center">
      <Box flexGrow={1} >THÊM TIN TỨC</Box>
        <Box>
            <IconButton onClick={handleClose}>
                  <CloseIcon/>
            </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent dividers>
     <FormNew currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose}/>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose} color="primary">
        CLOSE
      </Button>
    </DialogActions>
  </Dialog>
    </div>

    <Grid container spacing={3} className={classes.containerTinTuc}>
        <Grid item xs={4}>
        <Button  variant="contained"
          color="primary"
          className={classes.btnsearch}
          onClick={handleClickOpen}
          size="large">
          <MdAddToPhotos/>
        </Button>
        </Grid>

        <Grid item xs={6}>
           <TextField fullWidth label="Search" variant="outlined" name="search" 
            onChange={handleSearch} value={search}/> 
        </Grid>
        <Grid item xs={2} fullWidth className={classes.btnsearch}>
          <Button variant='contained' color="primary">Search</Button>
        </Grid>
      
        {tintucs.filter(item=>{
          return Object.keys(item).some(key=>{
            return item[key].toString().toLowerCase().includes(search.toLowerCase());
          })
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
          return(
            <Grid item xs={12} sm={6} key={item._id} className={classes.itemTinTuc}>
            <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={item.cover}
                title={item.image_decription}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography className={classes.titleNew} color="primary">
                    {item.title}
                  </Typography>
                  <Typography className={classes.date_tintuc}>
                    {moment(item.createdAt).format('DD-MM-YYYY, h:mm:ss a')}
                  </Typography>
                  <Typography className={classes.tomtatNew}>
                    {item.abstract}
                  </Typography>
                </CardContent>
                <div className={classes.button_tintuc}>
                  <Button size="small" color="primary"  onClick={()=>(setCurrentId(item._id),handleClickOpen())}>
                    Edit
                  </Button>
                  <Button size="small" color="secondary" onClick={() => dispatch(deleteTintuc(item._id))}>
                    Delete
                  </Button>
                </div>
              </div>

            </Card>
            </Grid>);
          } 
        )}
        

        <Grid item xs={12}>
          <TablePagination
            rowsPerPageOptions={[6, 10, 20]}
            component="div"
            count={tintucs.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Grid>

    </Grid>
    
    </div>
    
  );
}

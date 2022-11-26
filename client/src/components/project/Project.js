import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import { useDispatch,useSelector } from 'react-redux';
import moment from 'moment'
import {TextField,DialogTitle,DialogContent,Dialog,DialogActions,Typography, Grid} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {Box} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import {Card,CardMedia,CardContent,} from '@material-ui/core'
import { deleteTintuc, getTintucs } from '../../store/actions/tintucsAction';
import {MdAddToPhotos} from 'react-icons/md'
import { deleteProject, getProjects } from '../../store/actions/projectAction';
import { FcMoneyTransfer } from 'react-icons/fc';
import { IoIosPeople } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
import ProjectForm from './ProjectForm';

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
//   root: {
//     display: 'flex',
//   },
  cover: {
    width: '100%',
    height:220,
    minHeight:220,
   
  },
  content_abstract:{
    fontSize:14
  },
  date_tintuc:{
    fontSize:17,
    color:'grey',
    marginBottom:5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical"
  },
  titleNew: {
    fontSize:17,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical"
  },
  titleNew1: {
    fontSize:17,
    color:'black', fontWeight:500,
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
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical"
  },
  button_tintuc:{
    marginTop:-15
  }
  
});

const Project =() =>{

  const [currentId, setCurrentId] = useState(0);

  const classes = useStyles();
  //lay all employee 
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProjects());
  }, [dispatch])
  
  const project = useSelector((state) => state.project);

  //slice page
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

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

  console.log(project);
  return (
    <div>
    <div>
    <Dialog onClose={handleClose} fullWidth maxWidth={"md"} open={open}>
    <DialogTitle  onClose={handleClose}>
      <Box display="flex" alignItems="center">
      <Box flexGrow={1}>THÊM DỰ ÁN</Box>
        <Box>
            <IconButton onClick={handleClose}>
                  <CloseIcon/>
            </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent dividers>
    <ProjectForm currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose}/>
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
      
        {project.filter(item=>{
          return Object.keys(item).some(key=>{
            return item[key].toString().toLowerCase().includes(search.toLowerCase());
          })
        }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
          return(
            <Grid item xs={12} sm={3} key={item._id} className={classes.itemTinTuc}>
            <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={item.images}
                title={item.image_decription}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography className={classes.titleNew} color="primary">
                   {item.name_project}
                  </Typography>
                  <Typography className={classes.titleNew1}>
                  <IoLocation/>  {item.address_project}
                  </Typography>
                  <Typography className={classes.date_tintuc}>
                  <IoIosPeople/> {item.investor}
                  </Typography>
                  <Typography className={classes.titleNew} color="primary">
                  <FcMoneyTransfer/> {item.investment_capital}
                  </Typography>
                  <Typography className={classes.date_tintuc}>
                   Ngày bắt đầu dự án: {moment(item.date_start).format('DD-MM-YYYY')}
                  </Typography>
                  <Typography className={classes.tomtatNew}>
                    {item.abstract}
                  </Typography>
                </CardContent>
                <div className={classes.button_tintuc}>
                  <Button size="small" color="primary"  onClick={()=>(setCurrentId(item._id),handleClickOpen())}>
                    Edit
                  </Button>
                  <Button size="small" color="default" onClick={() => dispatch(deleteProject(item._id))}>
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
            rowsPerPageOptions={[8, 10, 20]}
            component="div"
            count={project.length}
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
export default Project;

import React,{useEffect,useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import {TextField,DialogTitle,DialogContent,Dialog,DialogActions,DialogContentText,Typography, TableBody, Grid, Switch, FormControlLabel, FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import {Box} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { deleteUser, getUser } from '../../store/actions/userActions';
import { MdDelete, MdEdit, MdNote } from 'react-icons/md';
import { deleteReal_estate, getRealEstates } from '../../store/actions/realEstateAction';
import { CSVDownload, CSVLink } from "react-csv";
import CsvDownload from 'react-json-to-csv'
import { GrNotes } from 'react-icons/gr';
import ApproveRE from './ApproveRE'
import ContractItem from './ContractItem'
import Badge from '@material-ui/core/Badge';
import Homeitem from '../homepages/Homeitem';
import PreviewRealEstate from './PreviewRealEsate';


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
const StyledBadgeNon = withStyles((theme) => ({
  badge: {
    backgroundColor: '#d03323',
    color: '#d03323',
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

const useStyles = makeStyles({
  root: {
    width: '99%', marginTop:50,
    marginBottom:100,
    border:1
  },
  container: {
    maxHeight: 800,
  },
  button: {
    margin: 5,
  },
  approved:{
    color:"#d4a409",
  }
  
});


export default function AdminRealEstate () {

  const [currentId, setCurrentId] = useState(0);
  const [realid, setRealId] = useState(0);

  const classes = useStyles();
 
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getRealEstates());
  }, [dispatch])

  const realestate = useSelector((state)=>state.realestate);
  const project = useSelector((state)=>state.project);
  console.log(realestate)



  //= useSelector((state)=>state.user.filter(x => x.role==='nhanvien' || x.role==='admin'))

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

  const [openContract, setOpenContract] = useState(false);
  const handleClickOpenContract = () => {
    setOpenContract(true);
  };

  const [openPreview, setOpenPreview] = useState(false);
  const handleClickOpenPreview = () => {
    setOpenPreview(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenContract(false);
    setCurrentId(0);
    setRealId(0);
    setOpenPreview(0);
  };
  
    const address = useSelector((state)=> state.address);
    //console.log(address)
    const [objectCheck, setObjectCheck]=useState({ 
      phongNgu:false,  toilet:false,  phapLy:false,  theLoai:false,  diaChi:true,  dienTich:true,  giaTien:true,  loaiTinDang:false,
    })
    const handleObjectCheck = (event) => {
      setObjectCheck({ ...objectCheck, [event.target.name]: event.target.checked });
    };
   
    const [ObjectSearch,setObjectSearch]=useState({
        loaiNhadat:'',  diaChi:'', giaTien:'', dienTich:'', textSearch:'',  duAn:'', loaiDuAn:''
    })

  const [countPage, setCountPage]=useState(realestate.length)

  const OnchangeSearch=(event)=>{
      setObjectSearch({ ...ObjectSearch, [event.target.name]: event.target.value });
     //console.log(realestate.length)
      // setCountPage()
  }


  const  data = [
    [
      "Item ID","Tên Bất Động Sản", "Hình Thức", "Phường Xã", "Quận Huyện", "Tỉnh Thành", "Diện Tích", "Giá Tiền",
      "Mặt Tiền", "Chiều Dài", "Hướng Nhà", "Số Tầng", "Phòng Ngủ", "Toilet", "Giấy Tờ Pháp Lý",
      "Nội Thất", "Đối Tượng", "Email Liên Hệ", "Loại Tin Đăng","Trạng Thái"
    ],
    ...realestate.map(item => [
      item._id, item.real_estate_title,  item.real_estate_form,  item.address.ward,  item.address.district,
      item.address.province, item.area, item.price.price_number+' '+item.price.unit_price, item.facade,
      item.length,  item.orientation,  item.number_of_floors,  item.bedroom,
      item.toilet, item.legal_papers, item.furniture,  item.object,
      item.email_contact,  item.news_category, item.status
    ])

  ];

  
  return (
    <div>
    <Box  border={1} className={classes.root}>
    <div>
    <Dialog onClose={handleClose} fullWidth maxWidth={"sm"} open={open}>
    <DialogTitle  onClose={handleClose}>
      <Box display="flex" alignItems="center">
      <Box flexGrow={1} >Duyệt bản tin</Box>
        <Box>
            <IconButton onClick={handleClose}>
                  <CloseIcon/>
            </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent dividers>
    
      <ApproveRE currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose}/>

    </DialogContent>
   
  </Dialog>
    </div>

    <div>
    <Dialog onClose={handleClose} fullWidth maxWidth={"lg"} open={openContract}>
    <DialogTitle  onClose={handleClose}>
      <Box display="flex" alignItems="center">
      <Box flexGrow={1} >Hợp đồng mua bán Bất động sản</Box>
        <Box>
            <IconButton onClick={handleClose}>
                  <CloseIcon/>
            </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent dividers>
    
      <ContractItem realid={realid} setRealId={setRealId} currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} />

    </DialogContent>
   
  </Dialog>
    </div>

    <div>
    <Dialog onClose={handleClose} fullWidth maxWidth={"xl"} open={openPreview}>
    <DialogTitle  onClose={handleClose}>
      <Box display="flex" alignItems="center">
      <Box flexGrow={1} >Xem trước bất động sản</Box>
        <Box>
            <IconButton onClick={handleClose}>
                  <CloseIcon/>
            </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent dividers>
    
      <PreviewRealEstate realid={realid} setRealId={setRealId}  handleClose={handleClose} />

    </DialogContent>
   
  </Dialog>
    </div>

    <form>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth size='small' variant="outlined" className={classes.formControl}>
            <InputLabel>Loại nhà đất</InputLabel>
            <Select 
            name='loaiNhadat'
            label="Loại nhà đất"
            onChange={(e)=>OnchangeSearch(e)}
            >
            <MenuItem value="">Tất cả</MenuItem>
            <MenuItem value="Nhà ở">Nhà ở</MenuItem>
            <MenuItem value="Nhà riêng">Nhà riêng</MenuItem>
            <MenuItem value="Nhà chung cư">Nhà chung cư</MenuItem>
            <MenuItem value="Nhà biệt thự">Nhà biệt thự</MenuItem>
            <MenuItem value="Nhà mặt phố">Nhà mặt phố</MenuItem>
            <MenuItem value="Đất nền dự án">Đất nền dự án</MenuItem>
            <MenuItem value="Khác">Khác</MenuItem>
            </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <TextField size='small' onChange={(e)=>OnchangeSearch(e)} name='textSearch' fullWidth label="Search" variant="outlined" />
          </Grid>

          <Grid item xs={2}>
            <Button variant='contained' color='primary' fullWidth >Search</Button>
          </Grid>

          <Grid item xs={2}></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl size='small' variant="outlined" fullWidth >
            <InputLabel className={classes.textMadatory}>Địa chỉ</InputLabel>
            <Select
            onChange={(e)=>OnchangeSearch(e)}
            name='diaChi'
            label="Địa chỉ"
            >
            <MenuItem value="">Tất cả</MenuItem>
            {Array.from(new Set(address.map((j) => j.province_name))).map((pn) => (
              <MenuItem key={pn._id} value={pn}>{pn}</MenuItem>
            ))}
            
            </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
          <FormControl size='small' fullWidth variant="outlined" className={classes.formControl}>
          <InputLabel>Giá tiền</InputLabel>
          <Select
          name='giaTien'
          label="Giá tiền"
          onChange={(e)=>OnchangeSearch(e)}
          >
          <MenuItem value="">Tất cả</MenuItem>
          <MenuItem value='1'>Dưới 1 Tỷ</MenuItem>
          <MenuItem value='3'>Từ 1 - 3 Tỷ</MenuItem>
          <MenuItem value='5'>Từ 3 - 5 Tỷ</MenuItem>
          <MenuItem value='10'>Từ 5 - 10 Tỷ</MenuItem>
          <MenuItem value='10.1'>Trên 10 Tỷ</MenuItem>
          </Select>
          </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl size='small' fullWidth variant="outlined" className={classes.formControl}>
            <InputLabel >Diện tích</InputLabel>
            <Select
            name='dienTich' onChange={(e)=>OnchangeSearch(e)}
             label="Diện tích">
            <MenuItem value="">Tất cả</MenuItem>
            <MenuItem value="30">Nhỏ hơn 30 m²</MenuItem>
            <MenuItem value="50">Từ 30 m² - 50 m²</MenuItem>
            <MenuItem value="100">Từ 50 m² - 100 m²</MenuItem>
            <MenuItem value="101">Lớn hơn 100 m²</MenuItem>
            </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
          <FormControl size='small' fullWidth variant="outlined" className={classes.formControl}>
          <InputLabel >Dự án</InputLabel>
          <Select  name='duAn'
          onChange={(e)=>OnchangeSearch(e)}
          label="Dự án"
          >
          <MenuItem value="">Tất cả</MenuItem>
          {project.map(item=>(
            <MenuItem value={item.name_project}>{item.name_project}</MenuItem>
          ))}
          
          </Select>
          </FormControl>
          </Grid>
         

        </Grid>
    </form>

    <Table>
    
      <TableRow>
        <TableCell ></TableCell>
      
        <TableCell width='220'>
          <FormControlLabel  control={  <Checkbox  checked={objectCheck.toilet}  onChange={handleObjectCheck}  name="toilet"  color="Primary"   />  }  label="Toilet" />
          <FormControlLabel  control={  <Checkbox  checked={objectCheck.loaiTinDang}  onChange={handleObjectCheck}   name="loaiTinDang"  color="Primary" />  } label="Loại tin đăng" />
        </TableCell>

        <TableCell width='200'>
          <FormControlLabel control={  <Checkbox checked={objectCheck.phapLy} onChange={handleObjectCheck}  name="phapLy"  color="Primary"  /> }  label="Pháp lý" />
          <FormControlLabel   control={  <Checkbox   checked={objectCheck.giaTien}  onChange={handleObjectCheck}  name="giaTien" color="Primary" />  } label="Giá tiền" />
        </TableCell>

       <TableCell width='200'>
          <FormControlLabel control={   <Checkbox   checked={objectCheck.theLoai}  onChange={handleObjectCheck}  name="theLoai" color="Primary"  />  }  label="Loại nhà đất"  />
          <FormControlLabel  control={  <Checkbox  checked={objectCheck.diaChi}   onChange={handleObjectCheck}  name="diaChi" color="Primary"  />  }  label="Địa chỉ" />
        </TableCell>

        <TableCell width='200'>
          <FormControlLabel control={ <Checkbox  checked={objectCheck.phongNgu}  onChange={(e)=>handleObjectCheck(e)}  name="phongNgu" color="Primary" />  }  label="Phòng ngủ" />
          <FormControlLabel control={ <Checkbox checked={objectCheck.dienTich}  onChange={handleObjectCheck} name="dienTich" color="Primary"/>} label="Diện tích"/>
        </TableCell>

        <TableCell width='200'>
        <FormControlLabel control={ <Checkbox  checked={objectCheck.loaiDuAn}  onChange={(e)=>handleObjectCheck(e)}  name="loaiDuAn" color="Primary" />  }  label="Dự án" />
        <FormControl>
          <Button variant='contained' color='default'> 
          <CSVLink style={{ textDecoration: 'none', color:'black' }}  data={data} filename={"DreamHouse_Real_Estates.csv"}>
            Export CSV
          </CSVLink>
          </Button>
        </FormControl>
        </TableCell>

      </TableRow>

    </Table>
      
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
          <TableCell width='10'>STT</TableCell>
          <TableCell width='90'>Item ID</TableCell>
          <TableCell width='390'>Tên bất động sản</TableCell>
          <TableCell>Hình thức</TableCell>

          {objectCheck.diaChi===true ? (<TableCell width='370'>Địa chỉ</TableCell>) : ''}
          {objectCheck.dienTich===true ? (<TableCell>Diện tích</TableCell>) : ''}
          {objectCheck.giaTien===true ? (<TableCell>Giá tiền</TableCell>) : ''}
         
          {objectCheck.phongNgu===true ? (<TableCell>Phòng ngủ</TableCell>) : ''}
          {objectCheck.toilet===true ? (<TableCell>Toilet</TableCell>) : ''}
          {objectCheck.phapLy===true ? (<TableCell>Pháp lý</TableCell>) : ''}
          {objectCheck.theLoai===true ? ( <TableCell>Thể loại</TableCell>) : ''}
          {objectCheck.loaiTinDang===true ? ( <TableCell>Loại tin đăng</TableCell>) : ''}
          {objectCheck.loaiDuAn===true ? ( <TableCell>Dự án</TableCell>) : ''}
         
          <TableCell>Action</TableCell>
          <TableCell></TableCell>
         
        </TableRow>
        </TableHead>

        {
          realestate.filter(item => (ObjectSearch.loaiNhadat==='' ? (item.real_estate_category.includes('')):(item.real_estate_category.includes(ObjectSearch.loaiNhadat))) && ( ObjectSearch.duAn===''? (item.project_category.includes('')):(item.project_category.includes(ObjectSearch.duAn)) )
          && ( ObjectSearch.textSearch===''? (item.real_estate_title.includes('')):(item.real_estate_title.toString().toLowerCase().includes(ObjectSearch.textSearch.toString().toLowerCase())) )
          && (ObjectSearch.diaChi==='' ? (item.address.province.includes('')) : (item.address.province.includes(ObjectSearch.diaChi))) && 
          ( parseFloat(ObjectSearch.dienTich)===30 ? (parseFloat(item.area) < parseFloat(ObjectSearch.dienTich)) : 
            ( parseFloat(ObjectSearch.dienTich)===50 ? (parseFloat(item.area) <= parseFloat(ObjectSearch.dienTich) && parseFloat(item.area) >= parseFloat(30)) : 
            (parseFloat(ObjectSearch.dienTich)===100 ? (parseFloat(item.area) < parseFloat(ObjectSearch.dienTich) && parseFloat(item.area) >= parseFloat(50)) :
            (parseFloat(ObjectSearch.dienTich)===101 ? (parseFloat(item.area) >= parseFloat(ObjectSearch.dienTich)) : (ObjectSearch.dienTich===''? (item.area.includes('')):('')))))
          ) && (
            ( parseFloat(ObjectSearch.giaTien)===1 ? (item.price.unit_price.includes('Triệu')) : 
            ( parseFloat(ObjectSearch.giaTien)===3 ? (parseFloat(item.price.price_number) <= parseFloat(ObjectSearch.giaTien) && parseFloat(item.price.price_number) >= parseFloat(1)) : 
            (parseFloat(ObjectSearch.giaTien)===5 ? (parseFloat(item.price.price_number) <= parseFloat(ObjectSearch.giaTien) && parseFloat(item.price.price_number) >= parseFloat(3)) :
            (parseFloat(ObjectSearch.giaTien)===10 ? (parseFloat(item.price.price_number) <= parseFloat(ObjectSearch.giaTien) && parseFloat(item.price.price_number) >= parseFloat(5)) : 
            (parseFloat(ObjectSearch.giaTien)===10.1 ? (parseFloat(item.price.price_number) >= parseFloat(ObjectSearch.giaTien))  : (ObjectSearch.giaTien==='' ? item.price.price_number.includes(''):('') ))
            )))
          ))
        
          )
          .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(
            (item,i) =>(
              <TableRow key={item._id} className={item.status ==="create" ? classes.approved : classes.create}>
              <TableCell >{i+1}</TableCell>
              <TableCell >{item._id}
              </TableCell>
              <TableCell onClick={()=>(setRealId(item._id), handleClickOpenPreview())} >{item.real_estate_title}</TableCell>
              <TableCell >{item.real_estate_form}</TableCell>

              {objectCheck.diaChi===true ? (<TableCell >{item.address.street+' '+item.address.ward+', '+item.address.district+', '+item.address.province}</TableCell>) : ''}
              {objectCheck.dienTich===true ? (<TableCell >{item.area}</TableCell>) : ''}
              {objectCheck.giaTien===true ? (<TableCell >{item.price.price_number +' '+item.price.unit_price}</TableCell>) : ''}
               
              {objectCheck.phongNgu===true ? (<TableCell >{item.bedroom}</TableCell>) : ''}
              {objectCheck.toilet===true ? (<TableCell >{item.toilet}</TableCell>) : ''}
              {objectCheck.phapLy===true ? (<TableCell >{item.legal_papers}</TableCell>) : ''}
              {objectCheck.theLoai===true ? (<TableCell >{item.real_estate_category}</TableCell>) : ''}
              {objectCheck.loaiTinDang===true ? (<TableCell >{item.news_category}</TableCell>) : ''}
              {objectCheck.loaiDuAn===true ? (<TableCell >{item.project_category}</TableCell>) : ''}
              
            {/*
              <TableCell>
              <FormControlLabel
              control={
                <Switch
                  checked={false}
                  //onChange={handleChange}
                  //name="checkedB"
                  color="primary"
                />
              }
            />
              </TableCell>*/}
              <TableCell>
              
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                size="large"
                onClick={()=>(setCurrentId(item._id), handleClickOpen())}
                >
               <MdEdit/>
            </Button>

  
            {item.status==='contract' ?
            <Button
              disabled
              variant="contained"
              color="default"
              className={classes.button}
              size="large"
              onClick={()=>(setCurrentId(0), setRealId(item._id), handleClickOpenContract())}
              >
              <MdNote/>
            </Button>
            :
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#d6a532",
                  color:'white'
                }}
                className={classes.button}
                size="large"
                onClick={()=>(setCurrentId(0), setRealId(item._id), handleClickOpenContract())}
                >
                <MdNote/>
              </Button>
            }
            

              </TableCell>

              { ((new Date() - new Date(item.post_date) >= 0 ) && (new Date(item.expiration_date) - new Date() >=0 ) && (item.status==='approved' || item.status==='contract') ) ? <TableCell>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                </StyledBadge>
                </TableCell>:
                <TableCell>
                <StyledBadgeNon
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                </StyledBadgeNon>
                </TableCell>
              }
              
              </TableRow>
            )
          )
        }

       
       

       
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[5, 15, 30, 60 ]}
        component="div"
        count={realestate.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
          
      <formEmployee/>

      
     
    </Box>
    
    
    </div>
  );
}

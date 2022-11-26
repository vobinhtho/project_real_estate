import React, { useEffect,useState } from 'react';
import {Grid,AppBar,CardMedia, IconButton,Toolbar,Button,Select,InputLabel,FormControl,MenuItem,
    FormControlLabel,Radio,Paper,RadioGroup,TextField, Card, CardActionArea, CardContent, CardActions, Checkbox, TablePagination} from '@material-ui/core' 
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles'
import { IoIosCall } from 'react-icons/io';
import { ImHome } from 'react-icons/im';
import { IoLanguage } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../img/img1.jpg'
import image2 from '../img/img2.jpg'
import image3 from '../img/img3.jpg'
import { MdLocationOn } from 'react-icons/md';
import { GrVend } from 'react-icons/gr';
import { BsCalendar, BsHeart, BsStar } from 'react-icons/bs';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getRealEstates } from '../../store/actions/realEstateAction';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/actions/projectAction';
import { Link } from 'react-router-dom';
import moment from 'moment'
import noimgae from '../img/no_image_placeholder.jpg'
import { getUser, updateUser } from '../../store/actions/userActions';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
};

const Content = () =>{
    
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getRealEstates());
    // }, [dispatch]);
       
    const realEstate = useSelector((state)=>state.realestate.filter(item=>((new Date() - new Date(item.post_date) >= 0 ) && (new Date(item.expiration_date) - new Date() >=0 ) && (item.status==='approved' || item.status==='contract') )));

    // realEstate.map(i=>(
    //     //console.log(i.image_realestate.length)
    // ))
    console.log(realEstate)

    const company = useSelector((state)=>state.company);
    const projects = useSelector((state)=>state.project);


    const banner = [];
    company.map(com=>(
        com.banner_images.map(img=>(
            Object.keys(img).map(function(key,index){
               // banner.push(img[key])
               banner.push(<img src={img[key]}  width="100%" height="500" objectFit="cover"/>)
            })
        ))
    ))
    
    
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const [search, setSearch] = useState("");
    const handleSearch=(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    //console.log(realEstate)
    const [ObjectSearch,setObjectSearch]=useState({
        loaiNhadat:'',  diaChi:'', giaTien:'', dienTich:'', textSearch:'',  duAn:'', loaiDuAn:''
    })
    const OnchangeSearch=(event)=>{
        setObjectSearch({ ...ObjectSearch, [event.target.name]: event.target.value });
       //console.log(realestate.length)
        // setCountPage()
    }
    const address = useSelector((state)=> state.address);
    const project = useSelector((state)=>state.project);

    //like
    const [updateUserLike, setUserLike]=useState();
    const userLogin = useSelector((state)=> state.auth);
    const user = useSelector((state)=> state.user.find(u=>u._id===userLogin._id));

    const [statusLike, setStatusLike]=useState([]);

    useEffect(() => {
        if(user) setUserLike(user);
        if(user) setStatusLike(user.follow)
    });

    const handleFollow = (dataid) =>{
 
        if(updateUserLike.follow.includes(dataid)===true){
            const filteredItems = updateUserLike.follow.filter(item => item !== dataid)
            updateUserLike.follow=filteredItems;
            setStatusLike(updateUserLike.follow);
            dispatch(updateUser(updateUserLike,userLogin._id))

        }else if(updateUserLike.follow.includes(dataid)===false){
            updateUserLike.follow.push(dataid);
            setStatusLike(updateUserLike.follow);
            dispatch(updateUser(updateUserLike,userLogin._id))
        }
    }

    return(
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <AliceCarousel items={banner}  dotsDisabled buttonsDisabled autoPlay={true} autoPlayInterval="9000">
                </AliceCarousel>
            </Grid>

            <Grid item xs={12} className={classes.search}>

                <form>
                <Grid container spacing={2}>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
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
        
                  <Grid item xs={5}>
                    <TextField  onChange={(e)=>OnchangeSearch(e)} name='textSearch' fullWidth label="Search" variant="outlined" />
                  </Grid>
        
                  <Grid item xs={2}>
                    <Button variant='contained' size='large' color='primary' fullWidth >Search</Button>
                  </Grid>
        
                  <Grid item xs={1}></Grid>
        
                  <Grid item xs={1}></Grid>
                  <Grid item xs={3}>
                    <FormControl  variant="outlined" fullWidth >
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

                  <Grid item xs={3}>
                  <FormControl  fullWidth variant="outlined" className={classes.formControl}>
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
        
                  <Grid item xs={2}>
                  <FormControl  fullWidth variant="outlined" className={classes.formControl}>
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
                    <FormControl  fullWidth variant="outlined" className={classes.formControl}>
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
 
                </Grid>
            </form>
               

        {/*noi dung*/}

        <Grid container spacing={5} className={classes.cardContent}>
        
                <Grid item xs={12} className={classes.titleChiMuc}>
                <BsStar/> Bất động sản Mua Bán
                </Grid>

                {
                    realEstate.filter(item => (ObjectSearch.loaiNhadat==='' ? (item.real_estate_category.includes('')):(item.real_estate_category.includes(ObjectSearch.loaiNhadat))) && ( ObjectSearch.duAn===''? (item.project_category.includes('')):(item.project_category.includes(ObjectSearch.duAn)) )
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
                    .sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(
                      (real)=>{
                        return(
                        <Grid item xs={8} sm={6} md={3}>
                        <Card>
                        <Link className={classes.linkHome} to={"/homeitem/"+real._id}>
                        <CardActionArea>
                            {/*<CardMedia className={classes.media} image={real.image_realestate[0][0]} title={real.real_estate_title}/>*/}
                            { 
                                real.image_realestate.map(i=>(
                                    <CardMedia className={classes.media} image={i.[0]} />)) 
                            }

                            <CardContent>
                            <div className={real.news_category==='GÓI TIN MIỄN PHÍ' ? classes.titleCardVip3 : (real.news_category==='GÓI TIN VIP' ? classes.titleCardVip2 : classes.titleCardVip1)}>
                            <Typography className={classes.multiLineEllipsis} gutterBottom variant="h6" component="h2">
                            {real.real_estate_title}
                            </Typography>
                            </div>
                            <Typography className={classes.bodyCard} gutterBottom>
                                {real.price.price_number} {real.price.unit_price} · {real.area}
                            </Typography>
                            <Typography gutterBottom style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                            <MdLocationOn className={classes.iconCard}/> {real.address.district},  {real.address.province}
                            </Typography>
                            <Typography>
                            <GrVend className={classes.iconCard}/>  {real.real_estate_category}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Link>
                        <CardActions>
                            <Typography>
                            <BsCalendar className={classes.iconCard}/>  {moment(real.post_date).format('DD/MM/YYYY')}
                            </Typography>
                            <Typography color="primary" className={classes.title}>
                            </Typography>
                           
                            {statusLike.includes(real._id) ? 
                            <Button>
                                <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                label="Yêu thích" onClick={()=> handleFollow(real._id)} checked={true}
                                />
                            </Button>                          
                            :
                            <Button>
                                <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                label="Yêu thích" onClick={()=> handleFollow(real._id)} checked={false}
                                />
                            </Button>  
                            }
                            
                            
                        </CardActions>
                        </Card>
                       
                        </Grid>
                        )
                    })}


            <Grid item xs={12}>
                <TablePagination
                rowsPerPageOptions={[8, 10, 20]}
                component="div"
                count={realEstate.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Grid>
            {/*
            <Grid container xs={12}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} className={classes.btnAll}>
                <Button fullWidth variant="outlined" color="primary" size="large" >Xem chi tiết</Button></Grid>
            </Grid>*/}


        
            <Grid item xs={12} className={classes.titleChiMuc}>
                <BsStar/> Dự án bất động sản nổi bật
            </Grid>



            <Grid item xs={12} >
            <Carousel responsive={responsive} autoPlay autoPlaySpeed={5000}>
                {projects.map(item=>(
                    <Link className={classes.linkHome} to={"/projecthomeitem/"+item._id}>
                    <CardActionArea>
                    <CardMedia className={classes.cardListImg} image={item.images}
                    title="Contemplative Reptile" />
                    <br/>
                    <Typography className={classes.bodyCard1} gutterBottom>
                    {item.name_project}
                    </Typography>
                    </CardActionArea>
                    </Link>
                ))}

            </Carousel>
            </Grid>



            <Grid item xs={12} className={classes.titleChiMuc}>
                <BsStar/> Bất động sản theo khu vực
            </Grid>

            <Grid item xs={6}>
                <Link className={classes.linkHome} to={"/realestateplace/"+"Thành phố Hồ Chí Minh"}>
                    <CardActionArea className={classes.cardKhuvuc1}>
                    <Typography className={classes.bodyCard2} gutterBottom>
                        Hồ Chí Minh
                    </Typography>
                    <CardMedia className={classes.cardListImg1} image="https://media.vneconomy.vn/w800/images/upload/2021/04/20/anh-minh-hoa-1612805773725253820630-0-0-363-646-crop-16128057766671124643680.jpg"
                    title="Contemplative Reptile" />
                    </CardActionArea>
                </Link>
            </Grid>
            
            <Grid item xs={6}>
                <Grid container spacing={3}>
                    
                    <Grid item xs={6}>
                    <Link className={classes.linkHome} to={"/realestateplace/"+"Thành phố Cần Thơ"}>
                        <CardActionArea>
                        <Typography className={classes.bodyCard2} gutterBottom>
                           Thành Phố Cần Thơ
                        </Typography>
                        <CardMedia className={classes.cardListImg2} image="https://file4.batdongsan.com.vn/2020/11/04/b9sp0zUm/20201104114642-05ed.jpg"
                        title="Contemplative Reptile" />
                        </CardActionArea>
                    </Link>
                    </Grid>

                    <Grid item xs={6}>
                    <Link className={classes.linkHome} to={"/realestateplace/"+"Tỉnh Hậu Giang"}>
                        <CardActionArea>
                        <Typography className={classes.bodyCard2} gutterBottom>
                            Hậu Giang
                        </Typography>
                        <CardMedia className={classes.cardListImg2} image="http://baochinhphu.vn/Uploaded/nguyenminhdiem/2020_07_06/ViThanh.jpg"
                        title="Contemplative Reptile" />
                        </CardActionArea>
                    </Link>
                    </Grid>

                    <Grid item xs={6}>
                    <Link className={classes.linkHome} to={"/realestateplace/"+"Thành phố Đà Nẵng"}>
                        <CardActionArea>
                        <Typography className={classes.bodyCard2} gutterBottom>
                            Đà Nẵng
                        </Typography>
                        <CardMedia className={classes.cardListImg2} image="https://thanhtra.com.vn/data/images/0/2020/04/24/huonggiang/da-na%CC%86%CC%83ng.jpg?dpi=150&quality=100&w=630&mode=crop&anchor=topcenter&scale=both"
                        title="Contemplative Reptile" />
                        </CardActionArea>
                    </Link>
                    </Grid>
                
                    <Grid item xs={6}>
                    <Link className={classes.linkHome} to={"/realestateplace/"+"Thành phố Hà Nội"}>
                        <CardActionArea>
                        <Typography className={classes.bodyCard2} gutterBottom>
                            Hà Nội
                        </Typography>
                        <CardMedia className={classes.cardListImg2} image="https://media.kinhtedothi.vn//2021/07/11/thoitiethomnay.jpg"
                        title="Contemplative Reptile" />
                        </CardActionArea>
                    </Link>
                    </Grid>
                    
                </Grid>  
            </Grid>
        </Grid>

            </Grid>
        </Grid>
 
    );
}
export default Content;
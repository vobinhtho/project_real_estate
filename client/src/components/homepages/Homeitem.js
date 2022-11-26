import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, Grid, IconButton,  Typography } from "@material-ui/core";
import React,{ useEffect, useState} from "react";
import useStyles from './styles'
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoCloseCircleOutline, IoLocation } from "react-icons/io5";
import { BsCalendar, BsFillDiamondFill } from "react-icons/bs";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { GrVend } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import {FcCheckmark} from 'react-icons/fc'
import {RiLiveLine,RiHome8Line} from 'react-icons/ri'
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import moment from 'moment'
import BookRealEstate from "./BookRealEstate";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { getRealEstates } from "../../store/actions/realEstateAction";
import chatBot from "./chatBot/ChatBotReal";
import ChatBotReal from "./chatBot/ChatBotReal";


const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
  };

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
};

const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

const Homeitem = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();


    const { id } = useParams();

    
    const realestate = useSelector(state=>state.realestate.filter(u=>u._id === id))

    //const realestate = useSelector(state=>state.realestate.filter(u=>u._id === realid))

    const project = useSelector(state=>state.project)
    const tintucs = useSelector(state=>state.tintucs)
    const state = useSelector(state=>state)
    //const user = useSelector(state=>state.user)
    const user = useSelector(state=>state.user.filter( u => {
        return realestate.find( r => r.user_id === u._id );
    }));

    // const [poslat,setLat]=useState(realestate[0].location.lat);
    // const [poslng,setLng]=useState(realestate[0].location.lat);
   
    //console.log(realestate[0].location)
    //const url = `https://maps.google.com/maps?q=${poslat},${poslng}&hl=es;z=14&amp;output=embed`
    // const url = "https://maps.google.com/maps?q=10.026351755320325,105.76418581610247&hl=es;z=14&amp;output=embed"
    const banner = [];
    realestate.map(com=>(
        com.image_realestate.map(img=>(
            Object.keys(img).map(function(key,index){
              //banner.push(img[key])
               banner.push(<CardMedia className={classes.imgHomeitem} image={img[key]} />)
            })
        ))
    ))
    
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      //setCurrentId(0);
    };

    const realestateAll = useSelector((state)=>state.realestate.filter(item=>((new Date() - new Date(item.post_date) >= 0 ) && (new Date(item.expiration_date) - new Date() >=0 ) && (item.status==='approved' || item.status==='contract') && (item.real_estate_category===realestate[0].real_estate_category) )));

    return(
            
        <Grid container spacing={3} className={classes.containItem}>    
        
        <div>
        <Dialog onClose={handleClose} fullWidth maxWidth={"md"} open={open}>
        <DialogTitle  onClose={handleClose}>
          <Box display="flex" alignItems="center">
          <Box flexGrow={1}> ĐẶT LỊCH HẸN XEM BẤT ĐỘNG SẢN</Box>
            <Box>
                <IconButton onClick={handleClose}>
                      <IoCloseCircleOutline/>
                </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
            <BookRealEstate id={id}  handleClose={handleClose}/>
        </DialogContent>
       
      </Dialog>
        </div>

            <Grid item xs={1}></Grid>
            <Grid item xs={7}>

                <Carousel responsive={responsive} showDots>
                    {banner}
                </Carousel>
                {
                realestate.map(item=>(
                <Card>
                <CardContent>
                <Typography className={classes.titleTen} gutterBottom>
                {item.real_estate_title}
                </Typography>
                <Typography gutterBottom className={classes.titleDiachi}>
                <IoLocation className={classes.colorIcon}/>   {item.address.street+' '+item.address.ward+', '+item.address.district+', '+item.address.province}
                </Typography>
                <FormGroup row>
                    <Typography gutterBottom className={classes.titleDiachi}>
                        Ngày đăng: {moment(item.post_date).format('DD/MM/YYYY')}
                    </Typography>
                    <Typography className={classes.space}> | </Typography>
                    <Typography gutterBottom className={classes.titleDiachi}>
                        Ngày hết hạn: {moment(item.expiration_date).format('DD/MM/YYYY')}
                    </Typography>
                </FormGroup>

                <FormGroup row>
                    <Typography gutterBottom className={classes.titleDiachi}>
                        Mức giá: <div className={classes.colorIcon}> {item.price.price_number+' '+item.price.unit_price}</div>
                    </Typography>
                    <Typography className={classes.space}> | </Typography>
                    <Typography gutterBottom className={classes.titleDiachi}>
                        Diện tích: <div className={classes.colorIcon}> {item.area}</div>
                    </Typography>
                    <br/>
                </FormGroup>
                
                <Typography className={classes.titleTen} gutterBottom>
                <BsFillDiamondFill className={classes.colorIcon}/> Thông tin mô tả
                </Typography>
                <hr/>
                <Typography gutterBottom className={classes.titleDiachi}>
                    {ReactHtmlParser(item.description_information)}
                </Typography>
                <br/>

                <Typography className={classes.titleTen} gutterBottom>
                <BsFillDiamondFill className={classes.colorIcon}/>    Thông tin cơ bản
                </Typography>

                <FormGroup row>
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Địa chỉ: 
                        </Typography>
                    </Grid>
                    <Grid xs={9}>
                        <Typography gutterBottom className={classes.titleDiachi}>
                        {item.address.street+' '+item.address.ward+', '+item.address.district+', '+item.address.province}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Nhu cầu:
                        </Typography>
                    </Grid>
                    <Grid xs={9}>
                        <Typography gutterBottom className={classes.titleDiachi}>
                        {item.real_estate_form}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Loại nhà đất:
                        </Typography>
                    </Grid>
                    <Grid xs={9}>
                        <Typography gutterBottom className={classes.titleDiachi}>
                            {item.real_estate_category}
                        </Typography>
                    </Grid>
                    
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Giấy tờ pháp lý:
                        </Typography>
                    </Grid>
                    <Grid xs={9}>
                        <Typography gutterBottom className={classes.titleDiachi}>
                            {item.legal_papers}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Mặt tiền:
                        </Typography>
                    </Grid>
                    <Grid xs={9}>
                        <Typography gutterBottom className={classes.titleDiachi}>                  
                         {item.facade}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Chiều dài:
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi}>                  
                         {item.length}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Hướng nhà:
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi}>                  
                         {item.orientation}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Số tầng:
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi}>                  
                         {item.number_of_floors}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Số phòng ngủ:
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi}>                  
                         {item.bedroom}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                        Số toilet:
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi}>                  
                         {item.toilet}
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                        Nội thất:
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi}>                  
                         {item.furniture}
                        </Typography>
                    </Grid>
                </FormGroup>

                <Typography className={classes.titleTen} gutterBottom>
                 <BsFillDiamondFill className={classes.colorIcon}/>   Dự án
                </Typography>
                <FormGroup row>
                    <Grid xs={3}>
                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Dự án:
                        </Typography>
                    </Grid>
                    <Grid xs={9}>
                        <Typography gutterBottom className={classes.titleDiachi}>
                        {item.project_category}
                        </Typography>
                    </Grid>
                    
                </FormGroup>

                <Typography className={classes.titleTen} gutterBottom>
                <BsFillDiamondFill className={classes.colorIcon}/>   Xem trên bản đồ
               </Typography>

               <iframe
                   src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC17BnePANQNA9zDMvKLVZBThouLlJbmvY&zoom=12&q=${item.location.lat},${item.location.lng}`}
                   width="1140"
                    height="370"
                    style={{ border: "1" }}
                    allowfullscreen=""
                    loading="lazy"
                >
                </iframe>
                

               {/*

                    <MapContainer center={{ lat: 10.026351755320325, lng: 105.76418581610247 }}
                    zoom={10}
                    style={{ height: "420px", width: "auto" }}
                    scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker icon={customMarker} position={{ lat: item.location.lat, lng: item.location.lng }}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
               </MapContainer> */}
               </CardContent> 
            </Card>
                    ))
                }
                
            <br/>

            </Grid>

            
            <Grid item xs={3}>  
                {
                    realestate.map(item=>(
                        <Card>
                <CardContent>
                    <Typography gutterBottom className={classes.titleTen}>
                        Đặc điểm nổi trội
                    </Typography>
                    <Typography gutterBottom className={classes.titleDiachi1}>
                    <FcCheckmark className={classes.iconCheck}/> {item.price.price_number+' '+item.price.unit_price} <span className={classes.space}> | </span> {item.area}
                    </Typography>
                    <Typography gutterBottom className={classes.titleDiachi1}>
                    <FcCheckmark className={classes.iconCheck}/> Giấy tờ pháp lý: {item.legal_papers}
                    </Typography>
                    <Typography gutterBottom className={classes.titleDiachi1}>
                    <FcCheckmark className={classes.iconCheck}/> Mặt tiền: {item.facade} 
                    </Typography>
                    <Typography gutterBottom className={classes.titleDiachi1}>
                    <FcCheckmark className={classes.iconCheck}/> Số phòng ngủ: {item.bedroom} 
                    </Typography>
                    <Typography gutterBottom className={classes.titleDiachi1}>
                    <FcCheckmark className={classes.iconCheck}/>Loại nhà đất: {item.real_estate_category} 
                    </Typography>
    

                    <Typography gutterBottom className={classes.titleTen}>
                        Đăng lịch xem nhà
                    </Typography>
                    <Typography gutterBottom className={classes.titleDiachi}>
                        Có thể đặt lịch hẹn xem nhà với 2 hình thức:
                    </Typography>
                    <br/>
                    <FormGroup row>
                        <Grid item xs={12}>
                        <Button size="large" variant="outlined" color="primary" onClick={handleClickOpen}><RiHome8Line style={{marginRight:10, fontSize:20}}/> Đặt lịch hẹn xem nhà</Button>
                        </Grid>
            
                    </FormGroup>
                    <br/>
                    {/*
                    <Typography gutterBottom className={classes.titleTen}>
                    Share bài đăng
                    </Typography>
                    
                    <FormGroup row>
                    
                    <FacebookShareButton className={classes.shareIcon}
                        url='http://localhost:3000/homeitem/618f5ed8245eb8129d5c01ab'
                        quote={"quote tho ne"}
                        hashtag={"#nhadat"}
                        description={"Bán nhà đẹp"}
                    >
                        <FacebookIcon size={45} round />
                    </FacebookShareButton>
                    
                    <TwitterShareButton  
                        title={"Nhà đất đẹp"}
                        url={"http://localhost:3000/homeitem/618f5ed8245eb8129d5c01ab"}
                        hashtags={["hashtag1", "hashtag2"]}
                        >
                        <TwitterIcon size={45} round />
                       
                    </TwitterShareButton>

                   

                    </FormGroup>*/}
                    <br/>
                    <Typography gutterBottom className={classes.titleTen}>Chat với chúng tôi</Typography>

                    <div className={classes.IconChat}> <ChatBotReal/></div>
                    

                </CardContent>
                   
                </Card>

                    ))
                }

                <br/>
                

                <br/>
                <Card>
                    <CardContent>
                    <br/>
                    {user.map(item=>(
                   
                        <FormGroup row>   
                        <Grid xs={3}>
                        <Avatar src={item.avatar} style={{height:75,width:75, marginLeft:20}} />
                    </Grid>

                    <Grid xs={9}>
                    
                        <Typography gutterBottom style={{color:"#1c46a5",fontSize:24,fontWeight:500}}>
                            {item.fullname}
                        </Typography>

                        <Typography gutterBottom className={classes.titleDiachi1}>
                            Email: {item.email}
                            </Typography>
                        
                        {realestate.map(item=>(
                            <Typography gutterBottom className={classes.titleDiachi1}>
                            Vai trò: {item.object}
                            </Typography>
                        ))}
                    
                       
                        <Typography gutterBottom className={classes.colorIcon}>
                            <FaPhoneAlt/> <b>0{item.phone_number}</b>
                        </Typography>
                        
                        <Button variant='outlined' color="primary" size="large">Gửi email liên hệ</Button>
                        
                        </Grid>
                        </FormGroup>
                        ))}

                    <br/>
                    </CardContent>
                </Card>
                <br/>
                <Card>
                    
                    <CardContent>          
                        <Typography gutterBottom className={classes.titleTen}>
                            Dự án bất động sản
                        </Typography>
                        <hr/>
                        {
                            project.slice(0, 10).map(item=>(
                                <Typography gutterBottom className={classes.titleDiachi2}>
                                    {item.name_project}
                                </Typography>
                            ))
                        }
                        
                    </CardContent>
                </Card>

                <br/>
                <Card>
                    
                    <CardContent>          
                        <Typography gutterBottom className={classes.titleTen}>
                        Tin tức bất động sản
                        </Typography>
                        <hr/>
                        {
                            tintucs.slice(0,5).map(item=>(
                                <Typography gutterBottom className={classes.titleDiachi2}>
                                {item.title}
                                </Typography>
                            ))
                        }
                        
        
                    </CardContent>
                </Card>
                    
            </Grid>
            
            
            <Grid container xs={12} className={classes.marginItem}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                <Typography className={classes.titleTen} gutterBottom>
                <BsFillDiamondFill className={classes.colorIcon}/>    Các tin liên quan
                </Typography>
                <Carousel responsive={responsive1} autoPlay autoPlaySpeed={5000}>
                
                    {realestateAll.sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
                    .map(item=>(
                    <div className={classes.paper3}>
                    <Card>
                        <Link className={classes.linkHome} to={"/homeitem/"+item._id}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={item.image_realestate[0][0]}
                            title={item.real_estate_title}
                            />
                            <CardContent>
                            <div className={item.news_category==='GÓI TIN MIỄN PHÍ' ? classes.titleCardVip3 : (item.news_category==='GÓI TIN VIP' ? classes.titleCardVip2 : classes.titleCardVip1)}>
                            <Typography className={classes.multiLineEllipsis} gutterBottom variant="h6" component="h2">
                            {item.real_estate_title}
                            </Typography>
                            </div>
                            
                            <Typography className={classes.bodyCard} gutterBottom>
                            {item.price.price_number} {item.price.unit_price} · {item.area}
                            </Typography>

                            <Typography gutterBottom style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                            <MdLocationOn className={classes.iconCard}/>  {item.address.district},  {item.address.province}
                            </Typography>

                            <Typography>
                            <GrVend className={classes.iconCard}/>    {item.real_estate_category}
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        </Link>
                        <CardActions>
                            <Typography>
                            <BsCalendar className={classes.iconCard}/>  {moment(item.post_date).format('DD/MM/YYYY')}
                            </Typography>
                            <Typography color="primary" className={classes.title}>
                            
                            </Typography>
                            <Button>
                            <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                            label="Yêu thích"/>
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                    ))}

                </Carousel>
                <br/>
                </Grid>
            </Grid>
                        

        </Grid>
        
    )
}
export default Homeitem;
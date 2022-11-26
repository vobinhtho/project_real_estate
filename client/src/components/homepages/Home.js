import React, {useState} from "react";
import { Container, Typography,AppBar, Toolbar, 
    IconButton, Button, Grid, Paper, CardMedia,Radio,FormControlLabel,FormControl,RadioGroup, TextField,
    Select,InputLabel,MenuItem,CardActionArea,CardContent,CardActions,Card, Box } from "@material-ui/core";
import makeStyles from './styles.js';
import { IoIosCall } from "react-icons/io";
import { ImHome } from "react-icons/im";
import {GrVend} from "react-icons/gr"
import {MdLocationOn} from "react-icons/md"
import {IoLanguage} from "react-icons/io5"
import {FaBell} from "react-icons/fa"
import {BsCalendar,BsHeart} from "react-icons/bs"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../img/img1.jpg"
import image2 from "../img/img2.jpg"
import image3 from "../img/img3.jpg"
import { useDispatch, useSelector } from 'react-redux';
import App from "../../App";
import Homeitem from "./Footer.js";
import { green } from "@material-ui/core/colors";


// const useStyles = makeStyles((theme) => ({
//     container: {
//        fontFamily:"Roboto",
//        color:"#172b4d",
//        backgroundColor:"pink",
//        //margin:-8
//     },
//     menuButton: {
//       marginRight: theme.spacing(5),
//     },
//     title: {
//       flexGrow: 1,
//       fontSize:18
//     },
//     appBar:{
//         marginTop:130,
//         backgroundColor:"#1b3494",
//         paddingLeft:80,
//         paddingRight:80,
//         fontSize:18
//     },
//     appBarMenu:{
//         marginRight:30,
//         fontSize:17,
//     },
//     icon_home:{
//         marginRight:15,
//     },
//     header:{
//         backgroundColor:"#273879", height:190,
//     },
//     paper0:{
//         display: 'flex',
//         fontSize:18,
//         color:"#cf9f71",
//         backgroundColor:"#273879",
//         paddingRight:40
//     },
//     paper1:{
//         marginTop:30,
//         display: 'flex',
//         fontSize:17,
//         color:"#cf9f71",
//         backgroundColor:"#273879",
//         float:"right",
//     },
//     paper2:{
//         marginTop:20,
//         marginLeft:30,
//         display: 'flex',
//         float:"right",
//         fontSize:16,
//         color:"#dee2e6",
//         backgroundColor:"#273879"
//     },
//     logo_home:{
//         paddingTop:20,
//         paddingLeft:110
//     },
//     logosmall:{
//         paddingTop:1, height:18, width:18,marginLeft:5, paddingRight:40
//     },
//     sliderimg: {
//         width: "100%",
//         height: 500,
//         objectFit:"cover"
//     },
//     banner: {
//         //height:500
//     },
//     appbarBanner:{
//         marginTop:190,
//         height:650
//     },
//     textSearch: {
//         marginTop:20
//     },
//     radioSearch: {
//         marginTop:12
//     },
//     appSearch:{height:190, padding:10, marginTop:650, backgroundColor:"#f5f7fc"},
//     paper3: {
//         padding: theme.spacing(1),textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
//     media: {
//         height: 140,
//     },
   
//     appbarContent:{
//         minHeight:600, maxHeight:'auto',marginTop:840, backgroundColor:'white', 
//         paddingTop:60,paddingLeft:100,paddingRight:100, paddingBottom:100
//     },
//     content:{

//     },
//     multiLineEllipsis: {
//         overflow: "hidden",
//         textOverflow: "ellipsis",
//         display: "-webkit-box",
//         "-webkit-line-clamp": 2,
//         "-webkit-box-orient": "vertical"
//     },
//     bodyCard:{
//         fontSize:18, color:"#14181b", fontWeight:500
//     },
//     iconCard:{
//         marginRight:15
//     },
//     titleCardVip1:{
//         color:'purple'
//     },
//     titleCardVip2:{
//         color:'#bf6921'
//     },
//     titleCardVip3:{
//         color:'#484645'
//     },
//     btnAll:{
//         marginTop:50
//     }
//   })); 

const Home = () =>{
    
    const classes = makeStyles();
    
    return(
        <div className={classes.container}> 
        <AppBar position='absolute' className={classes.header}>
        <Grid spacing={3} className={classes.paper0}>
            <Grid item xs={3} className={classes.logo_home}>
            <CardMedia
                component="img"
                height="90"
                image="https://quatest2.com.vn/wp-content/uploads/2021/04/hinh-nha-thiet-ke-don-gian-2-e1605771347156.jpg"
            />
            </Grid>
            <Grid item xs={4}>
            <div className={classes.paper}></div>
            </Grid>
            <Grid item xs ={5}>
            <div className={classes.paper1}>
                <div className={classes.menuButton}>
                <IoIosCall/> Tổng đài CSKH: 0296 1445 9999  </div>
                <div className={classes.menuButton}><ImHome/> Dream House  </div>
                <div className={classes.menuButton}><IoLanguage/> Tiếng Việt  </div> 
            </div>
            <div className={classes.paper2}>
                <div className={classes.menuButton}> Yêu thích  </div>
                <div className={classes.menuButton}> Lịch sử  </div>
                <div> Thông báo  </div> <FaBell className={classes.logosmall} />
            </div>
            </Grid>
        </Grid>
        </AppBar>

        <AppBar position='absolute' className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.icon_home} color="inherit" aria-label="menu">
           <ImHome/>
          </IconButton>
          <Typography  className={classes.appBarMenu} >
            Trang chủ
          </Typography>
          <Typography  className={classes.appBarMenu}>
            Mua bán
          </Typography>
          <Typography  className={classes.appBarMenu}>
            Cho thuê
          </Typography>
          <Typography  className={classes.appBarMenu}>
            Sang nhượng
          </Typography>
          <Typography  className={classes.appBarMenu}>
            Tin tức
          </Typography>
          <Typography  className={classes.appBarMenu}>
            Bản đồ
          </Typography>
          <Typography  className={classes.title}>
            Tiện ích
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        
      <AppBar position='absolute' className={classes.appbarBanner}>
        <Grid container className={classes.banner}>
        <AliceCarousel autoPlay={true} autoPlayInterval="9000">
        <img src={image1} className={classes.sliderimg} alt=""/>
        <img src={image2} className={classes.sliderimg} alt=""/>
        <img src={image3} className={classes.sliderimg} alt=""/>
        </AliceCarousel>
        </Grid>
      </AppBar>
        
        
        <AppBar position="absolute" className={classes.appSearch}>
        <Toolbar>
            <Grid container spacing={3} className={classes.search}>

                <Grid item xs={2} className={classes.radioSearch}>
                    <Paper className={classes.paper3}>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel value="end" control={<Radio color="primary" />} label="Mua Bán" />
                            <FormControlLabel value="end" control={<Radio color="primary" />} label="Thuê Mướn" />
                            <FormControlLabel value="end" control={<Radio color="primary" />} label="Sang nhượng" />
                        </RadioGroup>
                    </FormControl>
                    </Paper>
                </Grid>


                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={9} className={classes.textSearch}>
                        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                        </Grid>

                        <Grid item xs={2} className={classes.textSearch}>
                        <Button fullWidth variant="contained" style={{backgroundColor:"#1638ad", color:"white",height:55}}>Tìm kiếm</Button>
                        </Grid>

                        <Grid item xs={1}>
                        </Grid>

                        <Grid item xs={4}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Khu vực"
                            >
                            <MenuItem value="">
                                <em>Tất cả</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={3}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Loại nhà đất</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Khu vực"
                            >
                            <MenuItem value="">
                                <em>Tất cả</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={2}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Giá tiền</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Khu vực"
                            >
                            <MenuItem value="">
                                <em>Tất cả</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={2}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Diện tích</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Khu vực"
                            >
                            <MenuItem value="">
                                <em>Tất cả</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
        </AppBar>
       

        <AppBar position="absolute" className={classes.appbarContent}>
            <Toolbar>
                <Grid container spacing={5}>
                    <Grid item xs={8} sm={6} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image1}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <div className={classes.titleCardVip1}>
                            <Typography className={classes.multiLineEllipsis} gutterBottom variant="h6" component="h2">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                            </div>
                            

                            <Typography className={classes.bodyCard} gutterBottom>
                                6.5 Tỷ · 32.5 Triệu/m²
                            </Typography>

                            <Typography gutterBottom style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                              <MdLocationOn className={classes.iconCard}/>  Thành phố Bến Tre, Tỉnh Bến Tre
                            </Typography>

                            <Typography>
                            <GrVend className={classes.iconCard}/>   Căn hộ chung cư
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography>
                            <BsCalendar className={classes.iconCard}/>  Hôm nay
                            </Typography>
                            <Typography color="primary" className={classes.title}>
                            
                            </Typography>
                            <Button><BsHeart/></Button>
                        </CardActions>
                        </Card>
                    </Grid>

                    

                    <Grid item xs={8} sm={6} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image1}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <div className={classes.titleCardVip2}>
                            <Typography className={classes.multiLineEllipsis} gutterBottom variant="h6" component="h2">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                            </div>
                            

                            <Typography className={classes.bodyCard} gutterBottom>
                                6.5 Tỷ · 32.5 Triệu/m²
                            </Typography>

                            <Typography gutterBottom>
                              <MdLocationOn className={classes.iconCard}/>  Thành phố Bến Tre, Tỉnh Bến Tre
                            </Typography>

                            <Typography>
                            <GrVend className={classes.iconCard}/>   Căn hộ chung cư
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography>
                            <BsCalendar className={classes.iconCard}/>  Hôm nay
                            </Typography>
                            <Typography color="primary" className={classes.title}>
                            
                            </Typography>
                            <Button><BsHeart/></Button>
                        </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={8} sm={6} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image1}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <div className={classes.titleCardVip2}>
                            <Typography className={classes.multiLineEllipsis} gutterBottom variant="h6" component="h2">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                            </div>
                            

                            <Typography className={classes.bodyCard} gutterBottom>
                                6.5 Tỷ · 32.5 Triệu/m²
                            </Typography>

                            <Typography gutterBottom>
                              <MdLocationOn className={classes.iconCard}/>  Thành phố Bến Tre, Tỉnh Bến Tre
                            </Typography>

                            <Typography>
                            <GrVend className={classes.iconCard}/>   Căn hộ chung cư
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography>
                            <BsCalendar className={classes.iconCard}/>  Hôm nay
                            </Typography>
                            <Typography color="primary" className={classes.title}>
                            
                            </Typography>
                            <Button><BsHeart/></Button>
                        </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={8} sm={6} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image1}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <div className={classes.titleCardVip3}>
                            <Typography className={classes.multiLineEllipsis} gutterBottom variant="h6" component="h2">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                            </Typography>
                            </div>
                            

                            <Typography className={classes.bodyCard} gutterBottom>
                                6.5 Tỷ · 32.5 Triệu/m²
                            </Typography>

                            <Typography gutterBottom>
                              <MdLocationOn className={classes.iconCard}/>  Thành phố Bến Tre, Tỉnh Bến Tre
                            </Typography>

                            <Typography>
                            <GrVend className={classes.iconCard}/>   Căn hộ chung cư
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Typography>
                            <BsCalendar className={classes.iconCard}/>  Hôm nay
                            </Typography>
                            <Typography color="primary" className={classes.title}>
                            
                            </Typography>
                            <Button><BsHeart/></Button>
                        </CardActions>
                        </Card>
                    </Grid> 

                </Grid>
                
            </Toolbar>

            <Grid container xs={12}>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} className={classes.btnAll}><Button fullWidth variant="outlined" color="primary" size="large">Xem tất cả</Button></Grid>
            </Grid>
            <Paper className={classes.paper3}>
        </Paper>
        </AppBar>

        <Container maxWidth="100%">
            <Paper className={classes.Paper3}><Homeitem/></Paper>
        </Container>
        
        </div>
    );
};
export default Home;
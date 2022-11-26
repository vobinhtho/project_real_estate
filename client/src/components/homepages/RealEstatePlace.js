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
import { Link, useParams } from 'react-router-dom';
import moment from 'moment'
import { updateUser } from '../../store/actions/userActions';


const RealEstatePlace = () =>{
    
    const dispatch = useDispatch();

    const { place } = useParams();

    const userLogin = useSelector((state)=>state.auth);
       
    const realEstate = useSelector((state)=>state.realestate.filter(u=>u.address.province===place));

    console.log(realEstate)
    console.log(userLogin)

    
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

   
    //like

    const [updateUserLike, setUserLike]=useState();

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
        <div className={classes.contentmyre}>
        <Grid container spacing={0}>

        <Grid container spacing={5} className={classes.cardContent}>
        
                <Grid item xs={12} className={classes.titleChiMuc}>
                <BsStar/> Bất động sản theo khu vực {place}
                </Grid>

                {
                    realEstate.sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(
                      (real)=>{
                        return(
                        <Grid item xs={8} sm={6} md={3}>
                        <Card>
                        <Link className={classes.linkHome} to={"/homeitem/"+real._id}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image={real.image_realestate[0][0]} title={real.real_estate_title}/>
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
                rowsPerPageOptions={[4, 8, 20]}
                component="div"
                count={realEstate.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Grid>

            </Grid>
            </Grid>
        </div>
 
    );
}
export default RealEstatePlace;
import React,{useState,useEffect} from 'react';
import {Grid,AppBar,CardMedia, IconButton,Toolbar,Button,Avatar, Menu, MenuItem, Divider} from '@material-ui/core' 
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import { IoIosCall } from 'react-icons/io';
import { ImHome } from 'react-icons/im';
import { IoLanguage } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import img1 from '../img/logo1.PNG'
import iconLogin from '../img/login.png'
import { Link,NavLink,useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { loadUser, signOut } from '../../store/actions/authActions';
import Fade from '@material-ui/core/Fade';
import { AccountCircle, Settings,Logout } from '@material-ui/icons';
import { GrLogout } from 'react-icons/gr';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { MdAccountCircle, MdSettings } from 'react-icons/md';
import { getUser, getUserbyId } from '../../store/actions/userActions';
import { getAddress } from '../../store/actions/addressAction';
import { getProjects } from '../../store/actions/projectAction';
import { getRealEstates } from '../../store/actions/realEstateAction';
import { getTintucs } from '../../store/actions/tintucsAction';
import { getCompany } from '../../store/actions/companyAction';
import Snowfall from "react-snowfall";


const Header = () =>{

   const classes = useStyles();

   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
 
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
 
   const handleClose = () => {
     setAnchorEl(null);
   };
 
   const dispatch = useDispatch();
   const history = useHistory();

   const handleSignOut = () => {
    dispatch(signOut());
    handleClose();  
    history.push("/");
    window.location.reload()

  };

   const userLogin = useSelector((state)=>state.auth);
   const state = useSelector((state)=>state)
   //console.log(state)
   const user = useSelector((state)=>state.user.filter(x=>x._id === userLogin._id));

   const company = useSelector((state)=>state.company.filter(x=>x._id === '618aa75c670f02ec6b3f0131'));
   
  console.log(company);

   const fetchItems = () => async dispatch => {
    try {
      dispatch(getAddress());
      dispatch(getUser());
      dispatch(getProjects());
      //dispatch(getRealEstates());
      dispatch(getTintucs());
      dispatch(getCompany());
      
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
     dispatch(fetchItems());
    }, [dispatch]);
    
    return(
        <Grid spacing={3} xs={12}> 
            <Grid className={classes.paper0}>
            <Snowfall snowflakeCount={75}/>
                <Grid item xs={3} className={classes.logo_home}>
               {company.map(x=>(
                <CardMedia
                component="img"
                height="110"
                image={x.logo}
                />
               ))}
                </Grid>
                <Grid item xs={4}>
                <div className={classes.paper}></div>
                </Grid>
                <Grid item xs ={5}>
                <div className={classes.paper1}>
                    <div className={classes.menuButton}>
                    <IoIosCall/> Tổng đài CSKH: {company.map(x=>(
                        <span>{x.hotline}</span>
                    ))} </div>
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
            

            <Grid item xs={12}>
          
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                <Link className={classes.styleLink} to="/">
                    <IconButton edge="start" className={classes.icon_home} color="inherit" aria-label="menu">
                        <ImHome/>
                    </IconButton>
                </Link>  
                <Typography  className={classes.appBarMenu} >
                <NavLink className={classes.styleLink} to="/">Trang chủ</NavLink>    
                </Typography>
                <Typography  className={classes.appBarMenu}>
                Mua bán    
                </Typography>
                <Typography  className={classes.appBarMenu}>
                    Cho thuê
                </Typography>
                <Typography  className={classes.appBarMenu}>
                <NavLink className={classes.styleLink} to="/projecthome"  activeStyle={{color: "#f2ca6c",textDecoration:"none"}}>Dự án</NavLink> 
                </Typography>
                <Typography  className={classes.appBarMenu}>
                <NavLink className={classes.styleLink} to="/tintuchome"  activeStyle={{color: "#f2ca6c",textDecoration:"none"}}>Tin tức</NavLink> 
                </Typography>
                <Typography className={classes.appBarMenu}>
                <NavLink className={classes.styleLink} to="/realestatemap" activeStyle={{color: "#f2ca6c",textDecoration:"none"}}>Bản đồ</NavLink>  
                </Typography>
                <Typography  className={classes.title}>
                    Tiện ích
                </Typography>
                {!userLogin._id ? (
                    <div>
                    <Button size="large" color="inherit">
                        <Link className={classes.styleLink} to="/signin">Đăng nhập</Link>
                    </Button>
                    <Button size="large" color="inherit">
                        <Link className={classes.styleLink} to="/signup">Đăng ký</Link>
                    </Button>
                    </div>
                    )
                    :
                    (
                        <div>
                        <Button size="large" color="inherit">
                            <Link className={classes.btnDangtin} to="/realestate" >Đăng tin</Link>
                        </Button>
                        <div className={classes.rowLogin}>
                        
                            {user.map(u => (<Avatar src={u.avatar || iconLogin} className={classes.loginIcon}/>))}
                            <Typography className={classes.nameLogin} onClick={handleClick}>
                            {userLogin.email}
                            </Typography>
                          <Menu
                            id="fade-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                           >
                           {user.map(u=>(<MenuItem className={classes.LinkMenu}>{u.fullname}</MenuItem>))}
                            
                            <Link to={'/myaccount/'+userLogin._id} className={classes.LinkMenu}>
                                <MenuItem onClick={handleClose}>
                                <MdAccountCircle className={classes.iconAccount} /> My account</MenuItem>
                            </Link>
                            <Link to='/' className={classes.LinkMenu}>
                                <MenuItem onClick={handleClose}>
                                <MdSettings className={classes.iconAccount}/>Setting</MenuItem>
                            </Link>
                            <Link to='/myrealestate' className={classes.LinkMenu}>
                                <MenuItem onClick={handleClose}>
                                <MdSettings className={classes.iconAccount}/>My Real Estate</MenuItem>
                            </Link>
                            <Divider/>

                            <Link to='/' className={classes.LinkMenu}>
                                <MenuItem onClick={handleSignOut}>
                                <RiLogoutCircleRLine className={classes.iconAccount}/>Logout</MenuItem>
                            </Link>

                            </Menu>
                    </div>
                    </div>
                    )}
                
                
                </Toolbar>
            </AppBar>
            </Grid>

        </Grid>
    );
}
export default Header;
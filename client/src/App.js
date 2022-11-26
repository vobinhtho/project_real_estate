import React, { useEffect } from 'react';
//import './App.css'; 

import { makeStyles } from "@material-ui/core/styles";
import { Container,Typography,CssBaseline, Grid } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';
import { loadUser, signUp } from "./store/actions/authActions";
import Header from './components/homepages/Header';

import Mainpage from './components/homepages/Mainpage';
import Slice from './components/homepages/Slice';
import Homeitem from './components/homepages/Homeitem';
import Footer from './components/homepages/Footer';
import Search from './components/homepages/Search';
import Content from './components/homepages/Content';
import Account from './components/auth/Account';
import Upload from './components/firebase/Upload';
import {useSelector} from 'react-redux'
import RealEstateForm from './components/RealEstate/RealEstateForm';
import UploadImages from './components/firebase/UploadImages';
import LoaiTin from './components/RealEstate/LoaiTin';
import Support from './components/firebase/Support';
import Real_Estate_Map from './components/homepages/Real_Estate_Map';
import HomeAdmin from './components/admin/HomeAdmin';
import HomeUser from './components/HomeUser';
import Admin from './components/Admin';
import Customer from './components/customer/Customers';
import Employees from './components/employees/Employees';
import FormEmployee from './components/employees/FormEmployee';
import Sidebar from './components/admin/Sidebar'
import News from './components/News/News';
import project from './components/project/Project';
import Company from './components/admin/Company';
import { getCompany } from './store/actions/companyAction';
import ProjectHome from './components/project/ProjectHome';
import ProjectHomeItem from './components/project/ProjectHomeItem';
import NewHome from './components/News/NewHome';
import NewHomeItem from './components/News/NewHomeItem';
import RealEstateChart from './components/RealEstate/RealEstateChart';
import AdminRealEstate from './components/RealEstate/AdminRealEstate';
import ForgotPassword from './components/auth/ForgotPassword';
import FormResetPass from './components/auth/FormResetPass';
import { getTintucs } from './store/actions/tintucsAction';
import { getRealEstates } from './store/actions/realEstateAction';
import { getContracts } from './store/actions/contractAction';
import { getUser } from './store/actions/userActions';


//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles({
  background:{
    backgroundColor:'White',
  }
  
});
function App() {
 
  const dispatch = useDispatch();
 

  // useEffect(() => {
  //     dispatch(getCompany());
  // }, [dispatch]);
  const classes = useStyles();

  const fetchItems = () => async dispatch => {
    try {
     // dispatch(getAddress());
      dispatch(loadUser());
      dispatch(getContracts());
      dispatch(getRealEstates());
      dispatch(getCompany());
      dispatch(getTintucs());
      dispatch(getUser());
      
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
     dispatch(fetchItems());
    }, [dispatch]);

    const state = useSelector(state => state);
    console.log(state);

  return (
    <div>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        
      <Route exact path='/admin' component={HomeAdmin} />
      <Route path='/' component={HomeUser} />
       
      </Switch>
    </BrowserRouter>
    {/*
    <BrowserRouter>
          <Switch>
            <Route  path="/" component={HomeUser} />       
            <Route  path="/signin" component={SignIn} />
            <Route  path="/signup" component={SignUp} /> 

            <Route  path="/password-reset/:id/:token" component={ForgotPassword} />
            <Route  path="/myaccount/:id" component={Account} /> 
            <Route  path="/emailreset" component={FormResetPass} /> 
          
            <Route  path="/homeadmin" component={Admin}/>   
            <Route  path="/homeitem/:id" component={Homeitem}/>
            <Route  path="/projecthome" component={ProjectHome}/>
            <Route  path="/projecthomeitem/:id" component={ProjectHomeItem}/>
            <Route  path="/tintuchome" component={NewHome}/>
            <Route  path="/tintuchomeitem/:id" component={NewHomeItem}/>

          </Switch>
          
        
    </BrowserRouter>*/}
    {/*
    <BrowserRouter>
        <Header/>
        <Grid container spacing={1}className={classes.background} >
            <Grid item xs={2}>
            <Sidebar/>
            </Grid>
            <Grid item xs={10}>
            <div>Break room</div>
                <Switch>
                <Route exact path="/nhanvien" component={Employees}/>     
                <Route exact path="/khachhang" component={Customer}/>
                <Route exact path="/tintuc" component={News}/>
                <Route exact path="/project" component={project}/>
                <Route exact path="/company" component={Company}/>
                <Route exact path="/realestatechart" component={RealEstateChart}/>
                <Route exact path="/adminbatdongsan" component={AdminRealEstate}/> 
                </Switch>
            </Grid>
        </Grid>
        <Footer/>
    </BrowserRouter>*/}
    </div>
  );
}

export default App;

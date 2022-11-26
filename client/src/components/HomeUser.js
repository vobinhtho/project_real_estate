import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loadUser } from '../store/actions/authActions';
import Header from './homepages/Header';
import Content from './homepages/Content';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Account from './auth/Account';
import RealEstateForm from './RealEstate/RealEstateForm';
import Real_Estate_Map from './homepages/Real_Estate_Map';
import Footer from './homepages/Footer';
import { getTintucs } from '../store/actions/tintucsAction';
import Homeitem from './homepages/Homeitem';
import ProjectHome from './project/ProjectHome';
import ProjectHomeItem from './project/ProjectHomeItem';
import NewHome from './News/NewHome';
import NewHomeItem from './News/NewHomeItem';
import FormResetPass from './auth/FormResetPass';
import PaymentCheckout from './RealEstate/PaymentCheckout';
import TakeMoney from './customer/PaymentForm';
import PaymentForm from './customer/PaymentForm';
import ForgotPassword from './auth/ForgotPassword';
import MyRealEstate from './homepages/MyRealEstate';
import { getRealEstates } from '../store/actions/realEstateAction';
import { getUser } from '../store/actions/userActions';
import RealEstatePlace from './homepages/RealEstatePlace';

function HomeUser() {
 
  const dispatch = useDispatch();

  const fetchItems = () => async dispatch => {
    try {
     // dispatch(getAddress());
      dispatch(loadUser());
     // dispatch(getProjects());
     // dispatch(getRealEstates());
     dispatch(getUser());
      dispatch(getTintucs());
      
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
     dispatch(fetchItems());
    }, [dispatch]);

  return (
    <div>
    <CssBaseline />
    <BrowserRouter>
        <Header/>  
          <Switch>
            <Route exact path="/" component={Content} />        
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/emailreset" component={FormResetPass} />
            <Route exact path="/password-reset/:id/:token" component={ForgotPassword} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/myaccount/:id" component={Account} /> 
            <Route exact path="/realestate" component={RealEstateForm}/>
            <Route exact path="/myrealestate" component={MyRealEstate}/>
            <Route exact path="/realestatemap" component={Real_Estate_Map}/>
            <Route exact path="/homeitem/:id" component={Homeitem}/>
            <Route exact path="/projecthome" component={ProjectHome}/>
            <Route exact path="/projecthomeitem/:id" component={ProjectHomeItem}/>
            <Route exact path="/tintuchome" component={NewHome}/>
            <Route exact path="/tintuchomeitem/:id" component={NewHomeItem}/>
            <Route exact path="/checkout" component={PaymentCheckout}/>
            <Route exact path="/realestateplace/:place" component={RealEstatePlace}/>
            
            
          </Switch>
          <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default HomeUser;

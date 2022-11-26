import React, { useEffect } from 'react';
import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from '../store/actions/authActions';
import HomeAdmin from './admin/HomeAdmin';
import Header from './homepages/Header';
import Footer from './homepages/Footer'
import Employees from './employees/Employees';
import { getUser } from '../store/actions/userActions';
import { getTintucs } from '../store/actions/tintucsAction';
import Side from '../components/admin/Sidebar'
import Customer from './customer/Customers';
import News from './News/News';
import Project from './project/Project';
import Company from './admin/Company';
import RealEstateChart from './RealEstate/RealEstateChart';
import AdminRealEstate from './RealEstate/AdminRealEstate';
import ContractItem from './RealEstate/ContractItem';
import Contract from './RealEstate/Contracts';
import Content from './homepages/Content';
import ContractForm from './RealEstate/ContractForm';
import { getRealEstates } from '../store/actions/realEstateAction';

const useStyles = makeStyles({
  background:{
    backgroundColor:'White'
  }
  
});
function Admin() {
 
  const dispatch = useDispatch();
  const classes = useStyles();
  //const state = useSelector(state => state.user)
  //console.log(state)
  const fetchItems = () => async dispatch => {
    try {
     // dispatch(getAddress());
      dispatch(getUser());
     // dispatch(getProjects());
      dispatch(getRealEstates());
      dispatch(getTintucs());
      dispatch(loadUser());
      
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
        
        <Grid container spacing={1}className={classes.background} >
            <Grid item xs={2}>
            <Side/>
            </Grid>
            <Grid item xs={10}>
            <div>1235</div>
            {/*
                <Switch>
                  <Route exact path="/admin" component={Employees} />  
                  <Route exact path="/admin/nhanvien" component={Employees}/>     
                  <Route exact path="/admin/khachhang" component={Customer}/>
                  <Route exact path="/admin/tintuc" component={News}/>
                  <Route exact path="/admin/project" component={Project}/>
                  <Route exact path="/admin/company" component={Company}/>
                  <Route exact path="/admin/realestatechart" component={RealEstateChart}/>
                  <Route exact path="/admin/adminbatdongsan" component={AdminRealEstate}/>
                  <Route exact path="/admin/contract" component={Contract}/>
                  <Route exact path="/admin/contractitem/:id" component={ContractItem}/>
                  <Route exact path="/admin/contractform/:id" component={ContractForm}/>
                   
                </Switch>*/}
            </Grid>
        </Grid>
       <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default Admin;

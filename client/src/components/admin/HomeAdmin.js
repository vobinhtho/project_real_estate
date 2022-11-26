import { Grid, Paper } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import Footer from '../homepages/Footer';
import Header from '../homepages/Header';
import Sidebar from './Sidebar'
import Employees from '../employees/Employees';
import useStyles from './styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Customer from '../customer/Customers';
import News from '../News/News';
import { useDispatch } from 'react-redux';
import { getTintucs } from '../../store/actions/tintucsAction';
import Project from '../project/Project';
import Company from './Company';
import RealEstateChart from '../RealEstate/RealEstateChart';
import AdminRealEstate from '../RealEstate/AdminRealEstate';
import ContractItem from '../RealEstate/ContractItem';
import Contract from '../RealEstate/Contracts';
import Content from '../homepages/Content';
import Snowfall from "react-snowfall";
import { getRealEstates } from '../../store/actions/realEstateAction';


const HomeAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchItems = () => async dispatch => {
    try {
     // dispatch(getAddress());
     // dispatch(getUser());
     // dispatch(getProjects());
      dispatch(getRealEstates());
      dispatch(getTintucs());
      //dispatch(loadUser());
      
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
     dispatch(fetchItems());
    }, [dispatch]);

  //window.location.reload()
  return (
      <div>
      <BrowserRouter>
      <Header/>
        <Grid container spacing={1} className={classes.backgroundAdmin}>
            <Grid item xs={2}>
            <Sidebar/>
            </Grid>
            <Grid item xs={10}>
            <Employees/>
            <div></div>
            {/*
                <Switch>
                <Route exact path="/admin/nhanvien" component={Employees}/>     
                <Route exact path="/admin/khachhang" component={Customer}/>
                <Route exact path="/admin/tintuc" component={News}/>
                <Route exact path="/admin/project" component={Project}/>
                <Route exact path="/admin/company" component={Company}/>  
                <Route exact path="/admin/adminbatdongsan" component={AdminRealEstate}/> 
                <Route exact path="/admin/contactinformation" component={Project}/>  
                <Route exact path="/admin/realestatechart" component={RealEstateChart}/>
                <Route exact path="/admin/contract" component={Contract}/>  
                <Route exact path="/admin/contractitem" component={ContractItem}/>  
                
                </Switch>*/}
            </Grid>
        </Grid>
        <Footer/>
      </BrowserRouter> 
      </div>
  );
}
export default HomeAdmin

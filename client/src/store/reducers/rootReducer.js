import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import addressReducer from './addressReducer';
import projectReducer from './projectReducer'
import realestateReducer from './realEstateReducer';
import tintucReducer from './tintucsReducer';
import companyReducer from './companyReducer';
import bookReducer from './bookReducer';
import resetpassReducer from './resetpassReducer';
import contractsReducer from './contractsReducer';


const rootReducer = combineReducers({
    user: userReducer, 
    address:addressReducer, 
    project:projectReducer,
    realestate :realestateReducer,
    tintucs: tintucReducer,
    company: companyReducer,
    book:bookReducer,
    resetpass:resetpassReducer,
    contracts:contractsReducer,
    auth: authReducer})

export default rootReducer;
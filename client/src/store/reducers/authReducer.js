//import t from "react-toastify";

import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  token: localStorage.getItem("token"),
  fullname: null,
  email: null,
  password: null,
  phone_number: null,
  CID: null,
  address : null,
  dob: null,
  sex: null,
  avatar: null,
  active: null,
  role: null,
  created_date: null,
  updated_date: null,
  _id:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "USER_LOADED":

      const user = jwtDecode(action.token); 
      return {
        ...initialState,
        token: action.token,
        fullname: user.fullname,
        email: user.email,
        password: user.password,
        phone_number: user.phone_number,
        CID: user.CID,
        address : user.address,
        dob: user.dob,
        sex: user.sex,
        avatar: user.avatar,
        active: user.active,
        role: user.role,
        created_date: user.created_date,
        updated_date: user.updated_date,
        _id:user._id
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");

      // toast("Goodbye...", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });

      return {
        token: null,
        fullname: null,
        email: null,
        password: null,
        phone_number: null,
        CID: null,
        address : null,
        dob: null,
        sex: null,
        avatar: null,
        active: null,
        role: null,
        created_date: null,
        updated_date: null,
        _id:null};
      default:
      return state;
  }
};

export default authReducer;

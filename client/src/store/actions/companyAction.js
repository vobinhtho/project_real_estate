import axios from "axios";
import { url, setHeaders } from "../../api";

export const getCompany = () => {
  return (dispatch) => {
    axios
      .get(`${url}/companyinformation`)
      .then((company) => {
       // console.log(tintuc)
        dispatch({
          type: "GET_COMPANY",
          company,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
  
  export const addCompany = (newCompany) => {
    return (dispatch) => {
      axios
        .post(`${url}/companyinformation`,{...newCompany})
        .then((company) => {
          dispatch({
            type: "ADD_COMPANY",
            company,
          });
          //alert("Thêm bảng tin mới thành công!")
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
  };
  
  export const updateCompany = (updatedCompany, id) => {
    return (dispatch) => {
      axios
        .put(`${url}/companyinformation/${id}`, updatedCompany)
        .then((company) => {
          dispatch({
            type: "UPDATE_COMPANY",
            company,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  
  
  
import axios from "axios";
import { url, setHeaders } from "../../api";

export const getContracts = () => {
    return (dispatch) => {
      axios
        .get(`${url}/contract`)
        .then((contracts) => {
          dispatch({
            type: "GET_CONTRACTS",
            contracts,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const addContract = (newContract) => {
    return (dispatch) => {
      axios
        .post(`${url}/contract`,{...newContract})
        .then((contracts) => {
          dispatch({
            type: "ADD_CONTRACT",
            contracts,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
  };
  
  export const updateContract = (updatedContract, id) => {
    return (dispatch) => {
      axios
        .put(`${url}/contract/${id}`, updatedContract)
        .then((contracts) => {
          dispatch({
            type: "UPDATE_CONTRACT",
            contracts,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const deleteContract = (id) => {
    return (dispatch) => {
      axios
        .delete(`${url}/contract/${id}`)
        .then(() => {
          dispatch({
            type: "DELETE_CONTRACT",
            id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
};
  
  
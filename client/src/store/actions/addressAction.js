import axios from "axios";
import { url, setHeaders } from "../../api";

export const getAddress = () => {
  return (dispatch) => {
    axios
      .get(`${url}/address`)
      .then((address) => {
        dispatch({
          type: "GET_ADDRESS",
          address,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



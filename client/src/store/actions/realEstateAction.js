import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getRealEstates = () => {
  return (dispatch) => {
    axios
      .get(`${url}/realestates`)
      .then((realestates) => {
        dispatch({
          type: "GET_REALESTATES",
          realestates,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addRealEstate = (newdata) => {
  return (dispatch) => {
    axios
      .post(`${url}/realestates`,{...newdata})
      .then((realestates) => {
        dispatch({
          type: "ADD_REALESTATES",
          realestates,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const updateReal_estate = (data, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/realestates/${id}`, data)
      .then((realestates) => {
        dispatch({
          type: "UPDATE_REALESTATES",
          realestates,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const deleteReal_estate = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/realestates/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_REALESTATES",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// export const checkTodo = (id) => {
//   return (dispatch) => {
//     axios
//       .patch(`${url}/todos/${id}`, {}, setHeaders())
//       .then((todo) => {
//         dispatch({
//           type: "CHECK_TODO",
//           todo,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error(error.response?.data, {
//           position: toast.POSITION.BOTTOM_RIGHT,
//         });
//       });
//   };
// };


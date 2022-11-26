import axios from "axios";
import { url, setHeaders } from "../../api";

// export const getTintucs = () => {
//   return (dispatch) => {
//     axios
//       .get(`${url}/realestatesnews`)
//       .then((tintucs) => {
//         dispatch({
//           type: "GET_TINTUCS",
//           tintucs,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
export const getTintucs = () => {
  return (dispatch) => {
    axios
      .get(`${url}/realestatesnews`)
      .then((tintucs) => {
       // console.log(tintuc)
        dispatch({
          type: "GET_TINTUCS",
          tintucs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
  
  export const addTintuc = (newTintuc) => {
    return (dispatch) => {
      axios
        .post(`${url}/realestatesnews`,{...newTintuc})
        .then((tintucs) => {
          dispatch({
            type: "ADD_TINTUC",
            tintucs,
          });
          //alert("Thêm bảng tin mới thành công!")
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
  };
  
  export const updateTintuc = (updatedTintuc, id) => {
    return (dispatch) => {
      axios
        .put(`${url}/realestatesnews/${id}`, updatedTintuc)
        .then((tintucs) => {
          dispatch({
            type: "UPDATE_TINTUC",
            tintucs,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const deleteTintuc = (id) => {
    return (dispatch) => {
      axios
        .delete(`${url}/realestatesnews/${id}`)
        .then(() => {
          dispatch({
            type: "DELETE_TINTUC",
            id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
};
  
  
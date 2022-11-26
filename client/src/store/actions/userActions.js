import axios from "axios";
import { url, setHeaders } from "../../api";

export const getUserbyId = (id) => {
  return (dispatch) => {
    axios
      .get(`${url}/user/${id}`)
      .then((user) => {
        dispatch({
          type: "LOAD_USER",
          user,
        });
      })
      .catch((error) => {
        console.log(error);     
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    axios
      .get(`${url}/user`)
      .then((user) => {
        dispatch({
          type: "GET_USER",
          user,
        });
      })
      .catch((error) => {
        console.log(error);     
      });
  };
};

export const addUser = (newdata) => {
  return (dispatch) => {
    axios
      .post(`${url}/user`,{...newdata})
      .then((user) => {
        dispatch({
          type: "ADD_USER",
          user,
        });
        //alert('Add Employee successfully !')
      })
      .catch((error) => {
        console.log(error.response);
        //alert(error.response.data);
      });
  };
};

export const updateUser = (updatedUser, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/user/${id}`, updatedUser)
      .then((user) => {
        dispatch({
          type: "UPDATE_USER",
          user,
        });        
      })
      .catch((error) => {
          console.log(error);
      });
  };
};

export const deleteUser = (id) => {
 
    return (dispatch) => {
      axios
        .delete(`${url}/user/${id}`)
        .then(() => {
            dispatch({type: "DELETE_USER", id});
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
//         // toast.error(error.response?.data, {
//         //   position: toast.POSITION.BOTTOM_RIGHT,
//         // });
//       });
//   };
// };

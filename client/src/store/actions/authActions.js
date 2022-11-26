import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/signup`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_UP",
          token: token.data,
        });
        if(token){
          toast.success('Create Account Successful. Welcome to login.', {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
        }
      })
      .catch((error) => {
        //alert(error.response.data);

        if(error.response.data){
          toast.error(error.response.data, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
        }

      });
  };
};



// export const updateUser = (updatedUser, id) => {
//   return (dispatch) => {
//     axios
//       .put(`${url}/user/${id}`, updatedUser)
//       .then((todo) => {
//         dispatch({
//           type: "UPDATE_USER",
//           todo,
//         });
//         alert('User updated successfully!');
//       })
//       .catch((error) => {
//         console.log(error);
       
//       });
//   };
// };

export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/signin`, { email, password })
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
        
      })
      .catch((error) => {
        console.log(error.response);

        //alert(error.response?.data);

        // toast.error(error.response.data, {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // });
        if(error.response?.data){
          toast.error(error.response.data, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
        }

      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_TODOS",
    });
    
    dispatch({
      type: "SIGN_OUT",
    });

  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};

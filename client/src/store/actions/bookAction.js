import axios from "axios";
import { url, setHeaders } from "../../api";

export const getBooks = () => {
    return (dispatch) => {
      axios
        .get(`${url}/realestatebook`)
        .then((book) => {
          dispatch({
            type: "GET_BOOKS",
            book,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const addBook = (newBook) => {
    return (dispatch) => {
      axios
        .post(`${url}/realestatebook`,{...newBook})
        .then((book) => {
          dispatch({
            type: "ADD_BOOK",
            book,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
  };
  
  export const updateProject = (updatedBook, id) => {
    return (dispatch) => {
      axios
        .put(`${url}/realestatebook/${id}`, updatedBook)
        .then((book) => {
          dispatch({
            type: "UPDATE_BOOK",
            book,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const deleteBook = (id) => {
    return (dispatch) => {
      axios
        .delete(`${url}/realestatebook/${id}`)
        .then(() => {
          dispatch({
            type: "DELETE_BOOK",
            id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
};
  
  
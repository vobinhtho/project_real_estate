import axios from "axios";
import { url, setHeaders } from "../../api";

export const getProjects = () => {
    return (dispatch) => {
      axios
        .get(`${url}/project`)
        .then((project) => {
          dispatch({
            type: "GET_PROJECTS",
            project,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const addProject = (newProject) => {
    return (dispatch) => {
      axios
        .post(`${url}/project`,{...newProject})
        .then((project) => {
          dispatch({
            type: "ADD_PROJECT",
            project,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
  };
  
  export const updateProject = (updatedProject, id) => {
    return (dispatch) => {
      axios
        .put(`${url}/project/${id}`, updatedProject)
        .then((project) => {
          dispatch({
            type: "UPDATE_PROJECT",
            project,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const deleteProject = (id) => {
   
    return (dispatch) => {
      axios
        .delete(`${url}/project/${id}`)
        .then(() => {
          dispatch({
            type: "DELETE_PROJECT",
            id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
};
  
  
//import { toast } from "react-toastify";

const projectReducer = (project = [], action) => {

    switch (action.type) {

      case "GET_PROJECTS":
        return action.project.data;

      case "ADD_PROJECT":
        return [action.project.data, ...project];

      case "UPDATE_PROJECT":
        return project.map((pro) =>
          pro._id === action.project.data._id ? action.project.data : pro
        );

      case "DELETE_PROJECT":
        return project.filter((project) => project._id !== action.id);

      default:
        return project;
    }
  };

export default projectReducer;

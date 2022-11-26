//import { toast } from "react-toastify";

const tintucReducer = (tintucs = [], action) => {

    switch (action.type) {

      case "GET_TINTUCS":
        return action.tintucs.data;

      case "ADD_TINTUC":
        return [action.tintucs.data, ...tintucs];

      case "UPDATE_TINTUC":
        return tintucs.map((project) =>
            project._id === action.tintucs.data._id ? action.tintucs.data : project
        );

      case "DELETE_TINTUC":
        return tintucs.filter((project) => project._id !== action.id);

      default:
        return tintucs;
    }
  };

export default tintucReducer;

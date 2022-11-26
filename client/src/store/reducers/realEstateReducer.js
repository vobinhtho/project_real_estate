import { toast } from "react-toastify";

toast.configure();
const realestateReducer = (realestates = [], action) => {

    switch (action.type) {

      case "GET_REALESTATES":
        return action.realestates.data;

      case "ADD_REALESTATES":
        // toast.success('A Real Estate added.', {
        //   position: "top-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light"
        //   });
        return [action.realestates.data, ...realestates];

      case "UPDATE_REALESTATES":

        // toast.success('A Real Estate updated.', {
        //   position: "top-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light"
        //   });
        return realestates.map((realestate) =>
        realestate._id === action.realestates.data._id ? action.realestates.data : realestate
        );

      case "DELETE_REALESTATES":
        toast.success('A Real Estate deleted.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light"
          });
        return realestates.filter((realestate) => realestate._id !== action.id);

      case "CHECK_REALESTATES":
        return realestates.map((realestate) =>
        realestate._id === action.realestate.data._id ? action.realestate.data : realestate
        );

      default:
        return realestates;
    }
  };

export default realestateReducer;
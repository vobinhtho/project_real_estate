import { toast } from "react-toastify";

const resetpassReducer = (resetpass = [], action) => {
    switch (action.type) {
     
      case "SENDEMAIL_USER":
        // toast.success("Check your email", {
        //     position: toast.POSITION.BOTTOM_RIGHT,
        // });
        return [action.resetpass.data, ...resetpass];

      case "UPDATE_USER":
          return resetpass.map((resetpass) =>
          resetpass._id === action.resetpass.data._id ? action.resetpass.data : resetpass);
      case "DELETE_USER":
            return resetpass.filter((u) => u._id !== action.id);
      default:
        return resetpass;
    }
  };
  
  export default resetpassReducer;
  
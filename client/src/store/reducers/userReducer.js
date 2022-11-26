//import { toast } from "react-toastify";

const userReducer = (user = [], action) => {
  switch (action.type) {
    case "LOAD_USER":
      return action.user.data;
    case "GET_USER":
        return action.user.data;
    case "ADD_USER":
        return [action.user.data, ...user];
    case "UPDATE_USER":
        return user.map((u) =>
        u._id === action.user.data._id ? action.user.data : u);
    case "DELETE_USER":
          return user.filter((u) => u._id !== action.id);
    default:
      return user;
  }
};

export default userReducer;

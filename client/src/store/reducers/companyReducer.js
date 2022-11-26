import { toast } from "react-toastify";

toast.configure()
const companyReducer = (company = [], action) => {

    switch (action.type) {

      case "GET_COMPANY":
        return action.company.data;

      case "ADD_COMPANY":
        return [action.company.data, ...company];

      case "UPDATE_COMPANY":
        toast.success('Cập nhật thông tin công ty thành công !', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light"
        });
        return company.map((com) =>
            com._id === action.company.data._id ? action.company.data : com
        );

      default:
        return company;
    }
  };

export default companyReducer;
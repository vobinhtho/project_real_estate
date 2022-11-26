import { toast } from "react-toastify";

toast.configure();
const contractsReducer = (contracts = [], action) => {

    switch (action.type) {

      case "GET_CONTRACTS":
        return action.contracts.data;

      case "ADD_CONTRACT":
        
        toast.success('Thêm hợp đồng thành công !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light"
            });
        return [action.contracts.data, ...contracts];

      case "UPDATE_CONTRACT":
        return contracts.map((contract) =>
          contract._id === action.contracts.data._id ? action.contracts.data : contract
        );

      case "DELETE_CONTRACT":
        toast.success('Xóa hợp đồng thành công !', {
          position: "top-center",
          autoClose: 3000,
          closeOnClick: true,
          theme: "light"
        });
        return contracts.filter((contract) => contract._id !== action.id);

      default:
        return contracts;
    }
  };

export default contractsReducer;

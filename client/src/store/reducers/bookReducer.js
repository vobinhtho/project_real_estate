import { toast } from "react-toastify";

toast.configure()
const bookReducer = (book = [], action) => {

    switch (action.type) {

      case "GET_BOOKS":
        return action.book.data;

      case "ADD_BOOK":
        toast.success('Đặt lịch hẹn thành công !', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light"
        });
        return [action.book.data, ...book];

      case "UPDATE_BOOK":
        return book.map((pro) =>
          pro._id === action.pro.data._id ? action.pro.data : pro
      );

      case "DELETE_BOOK":
        return book.filter((project) => project._id !== action.id);

      default:
        return book;
    }
  };

export default bookReducer;

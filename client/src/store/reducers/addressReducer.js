
const addressReducer = (address = [], action) => {
    switch (action.type) {
      case "GET_ADDRESS":
        return action.address.data;
      default:
        return address;
    }
  };
  
  export default addressReducer;
  
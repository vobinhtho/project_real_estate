import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const emailResetPass = (newdata) => {
  
  axios.post(`${url}/password-reset`, newdata)
  .then(resetpass => {
      console.log(resetpass);
  })
  .catch(error => {
      console.log(error.response);
      
      // toast.info('Wow so easy!', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   });
    
  })

  };
  
  export const updateResetPass = (password,id,token) => {
  
    console.log(password)
    axios.post(`${url}/password-reset/${id}/${token}`, password)
    .then(resetpass => {
        console.log(resetpass);
    })
    .catch(error => {
        console.log(error.response);
        
        // toast.info('Wow so easy!', {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   });
      
    })
  
    };
    
import React,{useState} from "react";
import ReactDOM from "react-dom";



const TestForm=({ onSubmit })=> {
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ body })
    }
  return (
    <div>
    
    </div>
  );
}

export default TestForm;


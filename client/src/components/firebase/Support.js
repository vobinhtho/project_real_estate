import { Button, TextField } from "@material-ui/core";
import React,{useState} from "react";

const Support =()=>{
    const [test, setTest]=useState({name:'', age:''});
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(test);
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <TextField value={test.name} onChange={(e)=>setTest({...test,name:e.target.value})} />
         <Button type="submit">OK</Button>
        </form>
        </div>
    )
}
export default Support;
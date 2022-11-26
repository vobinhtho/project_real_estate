import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51K0HkmBSRhQkmr4f2bflfcqbVSoCQIAWdWevOm4heUo0TNbPCT3LDHbTGWN1CPYMu2mKxPXWD6jWYF6X2KGqN8gF00XW6BjjhN");


export const paymentNew = (product) => {
  
    console.log(product)
   // const stripe = await stripePromise;
    
   
};
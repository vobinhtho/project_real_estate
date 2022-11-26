import express  from "express"
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import dotenv from 'dotenv'

import signIn from './routes/signIn.js'
import signUp from './routes/signUp.js'
import address from './routes/address.js'
import user from './routes/user.js'
import project from './routes/project_category.js'
import realestates from './routes/real_estates.js'
import realestatesnews from './routes/real_estate_new.js'
import realestatebook from './routes/real_estate_book.js'
import companyinformation from './routes/company_informations.js'
import realesatecategory from './routes/real_estate_category.js'
import contactinformation from  './routes/contact_information.js'
import multipart from 'connect-multiparty'
import passwordReset from './routes/passwordReset.js'
import contract from './routes/contract.js'
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51K0HkmBSRhQkmr4fCcBuMuCpJeDFQW930XIc5HOe2blBCf4NKZGu4y6kGqVv9GC6CC61XmYHwG96hXxjIUhI6c2Q00LVtGLK7k');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const MultipartMiddleWare = multipart({uploadDir:'./uploads'});
// const URL = 
// 'mongodb+srv://thovo:VoBinhTho@cluster0.asuhb.mongodb.net/nhadat?retryWrites=true&w=majority';

app.use(cors());
app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({extended:true , limit: '30mb'}));

app.use("/realestates", realestates);
app.use("/signup", signUp);
app.use("/signin", signIn);
app.use("/address", address);
app.use("/user", user);
app.use("/project", project);
app.use("/realestatesnews", realestatesnews);
app.use("/realestatebook", realestatebook);
app.use("/companyinformation", companyinformation);
app.use("/realesatecategory", realesatecategory);
app.use("/contactinformation", contactinformation);
app.use("/password-reset", passwordReset);
app.use("/contract", contract);


app.post('/upload',MultipartMiddleWare,(req,res) => {

    const tempFile = req.files.upload;
    const path = tempFile.path;

    res.status(200).json({
        uploaded: true,
        url: `http://localhost:7000/${path}`
    })
})

app.use(express.static('public'));  
app.use('/uploads', express.static('uploads')); 

 
const YOUR_DOMAIN = "http://localhost:7000";

app.post("/payment", async (req, res) => {
  console.log(req.body) 
  const { product } = req.body; 
 
  const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], 
      line_items: [
          {
              price_data: {
                  currency: "vnd",
                  product_data: {  
                      name: product.name, 
                      images: [product.image],
                  },
                  unit_amount: product.amount, 
              },
              quantity: product.quantity,
          },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/realestate`,
      cancel_url: `http://localhost:3000`,
  });

  res.json({ id: session.id });
});
  
  
app.use('/',(req, res)=>{
    res.send('Welcome to server');
})


app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
});

mongoose.connect(
    process.env.URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("Connected to DB")
);

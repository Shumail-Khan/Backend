let express = require("express")
var mongoose = require("mongoose");
const enquiryRoutes = require("./App/routes/web/enquiryRoutes");
require('dotenv').config();

let app = express();
app.use(express.json());

app.use("/web/api/enquiry", enquiryRoutes)
//http://localhost:8000/web/api/enquiry/enquiry-insert


// Connect to Mongodb
mongoose.connect(process.env.DBUrl).then(()=>{
    console.log("Connected to Database")
    app.listen(process.env.Port,()=>{
        console.log("Server is Running on Port "+ process.env.Port)
    })
})




const express= require('express');
const app= express();

require("dotenv").config();
const PORT = process.env.PORT || 4000

//middleware to Parse

app.use(express.json());

//import routes todo APi

const blogsRouter= require('./Routes/Blogs');

//mount routes
//for version , your defined route
app.use("/api/v1",blogsRouter);

app.listen(PORT , ()=>{
    console.log(`Server Started At ${PORT}`);
})

//connect the database
const dbConnect = require('./Config/database');
dbConnect();

app.get("/", (req, res)=>{
    console.log("App started SuccesFully");
})







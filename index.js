const express = require('express')
const app = express()
const port=5000;
const mongoose= require('mongoose')
app.use(express.json())

mongoose.connect("mongodb+srv://mongoose1:rootroot@success.zplix0u.mongodb.net/?retryWrites=true&w=majority", ()=>console.log("database is connected"))

app.listen(port,()=> 
console.log("listening in the port 5000"))
app.use('/', require("./routes/userRoutes.js"))
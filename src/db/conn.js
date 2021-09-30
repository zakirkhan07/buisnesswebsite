const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/faishalimam", {
    useCreateIndex :true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
   console.log("connection sucessfull")
}).catch((error)=>{
    console.log(error)
})
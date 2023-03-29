const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/Notifnav"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo succeesfully");
    })
}

module.exports=connectToMongo;
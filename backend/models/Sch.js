const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type: String,
    },
    description:{
        type: String,
        required: true
    },
    day:{type:String},
        
    locationName:{type:String},

    locationStats:{type:String},

    timestr:{
        type:String,
        required:true,
        default:"00:00:00"
    },
    timeend:{
        type:String,
        required:true,
        default:"00:00:00"
    }
});
module.exports=mongoose.model('sch',SchSchema);
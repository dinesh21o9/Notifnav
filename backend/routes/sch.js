const express=require('express');
var fetchuser=require('../middleware/fetchuser');
const Sch=require('../models/Sch');
const router=express.Router();
const { body, validationResult } = require('express-validator');

// Route 1: Getting all schedule from the database of user using GET request "api/sch/fetchallschedule"   
//this we are writting so that we can convert all the data in database in json file so we can obatain it easily
router.get('/fetchallsch',fetchuser,async (req,res)=>{
    try{
        const sch=await Sch.find({user:req.user.id});       // here we are fetching all schs of all users so we are not matching user id 
        res.json(sch)
    }catch(error){  console.error(error.message);
        res.status(500).send("some error occured");}
}
)

// Route 2: Add a new sch using :POST "/api/auth/addsch".Login required
router.post("/addsch",fetchuser,[
    body('title','Enter avalid title').isLength({min:3}),
    body('description','Description must be atleast 5 characters').isLength({min:5}),],async(req,res)=>{
        try{

            const{title,description,day,locationName,locationStats,timestr,timeend}=req.body;
            // if there are errors, return Bad request and the errors
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()});
            }
            // here we are using schema exclusively
            const sch=new Sch({
                title,description,day,locationName,locationStats,timestr,timeend,user:req.user.id
            })
            const savedSch=await sch.save();

            res.json(savedSch)
        }
    catch(error){  console.error(error.message);
        res.status(500).send("some error occured");}
})

// Route 3: Update an exiting Sch using PUT "api/sch/updatesch" login required
router.put('/updatesch/:id',fetchuser,async (req,res)=>{
    try{
    const {title,description,day,locationName,locationStats,timestr,timeend}=req.body;

    //creating new sch
    const newSch={};        // all data is stored in this const
    if(title){newSch.title=title};
    if(day){newSch.day=day};
    if(locationName){newSch.locationName=locationName};
    if(description){newSch.description=description};
    if(locationStats){newSch.locationStats=locationStats};
    if(timestr){newSch.timestr=timestr};
    if(timeend){newSch.timeend=timeend};

    // find the sch to be updated and update it
    let sch=await Sch.findById(req.params.id);          // sch is now carrying the id of Sch in which original data is stored      
    if(!sch){return res.status(404).send("Not Found")}  

    //here we will first convert the user id stored in database from json to string
    if(sch.user.toString()!== req.user.id){              // here we are matching id's of user and the sch if they are same then only they can proceed
        return res.status(401).send("Not Allowed");
    }

    sch=await Sch.findByIdAndUpdate(req.params.id,{$set:newSch},{new:true})
    res.json({sch});
}    catch(error){  console.error(error.message);
    res.status(500).send("some error occured");}
    
})




// Route 4 : Deleting an exiting Sch using DELETE request "api/sch/deletesch" login required
router.delete('/deletesch/:id',fetchuser,async (req,res)=>{
    const{title,description,day,locationName,locationStats,timestr,timeend}=req.body;

    //Find the sch to be deleted and delete it
    let sch =await Sch.findByIdAndDelete(req.params.id);
    if(!sch){return res.status(404).send("Not found")}

    // Allow deletion only if suer owns this sch
    if(sch.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowed");
    }

    sch=await Sch.findByIdAndDelete(req.params.id)
    res.json({"Success":"Schedule has been deleted"});
})
module.exports=router;

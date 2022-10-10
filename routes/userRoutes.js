const express=require('express')
const router=express.Router();
const contact = require("../Models/contactSchema")
/////////////create multiple users///////
contact.create([{name:"omrane", age:26,favoritfoods:"kafteji"},{name:"maysam", age:27,favoritfoods:"mlawi"}],(err,data)=>{
    if(err) console.log("error");
   })
//////post and save person/////////////
router.post("/newContact",(req,res)=>{
    let newContact = new contact(req.body)
    contact.save((err,data)=>{
        if(err) throw err
        else res.send({msg:"contact added"})
    })
})
//////Get person
router.get("/getuser/:id",(req,res)=>{
     contact.find({_id:req.params.id},(err,data)=>{
        if(err) throw err
        else res.json(data)
    })
})
///////findbyIdandUpdate///
    contact.findOneAndUpdate({name:"omrane",age:20,favoritfoods:"plat mixte"},(err,data)=>{
        if(err) console.log("error")
        else console.log(data)
    })


//////delete////
router.delete("/delete/:id",(req,res)=>{
    contact.findByIdAndDelete({_id:req.params.id},(err,data)=>{
       if(err) throw err
       else res.json({msg:"contact deleted"})
   })
})
/////////

router.post("/newContact",(req,res)=>{
    let newContact = new contact(req.body)
    contact.save((err,data)=>{
        if(err) throw err
        else res.send({msg:"contact added"})
    })
})
////////find()/////

contact.find({},(err,data)=>{
    if(err) console.log("error")
    else console.log(data)
})
//////////findOne/////
contact.findOne({name:"omrane"},(err,data)=>{
    if(err) console.log("error")
    else console.log(data)
})
///////findByIdandRemove////
contact.findByIdAndRemove({name:"zina"},(err,data)=>{
    if(err) console.log("error")
    else console.log(data)
})
///////find.remove//////
contact.remove({name:"maysam"},(err,data)=>{
    if(err) console.log("error")
    else console.log(data)
})
////////////////////querychain////
var querychain = function(done){
    var foodToSearch="burrito"; contact
    .find({favoritfoods:foodToSearch})
    .sort({name:'asc'})
    .limit(2)
    .select("-age")
    .exec((err,data)=> {
        if(err) done (err); done(null,data);
    })
};

module.exports = router
const mongoose=require('mongoose')
const Schema=mongoose.Schema()

const contactSchema={
    name:{
        type:String,
        required:true,
    },
    age:Number,
    favoritfoods:{
        type:String,
        require:true,
    }

}
const contact = mongoose.model("contact", contactSchema)
module.exports=contact
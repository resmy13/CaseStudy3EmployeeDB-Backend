const mongoose=require ('mongoose')
const emp=mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number
})
const employee=mongoose.model('employeedatas',emp)
module.exports=employee

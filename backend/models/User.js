const mongoose =require ('mongoose');

const userSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
        trim:true
    },
    LastName:{
        type:String,
        required:true,
        trim:true
    },
    Email:{
        type:String,
        required:true,
        trim:true
    },
    Password:{
        type:String,
        required:true,
        
    }

})

const user = mongoose.model('user', userSchema );

module.exports = user;
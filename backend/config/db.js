const mongoose = require ('mongoose');
require('dotenv').config();

const dbconnect =()=> {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=>{console.log('db connect successfully')})
    .catch((err)=> {
        console.log('error in db connection');
        console.error(err)
    })
}

module.exports = dbconnect;
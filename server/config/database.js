const mongoose = require('mongoose')

require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('Connected to MongoDB'))
    .catch((error)=>{ console.log("DB Connection failed");
    console.log(error.message);
    process.exit(1);
    })
}





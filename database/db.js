const mongoose = require('mongoose');

const Connection=async()=>{
    await mongoose.connect((process.env.MONGO_URI),{
        dbName:process.env.Db_NAME

    })
}
module.exports=Connection;
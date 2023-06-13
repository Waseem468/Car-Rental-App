const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb+srv://rk9208033050:Subham2012@cluster0.ep8xa4g.mongodb.net/Rental_Car_App', {useUnifiedTopology: true, useNewUrlParser: true})

    const connection = mongoose.connection;

    connection.on('connected', ()=>{
        console.log("Mongodb server is started sucessfully");
    })

    connection.on('error', ()=>{
        console.log("Mongodb server is error");
    })
}

connectDB()

module.exports = mongoose;
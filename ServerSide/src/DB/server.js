const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.DB_URL
const database = process.env.DATABASE
mongoose.connect('mongodb+srv://rk9208033050:Subham2012@cluster0.ep8xa4g.mongodb.net/Rental_Car_App?retryWrites=true&w=majority'+database)
.then((res)=>{
    console.log('connection is successfull')
}).catch(err=>console.log(err));

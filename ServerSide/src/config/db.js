const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const dbUrl = process.env.DB_URL + process.env.DATABASE;
        const conn = await mongoose.connect(process.env.DB_URL + process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};



module.exports = connectDB;


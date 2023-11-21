import mongoose from 'mongoose';

export default function connectDB(){
    const url = 'mongodb://localhost:27017';

    try {
        mongoose.connect(url);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

    const dbConnection = mongoose.connection;
    dbConnection.once('open', () => {
        console.log(`Database connected: ${url}`);
    })
    dbConnection.on("error", (err) => {
        console.log(`Database error: ${err}`);
        
    })
}
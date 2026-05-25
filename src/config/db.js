import mongoose from "mongoose";

const connectToDb = async () =>{
    try{
        const response = await mongoose.connect(process.env.MONGOURL)
        console.log("DataBase Connected......");
        // console.log(response,"this is the response for of db connection");
    }
    catch(err){
        console.log("MongoDB Connection error",err)
        process.exit(1);
    }
}

export default connectToDb;
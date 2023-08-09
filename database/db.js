import mongoose from "mongoose";

const DbConnection = async (url) => {
    try {
       
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("connected to database ");
    } catch (e) {
        console.log(e.message);
    }
};

export default DbConnection;
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB  from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import feedbackRoute from "./routes/feedback.route.js";
import eventRoute from "./routes/event.route.js";
import { User }  from "./models/user.model.js"; // Import User model to apply sync updates



const app = express();
dotenv.config({});

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const corsOptions = {
          origin:"http://localhost:5173",
          credentials:true
}
app.use(cors(corsOptions));
const PORT =  process.env.PORT  || 3000;


// Sync Database (Optional Migration for New Fields)
const syncDatabase = async () => {
  try {
    
    await User.syncIndexes();
    
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};
//api's
app.use('/api/v1/user',userRoute);
app.use('/api/v1/feedback', feedbackRoute);
app.use('/api/v1/events',eventRoute);



app.listen(PORT, () => {
          connectDB();
          // syncDatabase(); 
  console.log(`server is running at ${PORT}`);
});


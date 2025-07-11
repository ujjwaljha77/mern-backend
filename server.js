import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import cors from "cors"
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
// app.use(express.static("public"));
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

mongoose
  .connect(
    `mongodb+srv://${dbuser}:${dbpass}@cluster0.nf9ouu8.mongodb.net/merncafe`
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });

app.use("/api/users", userRouter);


//jhaujjwal1970 // DBUSER
// 1xj64eymDnvKB4eC //DBPASS
// mongodb+srv://jhaujjwal1970:1xj64eymDnvKB4eC@cluster0.nf9ouu8.mongodb.net/ukjj // LINK OF DB


import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Is Running at port ${process.env.PORT || 8000} `);
    });
    app.on("error", (error) => {
      console.log("err: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongo DB Connection Failed !!!", err);
  });

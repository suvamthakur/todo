const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware.js/errorHandler");
const port = process.env.PORT || 5000;
require("dotenv").config();
// any require file from here

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  })
);
app.use(express.json());

app.use("/task", require("./routes/taskRouter"));

app.use(errorHandler);

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
const colors = require("colors");
//load env vars
dotenv.config({ path: "./config/config.env" });

//dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Database connection
const db = require("./config/db");

db();

//body parser
app.use(express.json({ extended: false }));

//routes
app.use("/api/v1/bootcamps", require("./routes/bootcamps"));
app.use(errorHandler);
//port and server listen
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  );
});

//handle unhandled promise rejections

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});

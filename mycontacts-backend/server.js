const express = require("express");
const errorHandler = require("./middlewares/errorhandler");
const connectDb = require("./config/dbConnection");

// For granting access of .env file use this syntax
const dotenv = require("dotenv").config();

connectDb();
const app = express();

// Changinng the port to run 5000 if no variable .env file present, if present read port number (5001) from that file.
const port = process.env.PORT || 5000;

// Adding Middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
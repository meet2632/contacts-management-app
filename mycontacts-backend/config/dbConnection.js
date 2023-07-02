const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected : ",
            connect.connection.host,
            connect.connection.name
        );
        // To get database host and database name in console response
    }
    catch(err) {
        console.log(err);
        process.exit(1);
        //If error is caught then just end the process and exit
    }
};

module.exports = connectDb;
// Contacts mongodb Schema

const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        // Creating user_id so only authorized can view their info not others
        user_id: {
            // This ObjectId is created in mongoDB
            type: mongoose.Schema.Types.ObjectId, 
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: [true, "Please add the contact name"],
        },
        email: {
            type: String,
            required: [true, "Please add the contact email address"],
        },
        phone: {
            type: String,
            required: [true, "Please add the phone number"],
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model("COntact", contactSchema);
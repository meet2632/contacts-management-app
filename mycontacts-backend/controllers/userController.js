// USer Controller for JSON Web Token Authentication 

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
// Imported userModel to interact with our mongodb
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    // Input Validation check
    if(!username || !email ||!password){
        res.status(400);
        throw new Error("All field are mandatory");
    }
    // If user is already available or not
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }
    // As client input password is raw form password it cannot be stored in database so it needs to hash so we import "bcrypt" library
    // Hash Password, also use await becuase bcrypt gonna provide promise, 10 - number of rounds performed for hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(`User created ${user}`);
    // As response in console log returns ( ${user} ) hashed password along with username and email so we dont want that
    // So we use if conndition for that
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    } 
    // For any error occurence
    else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message: "Register the user"});
});



//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    // Fetch email address and password in req body for login of user
    const {email, password} = req.body;

    // Validation check for empty fields
    if(!email || !password){
        res.status(400);
        throw new Error("All the fields are mandatorry");
    }

    // If entered in correct format, check if it exists in database
    const user = await User.findOne({email});

    // If we find the user & comparison of password with hashed password is true
    if(user && (await bcrypt.compare(password, user.password))){
        // Providing access token if matched
        // Using JWT here with given sign  in function
        const accessToken = jwt.sign({ 
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                    // No password included here
                }
            }, process.env.ACCESS_TOKEN_SECRET, // Providing access token secret by defining uniquely in .env file and expiration time
            { expiresIn: "15m" } // 1 minute expiration time
        );
        res.status(200).json({accessToken});
    }
    // If there's aany error
    else{
        res.status(401);
        throw new Error("Email or Password is not valid");
    }
});



//@desc Current user
//@route GET /api/users/current
//@access private - logged in user can only access
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {registerUser, loginUser, currentUser};
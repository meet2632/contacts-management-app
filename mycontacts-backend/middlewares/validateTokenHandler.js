// For a user sending request of accessToken for login authentication we need to validate so correct user logins successfully
// so here's the middleware code for validating access token


const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req, res, next) => {
    // when user sends req token is passed in 'Headers' section in 'Authorization' field or 'Auth' section 'Bearer' field directly
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]; // Using token - "Bearer eyfgwybdjsbvjisbubsb" space after Bearer and 1st index = token itself
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            else{
                // Verified token and extracted info that is embedded in the token and attached to req.user
                req.user = decoded.user;
                next(); // Middleware
            }
        });
        // If token is not provided or user is not authorized
        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
});

module.exports = validateToken;
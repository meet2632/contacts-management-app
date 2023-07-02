// User Routes for API

const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser); 

router.post("/login", loginUser);

// Private route
router.get("/current", validateToken, currentUser);

module.exports = router;
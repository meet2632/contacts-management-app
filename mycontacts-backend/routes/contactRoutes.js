// Contacts routes for API

const express = require("express");
const router = express.Router();
const {
    getContacts, 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact
} = require("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");


// GET All
// router.route("/").get(getContacts);

// GET particular
// router.route("/:id").get(getContact);

// POST
// router.route("/").post(createContact);

// PUT
// router.route("/:id").put(updateContact);

// DELETE
// router.route("/:id").delete(deleteContact);


// OR we can write in this format to save lines if route path are same. Given below:

router.use(validateToken); // This validateToken will be used in all routes of CRUD
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


// Export the router
module.exports = router;
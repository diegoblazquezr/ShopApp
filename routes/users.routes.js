const usersController = require('../controllers/users.controllers');
const router = require('express').Router();
const { validateCreateUser, validateGetUserById, validateUpdateUser, validateDeleteUser } = require("../validators/users.validators");

// POST http://localhost:3000/api/user
router.post("/", validateCreateUser, usersController.createUserController);

// GET ALL http://localhost:3000/api/user
// GET ONE by ID http://localhost:3000/api/user?
router.get("/", validateGetUserById, usersController.readUsersController);

// PUT http://localhost:3000/api/user
router.put("/", validateUpdateUser, usersController.updateUserController);

// DELETE http://localhost:3000/api/user?email=prueba2@gmail.com
router.delete("/", validateDeleteUser, usersController.deleteUserController);

// router.post("/login", usersController.login);
// router.post("/logout", usersController.logout);

module.exports = router;
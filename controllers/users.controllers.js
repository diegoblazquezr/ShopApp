const usersModels = require('../models/users.models');
const { validationResult } = require("express-validator");
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const jwt_secret = process.env.ULTRA_SECRET_KEY;

const createUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newUser = req.body;
    if (
        "name" in newUser &&
        "email" in newUser &&
        "password" in newUser &&
        "phone" in newUser &&
        "address" in newUser
    ) {
        try {
            const hashPassword = await bcrypt.hash(newUser.password, saltRounds);
            const user = ({ name: newUser.name, email: newUser.email, password: hashPassword, phone: newUser.phone, address: newUser.address});
            const response = await usersModels.createUser(user);
            res.status(201).json({
                items_created: response
            });
        } catch (error) {
            res.status(500).json({ error: "Error in Data Base" });
        }
    } else {
        res.status(400).json({ error: "Fields missing" });
    }
}
// Prueba Postman
// POST http://localhost:3000/api/user
// {
//     "name": "Test",
//     "email": "test@mail.com",
//     "password": "123456",
//     "phone": 987654321,
//     "address": "Calle Desengaño 21"
// }

const readUsersController = async (req, res) => {
    let users;
    try {
        if (req.query.user_id || req.query.user_id == "") {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            users = await usersModels.readUserById(req.query.user_id);
            res.status(200).json(users);
        } else {
            users = await usersModels.readUsers();
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Prueba Postman
// GET ALL http://localhost:3000/api/user
// GET ONE by ID http://localhost:3000/api/user?user_id=5

const updateUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const modifiedUser = req.body;
    if (
        ("name" in modifiedUser ||
        "email" in modifiedUser ||
        "password" in modifiedUser ||
        "phone" in modifiedUser ||
        "address" in modifiedUser ||
        "role" in modifiedUser ||
        "logged" in modifiedUser) &&
        "user_id" in modifiedUser
    ) {
        try {
            const response = await usersModels.updateUser(modifiedUser);
            res.status(201).json({
                items_updated: response
            });
        } catch (error) {
            res.status(500).json({ error: "Error in Data Base" });
        }
    } else {
        res.status(400).json({ error: "User_id is required and at least one field to update" });
    }
}
// Prueba Postman
// PUT http://localhost:3000/api/user
// {
//     "name": "Test2",
//     "email": "test2@mail.com",
//     "password": "654321",
//     "phone": 987654321,
//     "address": "Calle Desengaño 12",
//     "role": "admin",
//     "logged": true,
//     "user_id": 5
// }

const deleteUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let users;
    try {
        users = await usersModels.deleteUser(req.query.user_id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error in Data Base' });
    }
}
// Prueba Postman
// DELETE http://localhost:3000/api/user?email=5

// const login = async (req, res) => {
//     try {
//         const body = JSON.stringify(req.body);
//         console.log(body);

//         const { email, password } = JSON.parse(body);

//         console.log("---" + email, password);

//         const data = await usersModels.readUserById(email);
//         console.log(data);

//         if (!data || data.length === 0) {
//             res.status(400).json({ msg: 'Incorrect usersModels or password' });
//         } else {
//             console.log(password, data[0].password);
//             const match = await bcrypt.compare(password, data[0].password);
//             if (match) {
//                 const updatedUser = {
//                     logged: true,
//                     old_email: req.body.email,
//                     last_logged_date: new Date().toISOString()
//                 };
//                 await usersModels.updateUser(updatedUser);
//                 const { email, role } = data[0];
//                 const userForToken = {
//                     email: email,
//                     role: role
//                 };
//                 const token = jwt.sign(userForToken, jwt_secret, { expiresIn: '20m' });
                
//                 res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 20 * 60 * 1000 });
//                 res.status(200).json({
//                     msg: 'Correct authentication',
//                 });
//                 // return res.redirect('/home');
//             } else {
//                 res.status(400).json({ msg: 'Incorrect usersModels or password' });
//             }
//         }
//     } catch (error) {
//         console.log('Error:', error);
//         res.status(500).json({ msg: 'Internal server error' });
//     }
// };

// const logout = async (req, res) => {
//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(400).json({ message: 'No token provided' });
//         }
//         const decoded = jwt.verify(token, jwt_secret);
//         const updatedUser = {
//             logged: false,
//             old_email: decoded.email
//         };
//         await usersModels.updateUser(updatedUser);

//         res.clearCookie('token');

//         return res.status(200).json({ message: 'Logged out successfully' });
//     } catch (error) {
//         console.log('Error:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

module.exports = {
    createUserController,
    readUsersController,
    updateUserController,
    deleteUserController,
    // login,
    // logout
}
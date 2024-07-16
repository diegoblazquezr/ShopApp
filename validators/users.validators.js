const { body, param, query } = require("express-validator");

const validateCreateUser = [
    body("name")
        .exists().withMessage("Name of users is required")
        .isString().withMessage("Name should be string"),
    body("email")
        .exists().withMessage("User email is required")
        .isEmail().withMessage("Valid email is required"),
    body("password")
        .exists().withMessage("User password is required")
        .isString().withMessage("Password should be string")
        .isLength({ min: 6 }),
    body("phone")
        .exists().withMessage("Phone of users is required")
        .isNumeric().withMessage("Phone should be number")
        .isLength({ min: 9, max: 11 }),
    body("address")
        .exists().withMessage("Address of users is required")
        .isString().withMessage("Address should be string"),
];

const validateGetUserById = [
    query('user_id')
        .notEmpty().withMessage("User_id should exist to get by user_id")
        .isNumeric().withMessage("User_id should be numeric")
]

const validateUpdateUser = [
    body("name")
        .optional()
        .isString().withMessage("Name should be string"),
    body("email")
        .optional()
        .isEmail().withMessage("Valid email is required"),
    body("password")
        .optional()
        .isString().withMessage("Password should be string"),
    body("phone")
        .optional()
        .isNumeric().withMessage("Phone should be number")
        .isLength({ min: 9, max: 11 }),
    body("address")
        .optional()
        .isString().withMessage("Address should be string"),
    body("role")
        .optional()
        .isString().withMessage("Role should be string"),
    body("logged")
        .optional()
        .isBoolean({ strict: true }).withMessage("Logged has to be boolean"),
    body('user_id')
        .notEmpty().withMessage("User_id should exist to get by user_id")
        .isNumeric().withMessage("User_id should be numeric")
];

const validateDeleteUser = [
    query('user_id')
        .notEmpty().withMessage("User_id should exist to get by user_id")
        .isNumeric().withMessage("User_id should be numeric")
];

module.exports = {
    validateCreateUser,
    validateGetUserById,
    validateUpdateUser,
    validateDeleteUser
};
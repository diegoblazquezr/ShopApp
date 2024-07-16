const queries = {
    createUser: `INSERT INTO users(name, email, password, phone, address, role, logged)
    VALUES ($1, $2, $3, $4, $5, 'user', false);`,
    readUsers: `SELECT *
    FROM users
    WHERE role = 'user';`,
    readUserById: `SELECT *
    FROM users
    WHERE user_id = $1;`,
    updateUserName: `UPDATE users
    SET name = $1
    WHERE user_id = $2;`,
    updateUserEmail: `UPDATE users
    SET email = $1
    WHERE user_id = $2;`,
    updateUserPassword: `UPDATE users
    SET password = $1
    WHERE user_id = $2;`,
    updateUserPhone: `UPDATE users
    SET phone = $1
    WHERE user_id = $2;`,
    updateUserAddress: `UPDATE users
    SET address = $1
    WHERE user_id = $2;`,
    updateUserRole: `UPDATE users
    SET role = $1
    WHERE user_id = $2;`,
    updateUserLogged: `UPDATE users
    SET logged = $1
    WHERE user_id = $2;`,
    deleteUser: `DELETE FROM users
    WHERE user_id = $1;`
}
module.exports = queries;
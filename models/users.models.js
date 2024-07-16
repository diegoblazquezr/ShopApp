const queries = require('../queries/users.queries')
const pool = require('../config/db_pgsql');

// CREATE
const createUser = async (user) => {
    const { name, email, password, phone, address } = user;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createUser, [name, email, password, phone, address]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// let newUser = {
//     name: "Test",
//     email: "test@mail.com",
//     password: "654321",
//     phone: 987654321,
//     address: "Calle Desengaño 21"
// }
// createUser(newUser)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// READ ALL
const readUsers = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.readUsers);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// readUsers()
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))

// READ ONE
const readUserById = async (user_id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.readUserById, [user_id])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// readUserById(2)
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))

// UPDATE
const updateUser = async (user) => {
    const { name, email, password, phone, address, role, logged, user_id } = user;
    let client, result;
    try {
        client = await pool.connect();
        result = 0;

        const updatePromises = [];

        if (name) {
            updatePromises.push(client.query(queries.updateUserName, [name, user_id]));
        }
        if (email) {
            updatePromises.push(client.query(queries.updateUserEmail, [email, user_id]));
        }
        if (password) {
            updatePromises.push(client.query(queries.updateUserPassword, [password, user_id]));
        }
        if (phone) {
            updatePromises.push(client.query(queries.updateUserPhone, [phone, user_id]));
        }
        if (address) {
            updatePromises.push(client.query(queries.updateUserAddress, [address, user_id]));
        }
        if (role) {
            updatePromises.push(client.query(queries.updateUserRole, [role, user_id]));
        }
        if (typeof logged !== 'undefined') {
            updatePromises.push(client.query(queries.updateUserLogged, [logged, user_id]));
        }

        const updateResults = await Promise.all(updatePromises);

        updateResults.forEach(updateResult => {
            result += updateResult.rowCount;
        });

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// Pruebas PostgreSQL
// const updatedUser = {
//     name: "Test2",
//     email: "test2@mail.com",
//     password: "654321",
//     phone: 987654321,
//     address: "Calle Desengaño 12",
//     role: "admin",
//     logged: true,
//     user_id: 5
// }
// updateUser(updatedUser)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// DELETE
const deleteUser = async (user_id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteUser, [user_id])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// Pruebas PostgreSQL
// deleteUser(5)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const users = {
    createUser,
    readUsers,
    readUserById,
    updateUser,
    deleteUser
}

module.exports = users;
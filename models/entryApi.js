// Conecta con la base de datos de Postgre
const querys = require('../utils/querys')
const pool = require('../utils/postgreConnection')


// Obtener todos los usuarios Registrados. Exclusivo del admin.
const allUsuarios = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.allUsuarios)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const selectUsuario = async (id_user) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.selectUsuario, [id_user])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


const insertUsuario = async (entry) => {
    let client, result;
    const {nombre, email, contraseña } = entry;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.insertUsuario, [nombre, email, contraseña])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//Pruebas
// allUsuarios()
// .then(data=>console.log(data))
/*
let newEntry = { nombre: "jager", email: "jagger@gmail.com", contraseña: "1234" };

insertUsuario(newEntry)
.then(data=>console.log(data))
*/
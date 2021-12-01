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
    const { nombre, email, contraseña } = entry;
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

const insertFavoritos = async (entry) => {
    let client, result;
    const { id_user, titulo, descripcion, salario, url } = entry;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.insertFavorito, [id_user, titulo, descripcion, salario, url])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const busquedaUserFavoritos = async (id_user) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.busquedaUserFavoritos, [id_user])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const editUsuario = async (entry) => {
    let client, result;
    const { nombre, email, contraseña, id_user } = entry;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.editUsuario, [nombre, email, contraseña, id_user])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const deleteUsuario = async (id_user) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.deleteUsuario, [id_user])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const deleteFavorito = async (id_fav) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.deleteFavorito, [id_fav])
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


// let newEntry = { nombre: "sauron", email: "sauron@gmail.com", contraseña: "anillo" };
// insertUsuario(newEntry)
// .then(data=>console.log(data))


// selectUsuario('4')
// .then(data=>console.log(data))

// let insertar = {id_user: 'legolas@gmail.com', titulo: "consigue los anillos", descripcion: "Es este cogelo no te cortes", salario: "100€", url: "www.yuhu/funciona.com"}
// insertFavoritos(insertar)
// .then(data=>console.log(data))

// busquedaUserFavoritos('2')
// .then(data=>console.log(data))

// let insertar = {nombre: 'carlos', email: 'estoyEDITADO@gmail.com', contraseña: 'editado', id_user: '1'}
// editUsuario(insertar)
// .then(data=>console.log(data))

// deleteUsuario('4')
//     .then(data => console.log(data))

// deleteFavorito('6')
// .then(data => console.log(data))

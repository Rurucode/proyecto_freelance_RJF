const querys = require('../utils/querys')
const pool = require('../utils/postgreConnection')
// Conecta con la base de datos de Postgre


// Obtener todos los usuarios Registrados. Exclusivo del admin.
const getAllUsuarios = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.allUsuarios)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}


const insertUsuario = async (entry) =>{
    let client, result;
    const {nombre, email, contraseña,administrador} = entry;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.insertUsuarios, [nombre, email, contraseña,administrador])
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}


// getAllUsuarios()
// .then(data=>console.log(data))

insertUsuario()
.then(data=>console.log(data))
const querys = require('../utils/querys')
// Conecta con la base de datos de Postgre

const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CodeJobs',
    password: 'root'
})

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


const insertUsuario = async () =>{
    let client, result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.insertUsuarios)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

const insertUsuario = async () =>{
    let client, result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(querys.insertUsuarios)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

getAllUsuarios()
.then(data=>console.log(data))
// Querys de consulta, edicion, inserccion y borrado de datos de la BD.

const allUsuarios = `SELECT * FROM usuarios ORDER BY id_user;`

const selectUsuario = `SELECT * FROM usuarios WHERE id_user=$1`

const insertUsuario = `INSERT INTO usuarios(nombre,email,contraseña,administrador)
VALUES 
($1, $2, $3, false);`

const insertFavoritos = `INSERT INTO favoritos(id_user, titulo, descripcion, salario, url)
VALUES 
((SELECT id_user FROM usuarios WHERE email=$1), $2, $3, $4, $5);`

const busquedaUserFavoritos = `SELECT * FROM favoritos WHERE id_user=$1`

const deleteFavoritos = `DELETE * FROM favoritos WHERE id_user=$1`

const deleteUsuarios = `DELETE * FROM usuarios WHERE id_user=$1`

const editUsuarios = `UPDATE usuarios SET nombre=$1, email=$2,contraseña=$4 WHERE id_user=$5`


const querys = {
    allUsuarios, //funcionando
    selectUsuario,
    insertUsuario, //funcionando
    insertFavoritos,
    busquedaUserFavoritos,
    editUsuarios,
    deleteUsuarios,
    deleteFavoritos


}

module.exports = querys
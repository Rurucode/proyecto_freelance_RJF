// Querys de consulta, edicion, inserccion y borrado de datos de la BD.

const allUsuarios = `SELECT * FROM usuarios ORDER BY id_user;`

const selectUsuario = `SELECT * FROM usuarios WHERE id_user=$1`

const insertUsuario = `INSERT INTO usuarios(nombre,email,contraseña,administrador)
VALUES 
($1, $2, $3, false);`

const insertFavorito = `INSERT INTO favoritos(id_user, titulo, descripcion, salario, url)
VALUES 
((SELECT id_user FROM usuarios WHERE email=$1), $2, $3, $4, $5);`

const busquedaUserFavoritos = `SELECT * FROM favoritos WHERE id_user=$1`

const editUsuario = `UPDATE usuarios SET nombre=$1, email=$2,contraseña=$3 WHERE id_user=$4`

const deleteUsuario = `DELETE FROM usuarios WHERE id_user=$1`

const deleteFavorito = `DELETE FROM favoritos WHERE id_fav=$1`

const login = `SELECT * FROM usuarios WHERE email=$1 AND contraseña=$2`




const querys = {
    allUsuarios, //funcionando
    selectUsuario, //funcionando
    insertUsuario, //funcionando
    insertFavorito, //funcionando
    busquedaUserFavoritos, //funcionando
    editUsuario, //funcionando
    deleteUsuario, //funcionando
    deleteFavorito, //funcionando
    login
}

module.exports = querys
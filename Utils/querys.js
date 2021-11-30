// Querys de consulta, edicion, inserccion y borrado de datos de la BD.

const allUsuarios = `SELECT * FROM usuarios;`

const selectUsuario = `SELECT `

const insertUsuarios = `INSERT INTO usuarios(nombre,email,contraseña,administrador)
VALUES 
($1, $2, $3, false);`

const insertFavoritos = `INSERT INTO favoritos(id_user, titulo, descripcion, salario, url)
VALUES 
((SELECT id_user FROM usuarios WHERE email='fernando@gmail.com'), 'TA THE BRIDGE', 'Enseñanza de programacion', '3356€', 'http:www.infojobs/4444.com');`

const deleteFavoritos = `DELETE * FROM favoritos WHERE id=`


const querys = {
    allUsuarios,
    insertUsuarios,
    insertFavoritos,
    deleteFavoritos,

}

module.exports = querys
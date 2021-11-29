// --------------------- Renderizado de vistas básicas de CLIENTE -------------------

//Pinta el home
const inicio = (req,res) => {
    res.render('home_guess');
}

//Pinta el formulario de loggeo
const login = (req,res) => {
    res.render('log_in');
}

//Pinta el formulario de registro
const signin = (req,res) => {
    res.render('sign_in');
}

//Pinta la parte de perfil una vez iniciada la sesión
const profile = (req,res) => {
    res.render('profile');
}

//Pinta la sección de favoritos una vez iniciada la sesión
const favorites = (req,res) => {
    res.render('favorites');
}

// ---------- Renderizado de vistas de ADMIN una vez iniciado sesión --------

//Pinta el listado de usuarios registrados
const users = (req,res) => {
    res.render('users');
}

//Pinta el crear y visualizar de los anuncios
const dashboard = (req,res) => {
    res.render('dashboard');
}


const vistasBasicas = {
    inicio,
    login,
    signin,
    profile,
    favorites,
    users,
    dashboard
};

module.exports = vistasBasicas;
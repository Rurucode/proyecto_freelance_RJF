// --------------------- Renderizado de vistas básicas de CLIENTE -------------------

//Pinta el home
const home_guess = (req,res) => {
    res.render('home_guess');
}

//Pinta el formulario de loggeo
const log_in = (req,res) => {
    res.render('log_in');
}

//Pinta la home para usuarios logeados.
const home_login = (req,res) => {
    res.render('home_login');
}

//Pinta el formulario de registro
const sign_up = (req,res) => {
    res.render('sign_up');
}

//Pinta la parte de perfil una vez iniciada la sesión
const profile = (req,res) => {
    res.render('profile');
}

//Pinta la sección de favoritos una vez iniciada la sesión
const favorites_user = (req,res) => {
    res.render('favorites_user');
}

// ---------- Renderizado de vistas de ADMIN una vez iniciado sesión --------

//Pinta el listado de usuarios registrados
const users = (req,res) => {
    res.render('users');
}

// //Pinta el crear y visualizar de los anuncios
const dashboard = (req,res) => {
    res.render('dashboard_admin');
}

const home_admin = (req,res) => {
    res.render('home_admin');
}


const vistasBasicas = {
    home_guess,
    log_in,
    home_login,
    sign_up,
    profile,
    favorites_user,
    users,
    dashboard,
    home_admin
};

module.exports = vistasBasicas;
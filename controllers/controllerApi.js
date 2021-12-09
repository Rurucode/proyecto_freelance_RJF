// Definimos dos contastes que nos traen los scrap
const jwt = require('jsonwebtoken')
const freelancer = require("../Utils/freelance_scrap");
const peoplePerHourScrap = require("../Utils/peoplePerHour_scrap");
const functionQuerys = require("../models/entryApi");
const mongoose = require('../models/favoritos_model');
const { insertFavorito } = require('../utils/querys');



// ------------------------ SCRAPPING --------------------------- //

// Creamos una función para obtener los datos del scrap
const recogerOfertas = async (req, res) => {
    try {
        // Intentamos acceder al scrap de cada uno y traernos los datos
        if(req.query.name){
            let PEOPLE = await peoplePerHourScrap.scrapPeoplePerHour(`https://www.peopleperhour.com/services/${req.query.name}?ref=search`);
            let FREELANCER = await freelancer.scrapFreelancer(`https://www.freelancer.es/jobs/?keyword=${req.query.name}`);

            // Concatenamos los dos arrays con la información de los scrap, devolvemos un 200 en caso correcto
            let datosOferta = PEOPLE.concat(FREELANCER);
            // console.log(datosOferta.length);
            res.status(200).json(datosOferta);
        }

    } catch (error) {
        res.status(404).json({"error":error})
    }

}

// ------------------------ FUNCIONES DE LA API (CLIENTES) --------------------------- //

// Obtención de los datos del usuario, insertados en el formulario de registro(sign in)
const createUser = async (req, res) => {
    try {
        datos = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password 
        }
        const result = await functionQuerys.insertUsuario(datos);
        res.status(200).redirect('/login');
    } catch (error) {
        error = 'me cago en todo'
        res.status(400).json({"error":error});
    }
}

// Consulta la BD para buscar email y contraseña.
const login = async (req, res, next) => {
    try {
        const result = await functionQuerys.login(req.body.email, req.body.password);
        if (result) {
            const consulta = {
                email: result.email,
                role: result.administrador
            }
            console.log(consulta.role);
            if (consulta.role == false) {
                const token = jwt.sign({ user: consulta }, process.env.jwt_secret); //Crea el toquen con la informacion de la consulta
                res.cookie("access_token", token, {
                        httpOnly: true,
                        // secure: process.env.NODE_ENV === "production"
                        secure: false
                    })
                    .status(200).redirect('home_login');
            }else {
                const token = jwt.sign({ user: consulta }, process.env.jwt_secret); //Crea el toquen con la informacion de la consulta
                res.cookie("access_token", token, {
                        httpOnly: true,
                        // secure: process.env.NODE_ENV === "production"
                        secure: false
                    })
                    .status(200).redirect('home_admin'); 
            }
            
        } else {
            console.log("Email o contraseña incorrecto");
            res.status(401).redirect('/login');
        }
    } catch (error) {
        error = 'erroor'
        res.status(400).json({"error":error});
    }
}


const favoritos = async (req,res) => {
    try {
        const oferta = await req.body;
        const nuevoFav = await functionQuerys.insertFavoritos(oferta);
        if (nuevoFav){
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
        
    } catch (error) {
        error = 'error'
        res.status(400).json({"error":error});
    }
}


// Funcion para mostrar al usuario sus datos de perfil.
const pintarUsuario = async (req, res) => {
    try {
        const token = req.cookies.access_token;
        const data = await jwt.verify(token, process.env.jwt_secret);
        const consulta = await functionQuerys.selectUsuario(data.user.email)
        res.render('profile', {
            nombre: consulta[0].nombre,
            email: consulta[0].email,
            password: consulta[0].contraseña
        })
    } catch (error) {
        res.status(400).json({"error":"AQUI FALLO"});
    }
}

const pintarUsuarioAdmin = async (req, res) => {
    try {
        const token = req.cookies.access_token;
        const data = await jwt.verify(token, process.env.jwt_secret);
        const consulta = await functionQuerys.selectUsuario(data.user.email)
        res.render('profile_admin', {
            nombre: consulta[0].nombre,
            email: consulta[0].email,
            password: consulta[0].contraseña
        })
    } catch (error) {
        res.status(400).json({"error":"AQUI FALLO"});
    }
}

// Funcion para editar los datos del usuario en la BBDD.
const editarUsuario = async (req, res) => {
    const token = req.cookies.access_token;
    const data = await jwt.verify(token, process.env.jwt_secret);
    let busqueda = {
        nombre: req.body.name,
        email: req.body.email,
        contraseña: req.body.password,
        old: data.user.email
    }
    const editar = await functionQuerys.editUsuario(busqueda)
    res.clearCookie("access_token").status(200).redirect('login')  
}




// ------------------------ FUNCIONES DE LA API (ADMIN) --------------------------- //

// Función guardar en mongo una oferta creada por el admin
const crearOferta = async (req, res) => {
    let oferta = {
            "title": req.body.titulo,
            "price": req.body.precio,
            "description":req.body.descripcion, 
            "url": req.body.url
        };
        let nuevaOferta = new mongoose (oferta);
    
    nuevaOferta.save()
    res.redirect('/home_admin');
}



// ------------------------ OBJETO QUE RECOGE LAS FUNCIONES PARA SER EXPORTADAS --------------------------- //
const controllerFunctions = {
    createUser,
    login,
    recogerOfertas,
    crearOferta,
    pintarUsuario,
    editarUsuario,
    favoritos,
    pintarUsuarioAdmin
}

module.exports = controllerFunctions;

// Definimos dos contastes que nos traen los scrap

const freelancer = require("../Utils/freelance_scrap");
const peoplePerHourScrap = require("../Utils/peoplePerHour_scrap");
const functionQuerys = require("../models/entryApi");
const { users } = require("./inicio");


// Creamos una función para obtener los datos del scrap
const recogerOfertas = async (req, res) => {
    try {
        // Intentamos acceder al scrap de cada uno y traernos los datos
        if(req.query.name){
            let PEOPLE = await peoplePerHourScrap.scrapPeoplePerHour(`https://www.peopleperhour.com/services/${req.query.name}?ref=search`);
            //let FREELANCER = await freelancer.scrapFreelancer(`https://www.freelancer.es/jobs/?keyword=${req.query.name}`);

            // Concatenamos los dos arrays con la información de los scrap, devolvemos un 200 en caso correcto
            //let datosOferta = PEOPLE.concat(FREELANCER);
            // console.log(datosOferta.length);
            res.status(200).json(PEOPLE);
        }

    } catch (error) {
        res.status(404).json({"error":error})
    }

}

// Obtención de los datos del usuario, insertados en el formulario de registro(sign in)
const createUser = async (req, res) => {
    try {
        datos = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password 
        }
        const result = await functionQuerys.insertUsuario(datos);
        res.status(200).redirect('/');
    } catch (error) {
        error = 'me cago en todo'
        res.status(400).json({"error":error});
    }
}


const controllerFunctions = {
    recogerOfertas,
    createUser
}

module.exports = controllerFunctions;

// Definimos dos contastes que nos traen los scrap

const freelancer = require("../Utils/wokana_scrap");
const peoplePerHourScrap = require("../Utils/peoplePerHour_scrap");
const functionQuerys = require("../models/entryApi");
const { users } = require("./inicio");

// Creamos una función para obtener los datos del scrap
const busquedaTrabajo = async (req, res) => {

    try {
        
        // Intentamos acceder al scrap de cada uno y traernos los datos
        const PEOPLE = await peoplePerHourScrap.scrapPeoplePerHour("https://www.peopleperhour.com/services/web+development?ref=search");
        const FREELANCER = await freelancer.scrapFreelancer("https://www.freelancer.es/jobs/?keyword=software");

        // Concatenamos los dos arrays con la información de los scrap, devolvemos un 200 en caso correcto
        const datosOferta = PEOPLE.concat(FREELANCER);
        res.status(200).json(datosOferta);
        //console.log(WORKANA)

    } catch (error) {
        res.status(404).json({"error":error})
    }

}

// Obtención de los datos del usuario, insertados en el formulario de registro(sign in)
const createUser = async (req, res) => {
    console.log("********************++");
    try {
        datos = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password 
        }
        const result = await functionQuerys.insertUsuario(datos);
        res.status(200).redirect('/');
    } catch (error) {
        console.log('ESTO ES REQ BODY errorrrrr------------' + req.body)
        error = 'me cago en todo'
        res.status(400).json({"error":error});
    }
}


const exportFunctions = {
    busquedaTrabajo,
    createUser
}

module.exports = exportFunctions;
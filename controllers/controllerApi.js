// Definimos dos contastes que nos traen los scrap

const workanaScrap = require("../Utils/wokana_scrap");
const peoplePerHourScrap = require("../Utils/peoplePerHour_scrap");

// Creamos una función para obtener los datos del scrap
const busquedaTrabajo = async (req, res) => {

    try {
        
        // Intentamos acceder al scrap de cada uno y traernos los datos
        const WORKANA = await workanaScrap.scrap("https://www.workana.com/jobs?category=it-programming&language=es&query=programacion");
        const PEOPLE = await peoplePerHourScrap.scrap("https://www.peopleperhour.com/services/programming?ref=search");

        // Concatenamos los dos arrays con la información de los scrap, devolvemos un 200 en caso correcto
        const datosOferta = {
            WORKANA,
            PEOPLE
        }
        res.status(200).json(datosOferta);
        //console.log(WORKANA)

    } catch (error) {
        res.status(404).json({"error":error})
    }

}

exports.prueba = busquedaTrabajo;
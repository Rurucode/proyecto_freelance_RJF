// Definimos dos contastes que nos traen los scrap

const freelancer = require("../Utils/wokana_scrap");
const peoplePerHourScrap = require("../Utils/peoplePerHour_scrap");


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

exports.recogerOfertas = recogerOfertas;
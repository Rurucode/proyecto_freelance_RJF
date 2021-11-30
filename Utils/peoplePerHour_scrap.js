const puppeteer = require("puppeteer");
//fetch a https://www.peopleperhour.com/services/web+development?ref=search
//Se puede hacer una busqueda sustituyendo web+development por lo que quieras (a traves del input del form)

//Funcion para scrap donde se le pasa por parametro la url de donde vas a buscar
const scrapPeoplePerHour = async(url) => {
    try {
        console.log('Opening browser');
        //Creamos la constante browser donde le entra el chronium lanzado
        const browser = await puppeteer.launch({headless: false});

        //Nueva pagina y con goto navegamos hacia ella
        const page = await browser.newPage();
        await page.goto(url);
        console.log(`Navegating to ${url}`);

        //Esperamos a que en la pagina aparezca el selector que va entre parentesis y una vez que lo encuentre comienza el resto
        await page.waitForSelector('.list⤍ResultsList⤚21s3j');

        //Creamos una funcion que lo primero que hace es evaluar el contenido de dicho selector y no le entra ningun parametro
        const trabajos = await page.$$eval('.list⤍ResultsList⤚21s3j', () => {
            //Creamos un array para guardar la información de cada oferta de trabajo e inicializamos los parametros que iran dentro del array
            const infoTrabajos = [];
            let tituloTrabajo = "";
            //let descripcionTrabajo = "";
            let salarioTrabajo = "";
            let urlTrabajo = "";
            
            //Creamos un array donde le entran el numero de ofertas traidas por el selector .pph-col-xs-12.pph-col-sm-12.pph-col-md-6.pph-col-lg-4.pph-col-xl-4 y lo vamos recorriendo y añadiendolo a su respectivos parametros recogiendo de cada uno de ellos titulo,salario y enlace
            const arrayDeOfertas = document.querySelectorAll('.pph-col-xs-12.pph-col-sm-12.pph-col-md-6.pph-col-lg-4.pph-col-xl-4');
            arrayDeOfertas.forEach(element => {
                tituloTrabajo = element.querySelector('.card__title-link⤍HourlieTile⤚13loh').innerText
                //descripcionTrabajo = element.querySelector('expander-js-expander-passed').innerText
                salarioTrabajo = element.querySelector('div.u-txt--right.card__price⤍HourlieTileMeta⤚3su1s > span').innerText
                urlTrabajo = element.querySelector('.card__title-link⤍HourlieTile⤚13loh').href

                ////Pusheamos cada parametro recogido a infoTrabajos
                infoTrabajos.push({
                    "titulo": tituloTrabajo,
                    //"descripcion": descripcionTrabajo,
                    "salario": salarioTrabajo,
                    "url": urlTrabajo
                });
            });
            //Una vez finalizado el bucle devolvemos el array con toda la información
            return infoTrabajos;
        });
        //console.log(trabajos);

        //Cerramos el browser
        await browser.close();
        //Devolvemos trabajos donde le llega la info recogida del return infoTrabajos
        return trabajos;


    } catch (err) {
        console.log({"Error": err});
    }
}

//Exportamos la función
exports.scrapPeoplePerHour = scrapPeoplePerHour;
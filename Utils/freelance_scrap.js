const puppeteer = require("puppeteer");
//fetch a https://www.freelancer.es/jobs/?keyword=software
//Se puede hacer una busqueda sustituyendo web+development por lo que quieras (a traves del input del form)

//Funcion para scrap donde se le pasa por parametro la url de donde vas a buscar
const scrapFreelancer = async(url) => {
    try {
        console.log('Opening browser');
        //Creamos la constante browser donde le entra el chronium lanzado
        const browser = await puppeteer.launch({headless: true});

        //Nueva pagina y con goto navegamos hacia ella
        const page = await browser.newPage();
        await page.goto(url);
        console.log(`Navegating to ${url}`);

        //Esperamos a que en la pagina aparezca el selector que va entre parentesis y una vez que lo encuentre comienza el resto
        await page.click('#close-cookie-banner');
        await page.waitForSelector('#search-form');
        await page.click('#search-submit');
        await page.waitForSelector('.ProjectSearch-content');
        // await page.waitFor(60000);

        //Creamos una funcion que lo primero que hace es evaluar el contenido de dicho selector y no le entra ningun parametro
        const trabajos = await page.$$eval('.ProjectSearch-content', () => {
            //Creamos un array para guardar la información de cada oferta de trabajo e inicializamos los parametros que iran dentro del array
            let infoTrabajos = [];
            let tituloTrabajo = "";
            let descripcionTrabajo = "";
            let salarioTrabajo = "";
            let urlTrabajo = "";
            
            // if (infoTrabajos != null) {
            //     infoTrabajos = [];
            // }
            //Creamos un array donde le entran el numero de ofertas traidas por el selector .JobSearchCard-item y lo vamos recorriendo y añadiendolo a su respectivos parametros recogiendo de cada uno de ellos titulo,descripcion,salario y enlace
            const arrayDeOfertas = document.querySelectorAll('.JobSearchCard-item');
            arrayDeOfertas.forEach(element => {
                tituloTrabajo = element.querySelector('.JobSearchCard-primary-heading-link').innerText
                descripcionTrabajo = element.querySelector('.JobSearchCard-primary-description').innerText
                salarioTrabajo = element.querySelector('div.JobSearchCard-primary-hidden > div ').innerText
                urlTrabajo = element.querySelector('.JobSearchCard-primary-heading-link').href

                //Pusheamos cada parametro recogido a infoTrabajos
                infoTrabajos.push({
                    "titulo": tituloTrabajo,
                    "descripcion": descripcionTrabajo,
                    "salario": salarioTrabajo,
                    "url": urlTrabajo
                });
            });
            //Una vez finalizado el bucle devolvemos el array con toda la información
            // console.log(infoTrabajos[0]);
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
exports.scrapFreelancer = scrapFreelancer;
const puppeteer = require("puppeteer");
//fetch a https://www.workana.com/jobs?category=it-programming&language=es&query=programacion


// Función que se encarga de realizar toda la operación de scrap para la recogida de datos (links e info por separado)
const scrapWorkana = async(url) => {
    //Abre el navegador
    const browser = await puppeteer.launch({headless: false})
    //Nueva pagina
    const page = await browser.newPage();
    //Va a la url (que le entrara por la funcion del model)
    await page.goto(url);    

    //Funcion que devuelve un array con todos los enlaces de la pagina de wokana
    const enlaces = await page.evaluate(() => {
        //Saca los enlaces
        const elementos = document.querySelectorAll('.project-item div h2 a');
        const links = [];
        for (let element of elementos){
            //Almacena 1 a 1 los href de la constante elementos
            links.push(element.href);
        }
        return links;
    });

    //console.log(enlaces[0]);

    //Creamos un array de ofertas que le entrara posteriormente le entrara varios objetos con la información de cada oferta
    const ofertas = [];

    //Recorremos los enlaces previamente captados
    for (let enlace of enlaces){
        //Entra en cada uno de ellos
        await page.goto(enlace);
        //Funcion que devuelve un ibjeto con los campos title,description y price
        const info = await page.evaluate(() => {
            const obj = {};
            obj.title = document.querySelector('.h3.title').innerText;
            obj.description = document.querySelector('.expander.js-expander-passed').innerText;
            obj.price = document.querySelector('.budget.text-success.text-right').innerText;
            // tmp.url = enlace;
            return obj;
        });
        ofertas.push(info);
    }
    // console.log(ofertas);
    await browser.close();
}



exports.scrap = scrapWorkana;
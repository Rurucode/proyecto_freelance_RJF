const puppeteer = require("puppeteer");
//fetch a https://www.peopleperhour.com/services/programming?ref=search

const scrapPeoplePerHour = async(url) => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();
    await page.goto(url);    

    const enlaces = await page.evaluate(() => {
        const elementos = document.querySelectorAll('.card__title-link⤍HourlieTile⤚13loh');
        const links = [];
        for (let element of elementos){
            links.push(element.href);
        }

        return links;
    });
    console.log(enlaces[0]);

    const ofertas = [];

    for (let enlace of enlaces){
        await page.goto(enlace);

        const info = await page.evaluate(() => {
            const obj = {};
            obj.title = document.querySelector('.clearfix h1').innerText;
            obj.description = document.querySelector('.content-text.clearfix').innerText;
            obj.price = document.querySelector('.js-hourlie-discounted-price.discounted-price').innerText;
            // tmp.url = enlace;
            return obj;
        });
        ofertas.push(info);
    }
    console.log(ofertas);
    await browser.close();
}



exports.scrap = scrapPeoplePerHour;
const buscador = document.getElementById('botonBuscador');
const inputBusqueda = document.querySelector('#buscadorOferta');

const mainCarta = document.querySelector('#cartaOferta')




buscador.addEventListener('click', async() => {
    // Hacemos que aparezca el gif
    document.getElementById("loadingOffers").style.display="flex";
    // console.log(document.querySelector('#contenedorCarta'));
    if (document.querySelector('#contenedorCarta')) {
        mainCarta.removeChild(document.querySelector('#contenedorCarta'));
    }
    // console.log('x')
    // console.log(inputBusqueda.value);
    let response = [];
    response = await fetch(`/search?name=${inputBusqueda.value}`);
    let data = [];
    data = await response.json();
    console.log(data.length);
    data.map(oferta => pintar(oferta));
    // Hacemos que aparezca el gif
    document.getElementById("loadingOffers").style.display="none";
});


// SCRAP MENU SECUNDARIO

const getjDiv = document.getElementsByClassName("layer");

    getjDiv.addEventListener('click', async() => {
        // Hacemos que aparezca el gif
        document.getElementById("loadingOffers").style.display="flex";
        // console.log(document.querySelector('#contenedorCarta'));
        if (document.querySelector('#contenedorCarta')) {
            mainCarta.removeChild(document.querySelector('#contenedorCarta'));
        }
        // console.log('x')
        // console.log(inputBusqueda.value);
        let response = [];
        response = await fetch(`/search?name=${innerText.value}`);
        let data = [];
        data = await response.json();
        console.log(data.length);
        data.map(oferta => pintar(oferta));
        // Hacemos que aparezca el gif
        document.getElementById("loadingOffers").style.display="none";
    });

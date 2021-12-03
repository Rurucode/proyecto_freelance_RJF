const buscador = document.getElementById('botonBuscador');
const inputBusqueda = document.querySelector('#buscadorOferta');

const mainCarta = document.querySelector('#cartaOferta')




buscador.addEventListener('click', async() => {
    // console.log(document.querySelector('#contenedorCarta'));
    if (document.querySelector('#contenedorCarta')) {
        mainCarta.removeChild(document.querySelector('#contenedorCarta'));
    }
    // console.log('x')
    // console.log(inputBusqueda.value);
    const response = await fetch(`/api/search?name=${inputBusqueda.value}`);
    let data = await response.json();
    //console.log(data);
    data.forEach(oferta => pintar(oferta)); 
});
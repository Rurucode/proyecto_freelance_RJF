const contenidoOferta  = document.createElement('div')
contenidoOferta.setAttribute("id", "contenedorCarta")



const pintar = (oferta) => {
    console.log('estoy aqui?');

    const ofertaCreada = document.createElement('div')
    ofertaCreada.setAttribute('class', 'detail-card') 

    const title  = document.createElement('h2')
    title.innerText = `${oferta.titulo}`
    

    const price  = document.createElement('p')
    price.innerText = `${oferta.salario}`
    

    const description  = document.createElement('p')
    description.innerText = `${oferta.descripcion}`



    const enviarInput = document.createElement("input");
    enviarInput.setAttribute("type", "button");
    enviarInput.setAttribute("class", "classEnviarInput");
    enviarInput.setAttribute("value", "Favoritos");

    const enlaceOferta = document.createElement("a");
    enlaceOferta.setAttribute("href", oferta.url);
    

    ofertaCreada.appendChild(enlaceOferta);
    ofertaCreada.appendChild(title)
    ofertaCreada.appendChild(price)
    ofertaCreada.appendChild(description)
    ofertaCreada.appendChild(enviarInput)

    
    contenidoOferta.appendChild(ofertaCreada)
    cartaOferta.appendChild(contenidoOferta);

}

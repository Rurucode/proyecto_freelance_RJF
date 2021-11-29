const PINTAR = (oferta) => {

    // Generamos los divs necesarios y les añadimos una clase

    const contenidoOferta = document.createElement("div");
    contenidoOferta.setAttribute("class", "classContenidoOferta");

    const tituloTrabajo = document.createElement("div");
    tituloTrabajo.setAttribute("class", "classTituloTrabajo");

    const salario = document.createElement("div");
    salario.setAttribute("class", "classSalario");

    const descripcion = document.createElement("div");
    descripcion.setAttribute("class", "classDescripcion");

    const enviarAFavoritos = document.createElement("div");
    enviarAFavoritos.setAttribute("class", "classEnviarAFavoritos");

    // Creamos los elementos de nuestra oferta, imprimimos lo que obtengamos del scrap y le añadimos una clase

    const trabajoH2 = document.createElement("h2");
    trabajoH2.innerHTML = oferta.title.slice(0,30);
    trabajoH2.setAttribute("class", "classTrabajoH2");

    const salarioH3 = document.createElement("h3");
    salarioH3.innerHTML = oferta.price;
    salarioH3.setAttribute("class", "classSalarioH3");

    const descripcionP = document.createElement("p");
    descripcionP.innerHTML = oferta.description;
    descripcionP.setAttribute("class", "classDescripcionP");

    const enviarInput = document.createElement("input");
    enviarInput.setAttribute("class", "classEnviarInput");

    // Creamos una variable que genera una etiqueta a y le indicamos la url del scrap

    const enlaceOferta = document.createElement("a");
    enlaceOferta.setAttribute("href", oferta.enlaces);

    // Metemos en la etiqueta a en el div que contiene todos los elementos para que nos redirija a la oferta

    enlaceOferta.appendChild(contenidoOferta);

    // Añadimos todos los elementos a su div correspondiente

    trabajoH2.appendChild(tituloTrabajo);
    salarioH3.appendChild(salario);
    descripcionP.appendChild(descripcion);
    enviarInput.appendChild(enviarAFavoritos);

    // Añadimos los div padre anteriores al div general que les contiene a todos
    
    tituloTrabajo.appendChild(contenidoOferta);
    salario.appendChild(contenidoOferta);
    descripcion.appendChild(contenidoOferta);
    enviarAFavoritos.appendChild(contenidoOferta);

}
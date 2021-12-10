const fav = getElementById("contenedorOfertas")


const favs = document.querySelectorAll(".classInpu");
    favs.forEach(fav => {
        fav.addEventListener("click", (event) => {
            event.target.parentElement
        })
    })
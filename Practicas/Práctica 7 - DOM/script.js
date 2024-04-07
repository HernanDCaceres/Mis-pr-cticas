
const agregar = document.getElementById("agregar");
const body = document.getElementsByTagName("body")[0];

const cb = () => {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("cuadrado");
    nuevoDiv.classList.add("rojo");
    nuevoDiv.remo
    nuevoDiv.addEventListener("click", (event) => {
        event.target.remove();
    })
    

    body.appendChild(nuevoDiv);
}

agregar.addEventListener("click", cb)
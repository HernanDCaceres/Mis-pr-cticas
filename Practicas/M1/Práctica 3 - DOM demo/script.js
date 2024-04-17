const setNameButton = document.getElementById("setName");

const setNameHandler = () => {
    const nameInput = document.getElementById("name");
    const createdBy = document.getElementById("createdBy");

    const name = nameInput.value;
    
    createdBy.innerHTML = `Aplicación creada por: ${name}`;

    nameInput.value = "";

};

setNameButton.addEventListener("click", setNameHandler)


const imagenes = [
    "abril.jpg",
    "bebop.webp",
    "destructor.jpg",
    "rocoso.webp",
    "splinter.jpg",
    "leonardo.jpg",
    "miguelangel.webp",
    "donatello.jpg",
    "rafael.png",
    "destructor.jpg",
    "krang.jpg",
];

const cargarImagen = (imgName) => {
    return `assets/${imgName}`;
};

let index = 0;

const renderizarImagen = () => {
    const characterImg = document.getElementById("characterImg");
    characterImg.src = cargarImagen(imagenes[index]);
    if(index == imagenes.length -1)
    {
        index = 0;
    }
    else
    {
        index++;
    }
};

const characterChange = document.getElementById("characterChange");

characterChange.addEventListener("click", renderizarImagen);
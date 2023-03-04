

const maximum = 122
const minimun = 1
const random = () => Math.floor(Math.random() * (maximum - minimun)) + minimun

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'contenedorImagen';

    const imagen = document.createElement('img');
    imagen.className = 'img'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; // todo

    container.appendChild(imagen);
    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('imagenes');

const addButon = document.getElementById('add');
const cleanButon = document.getElementById('clean')

//Accion
const addImage = () => {
    const newImagen = createImageNode();
    mountNode.appendChild(newImagen);
    registerImage(newImagen);
};

const cleanImg = () => {
    while (mountNode.firstChild) {
        mountNode.firstChild.remove();
    }
};


addButon.addEventListener("click", addImage);
cleanButon.addEventListener("click",cleanImg);

//------------------------------------------IntersectionObserver
const isIntersecting = (entry) => {
    // if 200px lejos de la pantalla entonces has x o y cosa
    return entry.isIntersecting;//true dentro de la pantalla y falso si esta fuera de la pantalla
};

const loadImage = (entry) => {
    const container = entry.target; //container DIV
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargue la imagen
    imagen.src = url;
   

    //console.log(nodo.nodeName);

    //desregistra la imagen(unlisten)
    observer.unobserve(container);

    //-----------------------ver imagenes cargadas
    //imagen.onload = () => {
        loadedImages++; // aumenta la cantidad de imágenes cargadas
        printLog(); // muestra el mensaje en la consola
    //};
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

const registerImage = (imagen) => {
    // Con esto le vamos a decir al IntersectionObservador que obserce (imagen) que estamos reciviendo
    observer.observe(imagen);
    
//----------------ver imagenes agregadas
    appendedImages++; // aumenta la cantidad de imágenes agregadas
    printLog(); // muestra el mensaje en la consola
};


//-----------------------Imprimir.logs
let appendedImages = 0;
let loadedImages = 0;

const printLog = () => {
console.log(`⚪ Se han agregado ${appendedImages} imágenes`);
console.log(`🟣 Se han cargado ${loadedImages} imágenes`);
console.log("---------------------------------------");
};

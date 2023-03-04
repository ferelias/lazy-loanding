
const isIntersecting = (entry) => {
    // if 200px lejos de la pantalla entonces has x o y cosa
    return entry.isIntersecting;//true dentro de la pantalla y falso si esta fuera de la pantalla
};

const accion = () => {
    console.log("holis")
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
    // Con esto le vamos a decir al IntersectionObservador que obserce (imagen) que estamos recivirndo
    observer.observe(imagen);
};
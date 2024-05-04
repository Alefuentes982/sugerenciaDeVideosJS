// Implementando patron de modulo IIFE

const VideoPlayer = (function () {
    // Funcion privada para insertar el video en el documento HTML (solo accedo a esta a traves de mi funcion publica)
    function insertVideo(url, id) {
        const iframe = document.getElementById(id); //selecciono el elemento html por id segun el parametro que recibo en mi funcion
        iframe.setAttribute('src', url); //inserta el video en el html manipulando el DOM
    }

    // Funcion publica para insertar video 
    return function (url, id) {
        insertVideo(url, id); //invoco la funcion insertVideo enviandole los parametros url & id
    };
})();


// Clase padre Multimedia
class Multimedia {
    constructor(url) {
        this._url = url;
    }

    // Metodo para establecer un mensaje de cambio en la URL del video
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase "Reproductor" hija de Multimedia 
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    // Metodo para reproducir multimedia
    playMultimedia() {
        VideoPlayer(this._url, this._id);
    }

    // Metodo para establecer el tiempo de inicio en la URL
    setInicio(tiempo) {
        const iframe = document.getElementById(this._id);
        const currentSrc = iframe.getAttribute('src');
        iframe.setAttribute('src', `${currentSrc}?start=${tiempo}`);
    }
}


// Instanciando las clases para cada categoría
const musicaPlayer = new Reproductor("https://www.youtube.com/embed/i_cVJgIz_Cs", "musica");
const peliculaPlayer = new Reproductor("https://www.youtube.com/embed/rcbLT4EDJPU", "peliculas");
const seriePlayer = new Reproductor("https://www.youtube.com/embed/4eMYiDaY3-Q", "series");

// Mostrar los videos en el documento HTML invocando el metodo "playMultimedia"
musicaPlayer.playMultimedia();
peliculaPlayer.playMultimedia();
seriePlayer.playMultimedia();

// Seteando el tiempo de inicio de la instancia de musica
musicaPlayer.setInicio(29); 

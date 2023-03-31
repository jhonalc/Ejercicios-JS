//capturar los datos del DOM para las opciones de piedra, papel o tijera

let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");


//Capturando el elemento del DOM para el tablero de las opciones elegidas por el usuario
let manoUsuario = document.querySelector(".mano_usuario");
let manoComputadora = document.querySelector(".mano_computadora");

let puntajeUsuario = document.querySelector(".puntaje_usuario");
let puntajeComputadora = document.querySelector(".puntaje_computadora");

let labelResultado = document.querySelector(".resultado");
let tablero = document.querySelector(".tablero");

let eleccionUsuario = "";
let eleccionComputadora = "";

let contadorUsuario = 0;
let contadorComputadora = 0;

const swalInicio = () => {
    Swal.fire({
        icon: 'success',
        title: 'Bienvenido a nuestro juego',
        text: 'Iniciemos este juego',
        confirmButtonText: 'Empecemos',
    })
}

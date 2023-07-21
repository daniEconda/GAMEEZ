let ataquejugador
let ataqueGlobal
let resultadofinal
let vidasjugador = 3
let vidasenemigo = 3

const mascotaLabels = document.querySelectorAll(".mascota-label");

mascotaLabels.forEach((label) => {
  label.addEventListener("click", () => {
    // Eliminamos el estilo seleccionado de todas las etiquetas
    mascotaLabels.forEach((label) => label.classList.remove("selected"));

    // Aplicamos el estilo seleccionado solo a la etiqueta seleccionada
    label.classList.add("selected");
  });
});

const input = document.querySelectorAll('input');

const $ = selector => document.getElementById(selector)
function iniciarjuego (){

    let sectionSeleAtaque = $('sele-ataque')
    sectionSeleAtaque.style.display = 'none'

    let sectionReiniciar = $('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = $('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = $('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = $('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = $('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarjuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleMascota = $('sele-mascota')
    sectionSeleMascota.style.display = 'none'

    let sectionSeleAtaque = $('sele-ataque')
    sectionSeleAtaque.style.display = 'block'

    let spanMascotaJugador = $('mascota-jugador')

    if ($("Hipodoge").checked == true) {
        spanMascotaJugador.innerHTML = 'hipodoge'
    }else if ($("Capipepo").checked == true){
        spanMascotaJugador.innerHTML = 'capipepo'
    } else if ($("Ratigueya").checked == true){
        spanMascotaJugador.innerHTML = 'ratigueya'
    }else if ($("Langostelvis").checked == true){
        spanMascotaJugador.innerHTML = 'langostelvis'
    }else {alert("Selecciona una mascota pls")}

    seleccionarMascotaJugadorEnemigo()
}

function seleccionarMascotaJugadorEnemigo() {
    let ataqueAleatorio = aleatorio(1,4)
    let spanMascotaEnemigo = $('mascota-enemigo')
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'

    }else if (ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'

    }else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
}

function ataqueFuego (){
    ataquejugador = 'fuego'
    ataquealeatorioenemigo ()
}
function ataqueAgua (){
    ataquejugador = 'agua'
    ataquealeatorioenemigo ()
}
function ataqueTierra (){
    ataquejugador = 'tierra'
    ataquealeatorioenemigo()
}
function ataquealeatorioenemigo() {
    let ataqueEnemigo = aleatorio (1, 3)
    if (ataqueEnemigo == 1){
        ataqueGlobal = 'fuego'
    } 
    else if (ataqueEnemigo == 2){
        ataqueGlobal = 'agua'
    }
    else {
        ataqueGlobal = 'tierra'
}
    combate()
    crearMensaje()
}

function combate() {
    let spanVidasJugador = $('vidas-jugador')
    let spanVidasEnemigo = $('vidas-enemigo')


    if(ataqueGlobal == ataquejugador) {
        resultadofinal= "Empate"
    } else if (ataquejugador == 'fuego' && ataqueGlobal == 'tierra') {
        resultadofinal= "GANASTE"
        vidasenemigo--
        spanVidasEnemigo.innerHTML = vidasenemigo
    } else if (ataquejugador == 'agua' && ataqueGlobal == 'fuego') {
        resultadofinal = "GANASTE"
        vidasenemigo--
        spanVidasEnemigo.innerHTML = vidasenemigo
    } else if (ataquejugador == 'tierra' && ataqueGlobal == 'agua') {
        resultadofinal= "GANASTE"
        vidasenemigo--
        spanVidasEnemigo.innerHTML = vidasenemigo
    } else {
        resultadofinal= "Perdiste"
        vidasjugador--
        spanVidasJugador.innerHTML = vidasjugador
    }
    revisarvidas()
}
function revisarvidas() {
    if (vidasenemigo == 0) {
        crearMensajeFinal("GANASTE :D ")

    } else if (vidasjugador == 0) {
        crearMensajeFinal("NOOO. perdiste... :() ")
    }
} 

function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataquejugador + ', y la otra atacó con ' + ataqueGlobal + '. ' + resultadofinal;
  
    sectionMensajes.appendChild(parrafo);
  }

function crearMensajeFinal (resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = $('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = $('boton-agua')
    botonAgua.disabled = true
    let botonTierra = $('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = $('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarjuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarjuego) 

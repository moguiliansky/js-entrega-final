/*DECLARO VARIABLES Y OBTENGO EL ELEMENTO DEL DOM*/
let piedra = document.getElementsByClassName("contenedor__objeto--piedra");
let papel = document.getElementsByClassName("contenedor__objeto--papel");
let tijera = document.getElementsByClassName("contenedor__objeto--tijera");

/*VARIABLES DEL CONTADOR*/
let ganadas;
let perdidas;
let empatadas;

if (localStorage.getItem("ganadas")){
    ganadas = localStorage.getItem("ganadas");
    document.getElementById("contador-ganado").textContent = ganadas;
}else{
    ganadas = 0;
}

if (localStorage.getItem("perdidas")){
    perdidas = localStorage.getItem("perdidas");
    document.getElementById("contador-perdido").textContent = perdidas;
}else{
    perdidas = 0;
}

if (localStorage.getItem("empatadas")){
    empatadas = localStorage.getItem("empatadas");
    document.getElementById("contador-empatado").textContent = empatadas;
}else{
    empatadas = 0;
}

/*FUNCIONES DE GANAR, PERDER Y EMPATAR*/
function empate(){
    document.getElementById("mensaje-empate").classList.remove("resultado-oculto");
    document.getElementById("mensaje-perdiste").classList.add("resultado-oculto");
    document.getElementById("mensaje-ganaste").classList.add("resultado-oculto");
    
    empatadas++;
    localStorage.setItem("empatadas", empatadas);
    document.getElementById("contador-empatado").textContent = empatadas;
}

function ganar (){
    document.getElementById("mensaje-ganaste").classList.remove("resultado-oculto");
    document.getElementById("mensaje-perdiste").classList.add("resultado-oculto");
    document.getElementById("mensaje-empate").classList.add("resultado-oculto");

    ganadas++;
    localStorage.setItem("ganadas", ganadas);
    document.getElementById("contador-ganado").textContent = ganadas;
}

function perder (){
    document.getElementById("mensaje-perdiste").classList.remove("resultado-oculto");
    document.getElementById("mensaje-empate").classList.add("resultado-oculto");
    document.getElementById("mensaje-ganaste").classList.add("resultado-oculto");

    perdidas++;
    localStorage.setItem("perdidas", perdidas);
    document.getElementById("contador-perdido").textContent = perdidas;
}

/*A CADA VARIABLE LE ASIGNO UN LISTENER*/
piedra[0].addEventListener("click", respuestapiedra);
function respuestapiedra () {
    let ran3 = Math.random() * 3;
    let resultado = Math.floor(ran3);
    if (resultado === 0) {
        document.getElementById("papel-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("tijera-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.add("contenedor__objeto-seleccionado");

        empate();

    }else if (resultado === 1) {
        document.getElementById("papel-maquina").classList.add("contenedor__objeto-seleccionado");
        document.getElementById("tijera-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.remove("contenedor__objeto-seleccionado");

        perder();
    }else{
        document.getElementById("tijera-maquina").classList.add("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("papel-maquina").classList.remove("contenedor__objeto-seleccionado");

        ganar();
    }
}

papel[0].addEventListener("click", respuestapapel);
function respuestapapel () {
    let ran3 = Math.random() * 3;
    let resultado = Math.floor(ran3);
    if (resultado === 0) {
        document.getElementById("tijera-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.add("contenedor__objeto-seleccionado");
        document.getElementById("papel-maquina").classList.remove("contenedor__objeto-seleccionado");

        ganar();
    }else if (resultado ===1) {
        document.getElementById("papel-maquina").classList.add("contenedor__objeto-seleccionado");
        document.getElementById("tijera-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.remove("contenedor__objeto-seleccionado");

        empate();
    }else{
        document.getElementById("papel-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("tijera-maquina").classList.add("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.remove("contenedor__objeto-seleccionado");

        perder();
    }
}

tijera[0].addEventListener("click", respuestatijera);
function respuestatijera () {
    let ran3 = Math.random() * 3;
    let resultado = Math.floor(ran3);
    if (resultado === 0) {
        document.getElementById("papel-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("tijera-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.add("contenedor__objeto-seleccionado");

        perder();
    }else if (resultado ===1) {
        document.getElementById("tijera-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("papel-maquina").classList.add("contenedor__objeto-seleccionado");

        ganar();
    }else{
        document.getElementById("papel-maquina").classList.remove("contenedor__objeto-seleccionado");
        document.getElementById("tijera-maquina").classList.add("contenedor__objeto-seleccionado");
        document.getElementById("piedra-maquina").classList.remove("contenedor__objeto-seleccionado");

        empate();
    }
}

/*EVENTO Y FUNCIÓN DEL BOTÓN RESET*/
document.getElementById("reset").addEventListener("click", reset)
function reset () {
    ganadas = 0;
    perdidas = 0;
    empatadas = 0;
    localStorage.clear();
    document.getElementById("contador-ganado").textContent = 0;
    document.getElementById("contador-perdido").textContent = 0;
    document.getElementById("contador-empatado").textContent = 0;
}




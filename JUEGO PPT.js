function valoraleatorio(inicio, fin) {
    return Math.random() * (fin - inicio) + inicio;

}
valoraleatorio(1, 3);

var maquina

maquina = Math.floor(valoraleatorio(1, 4));


var movMaquina

if (maquina == 1) {
    movMaquina = "tijera";
}


if (maquina == 2) {
    movMaquina = "piedra";
}


if (maquina == 3) {
    movMaquina = "papel";
}

var usuario

usuario = parseInt(prompt("Selecciona una opcion \n 1.tijera. \n 2.Piedra. \n 3.Papel."))

var movUsuario
if (usuario == 1) {
    movUsuario = "tijera";
}


if (maquina == 2) {
    movUsuario = "piedra";
}


if (maquina == 3) {
    movUsuario = "papel";
}
console.log("La Maquina escogio" + movMaquina);
console.log("El Usuario escogio" + movUsuario);

var resultado

if (movMaquina == "piedra" && movUsuario == "piedra") {
    resultado = "Empate";
}
if (movMaquina == "papel" && movUsuario == "papel") {
    resultado = "Empate";
}
if (movMaquina == "tijera" && movUsuario == "tijera") {
    resultado = "Empate";
}



if (movMaquina == "piedra" && movUsuario == "tijera") {
    resultado = "La piedra le gana a la tijera, por lo tanto el Usuario pierde y la Maquina Gana!";
}
if (movMaquina == "tijera" && movUsuario == "papel") {
    resultado = "La tijera le gana a la papel, por lo tanto el Usuario pierde y la Maquina Gana!";
}
if (movMaquina == "papel" && movUsuario == "piedra") {
    resultado = "El papel le gana a la piedra, por lo tanto el Usuario pierde y la Maquina Gana!";
}
if (movMaquina == "tijera" && movUsuario == "piedra") {
    resultado = "La piedra le gana a la tijera, por lo tanto la Maquina pierde y el Usuario Gana!";
}
if (movMaquina == "piedra" && movUsuario == "papel") {
    resultado = "El papel le gana a la piedra, por lo tanto la Maquina pierde y el Usuario Gana!";
}
if (movMaquina == "papel" && movUsuario == "tijera") {
    resultado = "La Tijera le gana al Papel, por lo tanto la Maquina pierde y el Usuario Gana!";
}

console.log(resultado);
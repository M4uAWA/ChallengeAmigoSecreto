let amigos = [];

function agregarAmigo() {

    let cuadroTexto = document.querySelector(".input-name");

    if (cuadroTexto.value == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(cuadroTexto.value);
    cuadroTexto.value = "";
    actualizarLista();
}

function actualizarLista() {

    let lista = document.querySelector(".name-list");

    lista.innerHTML = "";

    for (const nombre in amigos) {
        lista.innerHTML = lista.innerHTML + `<li>${amigos[nombre]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        return;
    }
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto sorteado es: ${amigos[Math.floor(Math.random() * amigos.length)]}</li>`;
    amigos = [];
    actualizarLista();
}

function reiniciarJuego() {
    if (amigos.length == 0 && document.getElementById("resultado").innerHTML == "") {
        return;
    }
    location.reload();
}
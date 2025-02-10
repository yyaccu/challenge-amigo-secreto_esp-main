// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    document.getElementById('resultado').innerHTML = ""; // Limpiar mensaje de amigo secreto
    actualizarListaAmigos();
}

//Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


//Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `🎉 Tu Amigo secreto es: ${amigoSorteado} 🎉`;

    // Vaciar la lista de amigos
    amigos = [];

    // Limpiar la lista en pantalla
    actualizarLista();
}

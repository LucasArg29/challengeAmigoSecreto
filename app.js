// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Captura el input
    const nombre = input.value.trim(); // Quita espacios en blanco

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que haya al menos un amigo
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
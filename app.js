// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

// Agregar un nuevo amigo a la lista
const agregarAmigo = () => {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    actualizarLista();
};

// Actualizar la lista de amigos mostrada en el HTML
const actualizarLista = () => {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map((amigo, index) => `${index + 1}. ${amigo}<br>`).join('');
};

// Seleccionar un amigo secreto de manera aleatoria
const sortearAmigo = () => {
    if (amigos.length === 0) {
        alert('La lista de amigos no puede estar vacía.');
        return;
    }

    const ganadorIndex = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[ganadorIndex];

    // Ocultar la lista de participantes
    document.getElementById('listaAmigos').innerHTML = '';

    document.getElementById('resultado').innerText = `Su amigo secreto es: ${ganador}`;
};

// Event Listeners
const inicializarEventos = () => {
    document.getElementById('botonAgregar').addEventListener('click', agregarAmigo);
    document.getElementById('botonSortear').addEventListener('click', sortearAmigo);
};

document.addEventListener('DOMContentLoaded', inicializarEventos);

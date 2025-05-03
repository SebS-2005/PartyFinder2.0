// Script para controlar el menú hamburguesa en móviles

// Obtengo el botón y el menú
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Cuando se da clic en el botón, alterno la visibilidad del menú
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});






// Este archivo carga dinámicamente las cards de fiestas desde un JSON local

// Seleccionamos el contenedor de las cards
const cardsContainer = document.getElementById('cardsContainer');

// Función para cargar los datos desde el JSON
fetch('data/fiestas.json')
  .then(response => response.json())
  .then(data => mostrarCards(data))
  .catch(error => console.error('Error cargando las fiestas:', error));

// Función que recibe los datos y pinta las cards en el HTML
function mostrarCards(fiestas) {
  fiestas.forEach(fiesta => {
    // Creamos el contenedor de cada card
    const card = document.createElement('div');
    card.className = 'bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition';

    // Construimos la card con los datos
    card.innerHTML = `
      <img src="${fiesta.imagen}" alt="${fiesta.nombre}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-bold mb-2">${fiesta.nombre}</h3>
        <p class="text-gray-400 mb-2">${fiesta.descripcion}</p>
        <p class="text-yellow-400 font-semibold">⭐ ${fiesta.ranking}</p>
        <a href="perfil.html?id=${fiesta.id}" class="block bg-purple-700 hover:bg-purple-600 text-center mt-4 py-2 rounded">Ver perfil</a>
      </div>
    `;

    // Agregamos la card al contenedor
    cardsContainer.appendChild(card);
  });
}

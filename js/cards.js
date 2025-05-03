// cards.js
// Este archivo se encarga de generar las cards dinámicas en la sección de inicio.

// Esperamos a que el DOM cargue antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
    generarCards();
  });
  
  // Función que genera cards de prueba
  function generarCards() {
    const contenedor = document.getElementById('contenido');
  
    // Datos de ejemplo
    const lugares = [
      { nombre: "Club Nocturno X", ubicacion: "Zona T", imagen: "assets/images/icons/club1.png" },
      { nombre: "La Terraza", ubicacion: "Usaquén", imagen: "assets/images/icons/club2.png" },
      { nombre: "Bar 360", ubicacion: "Chapinero", imagen: "assets/images/icons/club3.png" }
    ];
  
    // Recorremos el array y creamos una card por cada lugar
    lugares.forEach(lugar => {
      const card = document.createElement('div');
      card.className = "bg-gray-800 rounded-xl shadow-lg p-4 mb-6";
  
      card.innerHTML = `
        <img src="${lugar.imagen}" alt="${lugar.nombre}" class="w-full h-48 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-bold mb-2">${lugar.nombre}</h3>
        <p class="text-gray-400 mb-2">${lugar.ubicacion}</p>
        <button class="bg-purple-700 hover:bg-purple-600 transition px-4 py-2 rounded-full font-semibold">
          Ver más
        </button>
      `;
  
      contenedor.appendChild(card);
    });
  }
  
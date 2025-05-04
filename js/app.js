// Script para controlar el menú hamburguesa en móviles

// Obtengo el botón y el menú
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Cuando se da clic en el botón, alterno la visibilidad del menú
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});







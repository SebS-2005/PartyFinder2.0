  // JavaScript para el lightbox
        document.addEventListener('DOMContentLoaded', function() {
            const galleryItems = document.querySelectorAll('.gallery-grid-item, .gallery-item, .review-photo');
            const lightbox = document.querySelector('.lightbox');
            const lightboxImg = document.querySelector('.lightbox-img');
            const closeBtn = document.querySelector('.lightbox-close');
            const prevBtn = document.querySelector('.lightbox-button.prev');
            const nextBtn = document.querySelector('.lightbox-button.next');
            
            let currentImageIndex = 0;
            const images = [];
            
            // Recopilar todas las imágenes de la galería
            galleryItems.forEach((item, index) => {
                const img = item.querySelector('img') || item;
                images.push(img.src);
                
                item.addEventListener('click', () => {
                    currentImageIndex = index;
                    lightbox.classList.add('active');
                    lightboxImg.src = images[currentImageIndex];
                });
            });
            
            // Cerrar lightbox
            closeBtn.addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
            
            // Navegación entre imágenes
            prevBtn.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                lightboxImg.src = images[currentImageIndex];
            });
            
            nextBtn.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                lightboxImg.src = images[currentImageIndex];
            });
            
            // Cerrar al hacer clic fuera de la imagen
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.classList.remove('active');
                }
            });
            
            // Navegación con teclado
            document.addEventListener('keydown', (e) => {
                if (lightbox.classList.contains('active')) {
                    if (e.key === 'Escape') {
                        lightbox.classList.remove('active');
                    } else if (e.key === 'ArrowLeft') {
                        prevBtn.click();
                    } else if (e.key === 'ArrowRight') {
                        nextBtn.click();
                    }
                }
            });
            
            // Cambiar pestañas de navegación
            const navItems = document.querySelectorAll('.venue-nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    navItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    // Aquí iría la lógica para cargar el contenido correspondiente
                });
            });
        });
   
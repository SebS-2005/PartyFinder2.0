  document.addEventListener('DOMContentLoaded', () => {
            // Control de carruseles
            function setupCarousel(container, prevBtn, nextBtn) {
                const cards = container.querySelectorAll('.main-card, .rank-card');
                const cardWidth = cards[0].offsetWidth + 20; // Ancho de tarjeta + margen
                let position = 0;
                const maxCards = cards.length;
                const visibleCards = Math.floor(container.offsetWidth / cardWidth);
                
                // Control de botón previo
                prevBtn.addEventListener('click', () => {
                    if (position > 0) {
                        position--;
                        slideCarousel();
                        
                        // Animación de desvanecimiento
                        const lastVisibleCard = cards[position + visibleCards];
                        if (lastVisibleCard) {
                            lastVisibleCard.classList.add('fade-out');
                            setTimeout(() => {
                                lastVisibleCard.classList.remove('fade-out');
                            }, 500);
                        }
                    }
                });
                
                // Control de botón siguiente
                nextBtn.addEventListener('click', () => {
                    if (position < maxCards - visibleCards) {
                        // Animación de desvanecimiento
                        const firstVisibleCard = cards[position];
                        if (firstVisibleCard) {
                            firstVisibleCard.classList.add('fade-out');
                        }
                        
                        position++;
                        slideCarousel();
                        
                        setTimeout(() => {
                            if (firstVisibleCard) {
                                firstVisibleCard.classList.remove('fade-out');
                            }
                        }, 500);
                    }
                });
                
                // Deslizar carrusel a la posición actual
                function slideCarousel() {
                    container.style.transform = `translateX(-${position * cardWidth}px)`;
                }
            }
            
            // Configura carruseles
            const carousels = document.querySelectorAll('.carousel');
            carousels.forEach(carousel => {
                const container = carousel.querySelector('.carousel-container');
                const prevBtn = carousel.querySelector('.carousel-prev');
                const nextBtn = carousel.querySelector('.carousel-next');
                
                setupCarousel(container, prevBtn, nextBtn);
            });
            
            // Efecto hover en las tarjetas para mostrar info
            const cards = document.querySelectorAll('.main-card');
            cards.forEach(card => {
                const info = card.querySelector('.main-card-info');
                
                // Hacer visible la información al entrar
                card.addEventListener('mouseenter', () => {
                    info.style.opacity = '1';
                    info.style.transform = 'translateY(0)';
                });
                
                // Ocultar información al salir
                card.addEventListener('mouseleave', () => {
                    info.style.opacity = '0';
                    info.style.transform = 'translateY(10px)';
                });
            });
            
            // Animación de entrada para las secciones
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            const sections = document.querySelectorAll('.section-title, .featured-bar');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(section);
            });
        });
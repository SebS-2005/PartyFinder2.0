document.addEventListener('DOMContentLoaded', function() {
            const carousels = document.querySelectorAll('.carousel');
            
            carousels.forEach(carousel => {
                const container = carousel.querySelector('.carousel-container');
                const prevBtn = carousel.querySelector('.carousel-prev');
                const nextBtn = carousel.querySelector('.carousel-next');
                
                let scrollAmount = 0;
                const step = 300; // Cantidad a desplazar en cada clic
                
                prevBtn.addEventListener('click', () => {
                    scrollAmount = Math.max(scrollAmount - step, 0);
                    container.style.transform = `translateX(-${scrollAmount}px)`;
                });
                
                nextBtn.addEventListener('click', () => {
                    const maxScroll = container.scrollWidth - carousel.clientWidth;
                    scrollAmount = Math.min(scrollAmount + step, maxScroll);
                    container.style.transform = `translateX(-${scrollAmount}px)`;
                });
            });
        });
 // ====================================
    // SISTEMA DE LOADER
    // ====================================
    hideLoader() {
        setTimeout(() => {
            const loader = document.querySelector('.loader');
            if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }
        }, 1500);
    }

    // ====================================
    // SISTEMA DE PARTÍCULAS
    // ====================================
    createParticles() {
        const particlesContainer = document.querySelector('.particles') || this.createParticlesContainer();
        const particleCount = window.innerWidth > 768 ? 50 : 30;

        for (let i = 0; i < particleCount; i++) {
            this.createParticle(particlesContainer);
        }
    }

    createParticlesContainer() {
        const container = document.createElement('div');
        container.className = 'particles';
        document.body.appendChild(container);
        return container;
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Tamaño aleatorio
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Duración de animación aleatoria
        particle.style.animationDuration = (Math.random() * 4 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(particle);

        // Recrear partícula después de un tiempo aleatorio
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                this.createParticle(container);
            }
        }, Math.random() * 10000 + 5000);
    }

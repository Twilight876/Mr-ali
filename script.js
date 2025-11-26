document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const audioToggle = document.getElementById('audioToggle');
    const bgMusic = document.getElementById('bgMusic');
    const particlesContainer = document.getElementById('particles');

    // Envelope Interaction
    envelopeWrapper.addEventListener('click', () => {
        if (!envelopeWrapper.classList.contains('open')) {
            envelopeWrapper.classList.add('open');
            
            // Optional: Play a sound effect here if desired
            // const openSound = new Audio('path/to/open-sound.mp3');
            // openSound.play();
        }
    });

    // Audio Toggle
    let isPlaying = false;
    audioToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            audioToggle.classList.remove('playing');
        } else {
            bgMusic.play().catch(e => console.log("Audio play failed:", e));
            audioToggle.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });

    // Create Particles
    function createParticles() {
        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random positioning and sizing
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    createParticles();
});

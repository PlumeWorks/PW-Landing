document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for the main container
    const container = document.querySelector('.wireframe-box');
    const body = document.body;

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        body.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;

            // Subtle rotation and translation
            container.style.transform = `translate(${x}px, ${y}px) rotateX(${-y * 0.5}deg) rotateY(${x * 0.5}deg)`;
        });

        // Reset on mouse leave
        body.addEventListener('mouseleave', () => {
            container.style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
        });
    }
});

export class ParticleEmitter {
  constructor(container, config = {}) {
    this.container = container;
    this.config = Object.assign({
      count: 400,
      sizeRange: [4, 12],
      spread: 50,
      colors: ['red', 'black'],
      edgeBased: true
    }, config);
  }

  generateParticles() {
    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;
    const perSide = Math.floor(this.config.count / 4);

    const sides = [
      { side: 'top', count: perSide },
      { side: 'right', count: perSide },
      { side: 'bottom', count: perSide },
      { side: 'left', count: perSide }
    ];

    sides.forEach(({ side, count }) => {
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * (this.config.sizeRange[1] - this.config.sizeRange[0]) + this.config.sizeRange[0];
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
        particle.style.animationDelay = `${Math.random() * 3}s`;

        let x = 0, y = 0;
        switch (side) {
          case 'top':
            x = Math.random() * width;
            y = 0;
            particle.style.setProperty('--x', `${(Math.random() - 0.5) * this.config.spread}px`);
            particle.style.setProperty('--y', `${-Math.random() * this.config.spread}px`);
            break;
          case 'right':
            x = width;
            y = Math.random() * height;
            particle.style.setProperty('--x', `${Math.random() * this.config.spread}px`);
            particle.style.setProperty('--y', `${(Math.random() - 0.5) * this.config.spread}px`);
            break;
          case 'bottom':
            x = Math.random() * width;
            y = height;
            particle.style.setProperty('--x', `${(Math.random() - 0.5) * this.config.spread}px`);
            particle.style.setProperty('--y', `${Math.random() * this.config.spread}px`);
            break;
          case 'left':
            x = 0;
            y = Math.random() * height;
            particle.style.setProperty('--x', `${-Math.random() * this.config.spread}px`);
            particle.style.setProperty('--y', `${(Math.random() - 0.5) * this.config.spread}px`);
            break;
        }

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        this.container.appendChild(particle);
      }
    });
  }
}

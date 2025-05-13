export class ParticleEmitter {
  constructor(container, config = {}) {
    this.container = container;
    this.config = Object.assign({
      count: 400,
      sizeRange: [4, 12],
      spread: 75,
      colors: ['#ff4655', '#ffffff']
    }, config);
  }

  generateParticles() {
  for (let i = 1; i <= this.config.count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    let size, distance, x, y;

    if (i <= 150) {
      size = Math.random() * 20 + 10; // 10px to 30px
      distance = Math.random() * 50;
      const topLimit = -40;
      const bottomLimit = 20;
      y = Math.sin((Math.random() * 360) * (Math.PI / 180)) * distance;
      y = Math.max(topLimit, Math.min(bottomLimit, y)); // clamp Y
    } else {
      size = Math.random() * 5 + 2;
      distance = Math.random() * 75;
      const topLimit = -30;
      const bottomLimit = 30;
      y = Math.sin((Math.random() * 360) * (Math.PI / 180)) * distance;
      y = Math.max(topLimit, Math.min(bottomLimit, y)); // clamp Y
    }

    const angle = Math.random() * 360;
    x = Math.cos((angle * Math.PI) / 180) * distance;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.setProperty('--x', `${x}px`);
    particle.style.setProperty('--y', `${y}px`);
    particle.style.animationDelay = `${Math.random() * 4}s`;
    particle.style.backgroundColor = Math.random() > 0.5 ? 'red' : 'black';

    this.container.appendChild(particle);
  }
}

}

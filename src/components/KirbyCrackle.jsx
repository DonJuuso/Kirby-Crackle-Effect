import { useEffect, useRef } from 'react';
import { ParticleEmitter } from '../effects/ParticleEmitter';
import chibiBadge from '../assets/ChibiHeads/ChibiBadge.png';


export default function KirbyCrackle() {
  const containerRef = useRef(null);

  useEffect(() => {
    const emitter = new ParticleEmitter(containerRef.current, {
      count: 500,
      spread: 80,
      sizeRange: [6, 20],
      colors: ['#ff4655', '#ffffff']
    });
    emitter.generateParticles();
  }, []);

  return (
    <div className="badge-container">
      <div ref={containerRef} id="particle-container"></div>
      <img src={chibiBadge} alt="Chibi Badge" className="badge-img" />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { ParticleEmitter } from '../effects/ParticleEmitter';
import cardImage from '../assets/Cards/TCG_CARD_17_INFESTATION.png';

export default function KirbyCrackle() {
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const frame = frameRef.current;
      const container = containerRef.current;

      if (frame && container) {
        const { width, height } = frame.getBoundingClientRect();
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;
      }

      const emitter = new ParticleEmitter(containerRef.current, {
        count: 500,
        spread: 60,
        sizeRange: [6, 20],
        colors: ['#ff0000', '#000000'],
        edgeBased: true
      });

      emitter.generateParticles();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="card-frame" ref={frameRef}>
      <div ref={containerRef} className="fx-overlay"></div>
      <img src={cardImage} alt="Infestation Card" className="badge-img" />
    </div>
  );
}


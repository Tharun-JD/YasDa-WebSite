import React, { useEffect, useRef } from 'react';

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 100;
    const mouse = { x: null, y: null, radius: 250 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.velocity = Math.random() * 0.8 + 0.3;
        this.angle = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.7 + 0.4;
      }

      update() {
        // Slow drifting movement
        this.y -= this.velocity;
        this.x += Math.sin(this.angle) * 0.2;
        
        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }

        // Mouse interaction
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 253, 240, ${this.opacity * 0.7})`; // Warm Soft White
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Add a very subtle outer glow to some particles for a "dusted" look
        if (this.density > 25) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(255, 230, 180, 0.3)'; // Very faint golden glow
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-90"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleField;

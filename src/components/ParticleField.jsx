import React, { useEffect, useRef } from 'react';

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset(true);
  }

  reset(initial = false) {
    this.x = initial ? Math.random() * this.canvas.width : Math.random() * this.canvas.width;
    this.y = initial ? Math.random() * this.canvas.height : this.canvas.height + 20;
    
    // Mix of shapes: 0 = circle, 1 = star(✦), 2 = cross(+)
    this.shapeType = Math.floor(Math.random() * 3);
    
    // Base size and varied speeds
    this.size = Math.random() * 3 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
    
    // Upward float velocity
    this.velocityY = -(Math.random() * 0.8 + 0.2);
    // Sway velocity
    this.velocityX = Math.random() * 0.5 - 0.25;
    
    this.angle = Math.random() * Math.PI * 2;
    this.opacity = Math.random() * 0.6 + 0.2;
    
    // Elastic spring for bouncy mouse interaction
    this.targetX = this.x;
    this.targetY = this.y;
    this.spring = 0.02 + Math.random() * 0.02; // Reduced spring strength
    this.friction = 0.85 + Math.random() * 0.05; // More friction to kill bounce
    this.vx = 0;
    this.vy = 0;
  }

  update(mouse) {
    // Natural floating
    this.baseY += this.velocityY;
    this.baseX += this.velocityX + Math.sin(this.angle) * 0.5;
    this.angle += 0.02;
    
    // Reset if it floats off top
    if (this.baseY < -50) {
      this.reset(false);
    }
    
    // Wrap around sides
    if (this.baseX < -50) this.baseX = this.canvas.width + 50;
    if (this.baseX > this.canvas.width + 50) this.baseX = -50;

    // Mouse Interaction
    let targetX = this.baseX;
    let targetY = this.baseY;

    if (mouse.x != null) {
      let dx = mouse.x - this.baseX;
      let dy = mouse.y - this.baseY;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      // Scatter/bounce effect radius
      if (distance < mouse.radius) {
        // Push particles away from mouse
        let force = (mouse.radius - distance) / mouse.radius;
        // Extremely subtle bounce scatter multiplier
        let scatter = force * 12; 
        targetX = this.baseX - (dx / distance) * scatter;
        targetY = this.baseY - (dy / distance) * scatter;
      }
    }

    // Spring physics to return to target
    let ax = (targetX - this.x) * this.spring;
    let ay = (targetY - this.y) * this.spring;
    
    this.vx += ax;
    this.vy += ay;
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    // Mix of Cyan and Cyber-Pink for a cuter vibe
    const isSpecial = this.density > 20;
    const isPink = this.density < 8;
    
    ctx.fillStyle = isPink 
      ? `rgba(236, 72, 153, ${this.opacity})` // Pink
      : isSpecial 
        ? `rgba(34, 211, 238, ${this.opacity + 0.2})`  // Cyan Glow
        : `rgba(255, 253, 240, ${this.opacity})`; // White

    ctx.save();
    ctx.translate(this.x, this.y);
    
    if (this.shapeType === 0) {
      // Standard Circle
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.shapeType === 1) {
      // Cute Star ✦
      ctx.font = `${this.size * 4}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✦', 0, 0);
    } else {
      // Cute Cross +
      ctx.font = `${this.size * 4}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('+', 0, 0);
    }
    
    ctx.restore();
  }
}

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = Math.min(window.innerWidth / 5, 250); // Responsive dense count
    const mouse = { x: null, y: null, radius: 80 }; // Reduced radius

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
    
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
      }
    };

    // Draw constellation lines
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = dx * dx + dy * dy;
          
          // Max distance to draw a line
          if (distance < 12000) {
            let opacityValue = 1 - (distance / 12000);
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacityValue * 0.15})`; // Faint cyan web
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw connections first so shapes are on top
      connectParticles();
      
      particles.forEach(p => {
        p.update(mouse);
        p.draw(ctx);
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
      className="fixed inset-0 pointer-events-none z-0 opacity-100 mix-blend-screen"
    />
  );
};

export default ParticleField;

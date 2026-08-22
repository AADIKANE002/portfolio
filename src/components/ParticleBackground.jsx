import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ theme = 'space' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // GRID DATA PACKETS - Software Engineering Vibe
    const particleCount = Math.floor(window.innerWidth / 15);
    const particles = [];
    const colors = ['#0ea5e9', '#3b82f6', '#818cf8', '#22d3ee'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        // Move strictly orthogonal (grid lines)
        this.dir = Math.random() > 0.5 ? 'h' : 'v';
        this.speed = (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        if (this.dir === 'h') this.x += this.speed;
        else this.y += this.speed;

        if (this.x > width) this.x = 0; else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0; else if (this.y < 0) this.y = height;
        
        // Data packet 90 deg turns occasionally
        if (Math.random() < 0.005) {
           this.dir = this.dir === 'h' ? 'v' : 'h';
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const connectGrid = () => {
       const maxDistance = 100;
       for (let a = 0; a < particles.length; a++) {
         for (let b = a + 1; b < particles.length; b++) {
           const dx = Math.abs(particles[a].x - particles[b].x);
           const dy = Math.abs(particles[a].y - particles[b].y);
           // Only connect if they form a strict grid line (same x or same y) roughly
           if ((dx < 5 && dy < maxDistance) || (dy < 5 && dx < maxDistance)) {
             const dist = Math.max(dx, dy);
             ctx.save();
             ctx.beginPath();
             ctx.strokeStyle = '#0ea5e9';
             ctx.globalAlpha = (1 - dist / maxDistance) * 0.3;
             ctx.lineWidth = 1;
             ctx.moveTo(particles[a].x, particles[a].y);
             ctx.lineTo(particles[b].x, particles[b].y);
             ctx.stroke();
             ctx.restore();
           }
         }
       }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectGrid();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />;
};
export default ParticleBackground;

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

    let mouse = { x: null, y: null, radius: 140 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic Theme Color Palettes
    let colors = ['#06b6d4', '#3b82f6', '#818cf8', '#22d3ee'];
    if (theme === 'cyberpunk') {
      colors = ['#ec4899', '#f43f5e', '#a855f7', '#06b6d4'];
    } else if (theme === 'emerald') {
      colors = ['#10b981', '#059669', '#34d399', '#06b6d4'];
    } else if (theme === 'slate') {
      colors = ['#38bdf8', '#818cf8', '#60a5fa', '#c084fc'];
    }

    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.25;
        this.baseX = this.x;
        this.baseY = this.y;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce from edges
        if (this.x > width || this.x < 0) this.speedX *= -1;
        if (this.y > height || this.y < 0) this.speedY *= -1;

        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = (dx / distance) * force * 2;
            const directionY = (dy / distance) * force * 2;
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      const maxDistance = 110;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = particles[a].color;
            ctx.globalAlpha = (1 - distance / maxDistance) * 0.18;
            ctx.lineWidth = 0.8;
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
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <>
      {/* Dynamic Ambient Glowing Mesh / Aurora Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-glow delay-1000" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] animate-pulse-glow delay-2000" />
      </div>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
      />
    </>
  );
};

export default ParticleBackground;

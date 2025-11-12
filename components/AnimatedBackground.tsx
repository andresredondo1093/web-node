'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse position
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Crear grid de puntos
    const gridSpacing = 50;
    const gridDots: Array<{ x: number; y: number; baseX: number; baseY: number; vx: number; vy: number }> = [];
    
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        gridDots.push({ 
          x, 
          y, 
          baseX: x, 
          baseY: y, 
          vx: 0, 
          vy: 0 
        });
      }
    }

    // Crear partículas flotantes
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    // Animación
    const animate = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar puntos del grid con reacción al mouse
      gridDots.forEach((dot) => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          dot.vx += (dx / distance) * force * 0.5;
          dot.vy += (dy / distance) * force * 0.5;
        }

        // Aplicar velocidad y fricción
        dot.vx *= 0.95;
        dot.vy *= 0.95;
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Retornar a posición base
        dot.x += (dot.baseX - dot.x) * 0.05;
        dot.y += (dot.baseY - dot.y) * 0.05;

        // Dibujar punto con glow si está cerca del mouse
        const glowIntensity = distance < maxDistance ? (1 - distance / maxDistance) : 0;
        ctx.fillStyle = `rgba(0, 153, 204, ${0.3 + glowIntensity * 0.5})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5 + glowIntensity * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Dibujar líneas de conexión entre puntos cercanos
      for (let i = 0; i < gridDots.length; i++) {
        for (let j = i + 1; j < gridDots.length; j++) {
          const dx = gridDots[i].x - gridDots[j].x;
          const dy = gridDots[i].y - gridDots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < gridSpacing * 1.5) {
            const alpha = (1 - distance / (gridSpacing * 1.5)) * 0.1;
            ctx.strokeStyle = `rgba(0, 153, 204, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(gridDots[i].x, gridDots[i].y);
            ctx.lineTo(gridDots[j].x, gridDots[j].y);
            ctx.stroke();
          }
        }
      }

      // Actualizar y dibujar partículas flotantes
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Dibujar partícula con glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, 'rgba(0, 153, 204, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 153, 204, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, maxWidth: '100vw', maxHeight: '100vh' }}
    />
  );
}



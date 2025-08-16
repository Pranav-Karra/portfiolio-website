import React, { useEffect, useRef } from 'react';

export const DotsBackground = () => {
    const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Resize canvas to full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse position
    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Dot configuration
    let dotsConfig = { nb: 0, distance: 0, d_radius: 0, array: [] };
    const initConfig = () => {
      const w = window.innerWidth;
      if (w > 1600) dotsConfig = { nb: 600, distance: 70, d_radius: 300, array: [] };
      else if (w > 1300) dotsConfig = { nb: 575, distance: 60, d_radius: 280, array: [] };
      else if (w > 1100) dotsConfig = { nb: 500, distance: 55, d_radius: 250, array: [] };
      else if (w > 800)  dotsConfig = { nb: 300, distance: 0,  d_radius: 0,   array: [] };
      else if (w > 600)  dotsConfig = { nb: 200, distance: 0,  d_radius: 0,   array: [] };
      else                dotsConfig = { nb: 100, distance: 0,  d_radius: 0,   array: [] };
    };

    // Dot constructor
    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 1.5 + 0.5;
      this.color = Math.random() < 0.8 ? [81, 162, 233] : [255, 77, 90];
    }

    // Draw dot
    Dot.prototype.draw = function () {
      const dx = this.x - mousePos.x;
      const dy = this.y - mousePos.y;
      const dist = Math.hypot(dx, dy);
      const alpha = Math.max(0, 1 - dist / (window.innerWidth / 1.7));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${alpha})`;
      ctx.fill();
    };

    // Update dot position
    Dot.prototype.update = function () {
      if (this.x <= 0 || this.x >= canvas.width) this.vx = -this.vx;
      if (this.y <= 0 || this.y >= canvas.height) this.vy = -this.vy;
      this.x += this.vx;
      this.y += this.vy;
    };

    // Connect close dots
    const connectDots = () => {
      const { nb, distance, d_radius, array } = dotsConfig;
      for (let i = 0; i < nb; i++) {
        for (let j = i + 1; j < nb; j++) {
          const d1 = array[i];
          const d2 = array[j];
          const dx = d1.x - d2.x;
          const dy = d1.y - d2.y;
          if (Math.abs(dx) < distance && Math.abs(dy) < distance) {
            const mx = d1.x - mousePos.x;
            const my = d1.y - mousePos.y;
            if (Math.abs(mx) < d_radius && Math.abs(my) < d_radius) {
              const mDist = Math.hypot(mx, my);
              let fade = mDist / d_radius - 0.3;
              fade = Math.max(0, fade);
              ctx.strokeStyle = `rgba(81, 162, 233, ${1 - fade})`;
              ctx.lineWidth = 0.3;
              ctx.beginPath();
              ctx.moveTo(d1.x, d1.y);
              ctx.lineTo(d2.x, d2.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsConfig.array.forEach(dot => {
        dot.draw();
        dot.update();
      });
      connectDots();
      requestAnimationFrame(animate);
    };

    // Mouse handler
    const handleMouseMove = e => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      if (dotsConfig.array[0]) {
        dotsConfig.array[0].x = e.clientX;
        dotsConfig.array[0].y = e.clientY;
      }
    };

    // Init
    const init = () => {
      initConfig();
      dotsConfig.array = [];
      for (let i = 0; i < dotsConfig.nb; i++) {
        dotsConfig.array.push(new Dot());
      }
      dotsConfig.array[0].radius = 2;
      dotsConfig.array[0].color = [81, 162, 233];
      window.addEventListener('mousemove', handleMouseMove);
      animate();
    };

    init();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};

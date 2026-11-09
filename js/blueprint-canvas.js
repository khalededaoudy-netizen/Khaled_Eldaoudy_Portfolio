/**
 * blueprint-canvas.js
 * 
 * Lightweight HTML5 canvas circuit-trace animation for the Hero background.
 * Creates an authentic printed circuit board (PCB) trace network with flowing electric pulses.
 * Respects prefers-reduced-motion and pauses when scrolled out of viewport.
 */

export function initCircuitCanvas(canvasId = 'circuitCanvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Reduced motion check
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    canvas.style.display = 'none';
    return;
  }

  let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

  let isVisible = true;
  let animId = null;

  // Grid settings
  const GRID_SIZE = 40;
  const nodes = [];
  const traces = [];
  const pulses = [];

  // Generate PCB Nodes & Traces
  function generateNetwork() {
    nodes.length = 0;
    traces.length = 0;
    pulses.length = 0;

    const cols = Math.floor(width / GRID_SIZE);
    const rows = Math.floor(height / GRID_SIZE);

    // Pick a subset of points
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() < 0.12) {
          nodes.push({
            x: i * GRID_SIZE,
            y: j * GRID_SIZE,
            radius: Math.random() < 0.25 ? 3 : 1.5,
            color: Math.random() < 0.6 ? '#00FFB2' : '#22D3EE'
          });
        }
      }
    }

    // Connect close nodes with 90° or 45° traces
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = Math.abs(nodes[i].x - nodes[j].x);
        const dy = Math.abs(nodes[i].y - nodes[j].y);

        if ((dx === GRID_SIZE && dy === 0) || (dx === 0 && dy === GRID_SIZE) || (dx === GRID_SIZE && dy === GRID_SIZE)) {
          if (Math.random() < 0.45) {
            traces.push({
              x1: nodes[i].x,
              y1: nodes[i].y,
              x2: nodes[j].x,
              y2: nodes[j].y,
              color: 'rgba(34, 211, 238, 0.14)'
            });

            // Create pulses on some traces
            if (Math.random() < 0.3) {
              pulses.push({
                x1: nodes[i].x,
                y1: nodes[i].y,
                x2: nodes[j].x,
                y2: nodes[j].y,
                progress: Math.random(),
                speed: 0.004 + Math.random() * 0.008,
                color: Math.random() < 0.7 ? '#00FFB2' : '#22D3EE'
              });
            }
          }
        }
      }
    }
  }

  generateNetwork();

  // Resize handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
      generateNetwork();
    }, 200);
  });

  // Render loop
  function draw() {
    if (!isVisible) return;

    ctx.clearRect(0, 0, width, height);

    // Draw Traces
    ctx.lineWidth = 1;
    for (let i = 0; i < traces.length; i++) {
      const t = traces[i];
      ctx.strokeStyle = t.color;
      ctx.beginPath();
      ctx.moveTo(t.x1, t.y1);
      ctx.lineTo(t.x2, t.y2);
      ctx.stroke();
    }

    // Draw Nodes
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      ctx.fillStyle = n.color;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }

    // Draw & Update Electric Pulses
    for (let i = 0; i < pulses.length; i++) {
      const p = pulses[i];
      p.progress += p.speed;
      if (p.progress > 1) {
        p.progress = 0;
      }

      const px = p.x1 + (p.x2 - p.x1) * p.progress;
      const py = p.y1 + (p.y2 - p.y1) * p.progress;

      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    animId = requestAnimationFrame(draw);
  }

  // IntersectionObserver to pause off-screen
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) {
      if (!animId) animId = requestAnimationFrame(draw);
    } else {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    }
  }, { threshold: 0.1 });

  observer.observe(canvas);
  animId = requestAnimationFrame(draw);
}


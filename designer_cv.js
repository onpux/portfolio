// Fondo de burbujas blancas y doradas animadas
(function() {
  const canvas = document.getElementById('bubbles');
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }
  window.addEventListener('resize', resize);
  resize();
  // Burbujas
  const colors = ['rgba(255,255,255,0.18)','rgba(255,215,0,0.18)','rgba(255,255,255,0.28)','rgba(255,215,0,0.28)'];
  const bubbles = Array.from({length: 28}, () => ({
    x: Math.random() * W,
    y: H + Math.random() * H * 0.5,
    r: 18 + Math.random() * 32,
    d: 0.5 + Math.random() * 1.2,
    alpha: 0.12 + Math.random() * 0.18,
    color: colors[Math.floor(Math.random()*colors.length)]
  }));
  function animate() {
    ctx.clearRect(0, 0, W, H);
    for (const b of bubbles) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
      ctx.fillStyle = b.color;
      ctx.globalAlpha = b.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
      b.y -= b.d;
      if (b.y + b.r < 0) {
        b.x = Math.random() * W;
        b.y = H + b.r;
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

// Fondo de ciudad vectorial (SVG)
(function() {
  const city = document.getElementById('city-bg');
  city.innerHTML = `
  <svg width="100%" height="220" viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1440" height="220" fill="url(#bgNight)"/>
    <g>
      <rect x="0" y="120" width="80" height="100" fill="#2d1457"/>
      <rect x="90" y="150" width="60" height="70" fill="#3a206b"/>
      <rect x="160" y="100" width="100" height="120" fill="#2d1457"/>
      <rect x="270" y="170" width="50" height="50" fill="#3a206b"/>
      <rect x="330" y="130" width="80" height="90" fill="#2d1457"/>
      <rect x="420" y="160" width="60" height="60" fill="#3a206b"/>
      <rect x="490" y="110" width="110" height="110" fill="#2d1457"/>
      <rect x="610" y="170" width="50" height="50" fill="#3a206b"/>
      <rect x="670" y="140" width="90" height="80" fill="#2d1457"/>
      <rect x="770" y="160" width="60" height="60" fill="#3a206b"/>
      <rect x="840" y="120" width="100" height="100" fill="#2d1457"/>
      <rect x="950" y="170" width="50" height="50" fill="#3a206b"/>
      <rect x="1010" y="130" width="80" height="90" fill="#2d1457"/>
      <rect x="1100" y="160" width="60" height="60" fill="#3a206b"/>
      <rect x="1170" y="110" width="110" height="110" fill="#2d1457"/>
      <rect x="1290" y="170" width="50" height="50" fill="#3a206b"/>
      <rect x="1350" y="140" width="90" height="80" fill="#2d1457"/>
    </g>
    <defs>
      <linearGradient id="bgNight" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2d1457"/>
        <stop offset="1" stop-color="#1a093b"/>
      </linearGradient>
    </defs>
  </svg>
  `;
})();

// Animación de aparición para tarjetas
(function() {
  function revealCards() {
    const cards = document.querySelectorAll('.cert-card');
    let delay = 0;
    for (const card of cards) {
      const windowHeight = window.innerHeight;
      const elementTop = card.getBoundingClientRect().top;
      const elementVisible = 80;
      if (elementTop < windowHeight - elementVisible) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transitionDelay = delay + 'ms';
        delay += 120;
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transitionDelay = '0ms';
      }
    }
  }
  window.addEventListener('scroll', revealCards);
  window.addEventListener('DOMContentLoaded', revealCards);
})();

// Efecto hover resplandor en links
(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.cert-links a');
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.boxShadow = '0 0 16px 4px #ffd700, 0 0 8px #fff';
        link.style.background = 'linear-gradient(90deg, #fffbe6 0%, #ffd700 100%)';
        link.style.color = '#1a093b';
      });
      link.addEventListener('mouseout', () => {
        link.style.boxShadow = '';
        link.style.background = '';
        link.style.color = '';
      });
    });
  });
})();

function buildNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'drugs.html', label: 'Drugs' },
    { href: 'social.html', label: 'Social Media' },
    { href: 'games.html', label: 'Games' },
    { href: 'deaddiction.html', label: 'De-Addiction' },
    { href: 'recovery.html', label: 'Recovery' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact', cta: true },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.cta ? 'nav-cta' : ''}${p.href === activePage ? ' active' : ''}">${p.label}</a></li>`
  ).join('');
  document.getElementById('nav-placeholder').innerHTML = `
    <nav id="navbar">
      <a href="index.html" class="nav-logo">Teen <span>Enslavement</span></a>
      <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><i class="fas fa-bars"></i></button>
      <ul class="nav-links" id="nav-menu">${links}</ul>
    </nav>`;
}

function buildFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-logo">Teen <span>Enslavement</span></div>
      <div class="footer-sub">Awareness on Addiction — Every recovery begins with one step.</div>
      <div class="footer-links">
        <a href="index.html">Home</a><a href="drugs.html">Drugs</a>
        <a href="social.html">Social Media</a><a href="games.html">Games</a>
        <a href="deaddiction.html">De-Addiction</a><a href="recovery.html">Recovery</a>
        <a href="about.html">About</a><a href="contact.html">Contact</a>
      </div>
      <div class="footer-copy">© 2024 Teen Enslavement · SRKR Engineering College · Batch 11</div>
    </footer>`;
}

function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('open');
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.background = window.scrollY > 40 ? 'rgba(10,10,15,0.99)' : 'rgba(10,10,15,0.92)';
});

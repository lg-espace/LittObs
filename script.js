/* =========================================================================
   LITTOBS — Intelligence d'interface & Animations dynamiques
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Menu Mobile (Burger Interaction)
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.classList.toggle('active');
    });

    // Fermeture automatique du menu mobile lors du clic sur un lien d'ancrage
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('active');
      });
    });
  }

  // 2. Gestion transparente/opaque de la barre de navigation au défilement
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // 3. Scroll Reveal (Apparition fluide des sections au défilement)
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // L'animation ne se joue qu'une fois
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Solution de secours si le navigateur est très ancien
    revealElements.forEach(element => element.classList.add('visible'));
  }
});
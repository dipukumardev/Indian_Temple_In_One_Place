import './style.css';

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Indian Temples website loaded');

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const isMenuToggle = target.closest('.menu-toggle');
    const isNavMenu = target.closest('.nav-menu');

    if (!isMenuToggle && !isNavMenu && navMenu?.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (const link of anchorLinks) {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();

      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href === '#' || !href) return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });

        // Close mobile menu after clicking
        if (navMenu?.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      }
    });
  }

  // Set current year in footer copyright
  const yearElement = document.querySelector('.current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
});

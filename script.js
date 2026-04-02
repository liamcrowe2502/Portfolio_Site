const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.site-nav');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

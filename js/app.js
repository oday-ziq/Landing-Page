// Build the navigation menu dynamically
const buildNavigation = () => {
  const sections = document.querySelectorAll('section');
  const navList = document.getElementById('navbar__list');
  const fragment = document.createDocumentFragment();

  sections.forEach((section) => {
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    fragment.appendChild(navItem);
  });

  navList.appendChild(fragment);
};

// Highlight the section in the viewport
const highlightSection = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu__link');

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -50 && rect.top < 300) {
      sections.forEach((sec) => sec.classList.remove('your-active-class'));
      navLinks.forEach((link) => link.classList.remove('active'));
      section.classList.add('your-active-class');
      navLinks[index].classList.add('active');
    }
  });
};

// Smooth scroll to section
const scrollToSection = () => {
  const navLinks = document.querySelectorAll('.menu__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
  buildNavigation();
  scrollToSection();
  document.addEventListener('scroll', highlightSection);
});

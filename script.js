// Smooth Scroll Navigation
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Hero Text Animation
const heroHeading = document.querySelector('.hero h1');
if (heroHeading) {
  heroHeading.style.opacity = 0;
  heroHeading.style.transform = 'translateY(20px)';
  setTimeout(() => {
    heroHeading.style.transition = 'all 1s ease';
    heroHeading.style.opacity = 1;
    heroHeading.style.transform = 'translateY(0)';
  }, 300);
}

// Scroll Animation for Cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Add CSS for animation effect dynamically
const style = document.createElement('style');
style.textContent = `
  .card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  .card.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Contact Form Alert
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  });
}

// Scroll Observer for .animate-on-scroll elements
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.animate-on-scroll');
  targets.forEach(target => observer.observe(target));
});

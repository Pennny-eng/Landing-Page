document.querySelectorAll('a[href^="#"]').forEach(link => { link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {
    const faqItem = q.parentElement;  // parent div.faq-item
    faqItem.classList.toggle('active');
  });
});
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.querySelector('.footer-newsletter').addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.querySelector('input').value;
  if(!email.includes('@')){
    alert('Please enter a valid email!');
  } else {
    alert('Thanks for subscribing! 🎉');
    e.target.reset();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // Generate random sparkles
  const heroBackground = document.querySelector('.hero-background');
  const sparkleCount = 12;
  
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    heroBackground.appendChild(sparkle);
  }
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // In a real application, you would send this to your backend
        alert(`Thank you for subscribing with ${email}! You'll receive updates soon.`);
        emailInput.value = '';
      }
    });
  }
});
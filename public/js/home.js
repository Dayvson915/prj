document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="https"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      
      // Optional: Add a subtle animation before navigating
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        window.location.href = targetUrl;
      }, 200);
    });
  });

  // Simple hover effects
  const hoverElements = document.querySelectorAll('.nav-links a, .footer-links a, .feature');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'translateY(-3px)';
      el.style.transition = 'transform 0.2s ease';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translateY(0)';
    });
  });
});
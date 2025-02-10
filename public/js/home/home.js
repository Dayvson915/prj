document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for external links
  document.querySelectorAll('a[href^="https"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      
      // Subtle click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        window.location.href = targetUrl;
      }, 200);
    });
  });

  // Hover effects
  const hoverElements = document.querySelectorAll('.feature-card, .step, .footer-links a, .footer-social a');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'translateY(-3px)';
      el.style.transition = 'transform 0.2s ease';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translateY(0)';
    });
  });

  // Enhanced section hover interactions
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'scale(1.01)';
      section.style.zIndex = '10';
    });
    
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'scale(1)';
      section.style.zIndex = '1';
    });
  });
});
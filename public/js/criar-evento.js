document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('scrim-form');
    const eventTypeInputs = document.querySelectorAll('input[name="event-type"]');
    const scrimFields = document.getElementById('scrim-specific-fields');
    const tournamentFields = document.getElementById('tournament-specific-fields');
    const priceType = document.getElementById('price-type');
    const priceInput = document.getElementById('scrim-price');
  
    // Toggle between scrim and tournament fields
    eventTypeInputs.forEach(input => {
      input.addEventListener('change', function() {
        if (this.value === 'scrim') {
          scrimFields.classList.remove('hidden');
          tournamentFields.classList.add('hidden');
        } else {
          scrimFields.classList.add('hidden');
          tournamentFields.classList.remove('hidden');
        }
      });
    });
  
    // Toggle price input based on price type
    priceType.addEventListener('change', function() {
      priceInput.disabled = this.value === 'free';
      if (this.value === 'free') {
        priceInput.value = '';
      }
    });
  
    // Form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const eventType = document.querySelector('input[name="event-type"]:checked').value;
      
      // Here you would typically send the data to your server
      alert(`${eventType === 'scrim' ? 'Scrim' : 'Torneio'} criado com sucesso!`);
      window.location.href = `/${eventType}s.html`;
    });
  });
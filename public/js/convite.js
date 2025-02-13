document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('player-search');
    const playersTable = document.getElementById('players-tbody');
    const inviteButtons = document.querySelectorAll('.invite-btn');
  
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const rows = playersTable.getElementsByTagName('tr');
  
      Array.from(rows).forEach(row => {
        const playerName = row.querySelector('.player-name').textContent.toLowerCase();
        const playerTag = row.querySelector('.player-tag').textContent.toLowerCase();
  
        if (playerName.includes(searchTerm) || playerTag.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  
    // Invite button functionality
    inviteButtons.forEach(button => {
      button.addEventListener('click', function() {
        const playerName = this.closest('tr').querySelector('.player-name').textContent;
        
        this.textContent = 'Convidado';
        this.classList.add('invited');
        this.disabled = true;
  
        // Simulate invite notification
        alert(`Convite enviado para ${playerName}`);
      });
    });
  });
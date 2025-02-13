document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const teamCards = document.querySelectorAll('.team-card');
      
      teamCards.forEach(card => {
        const teamName = card.querySelector('.team-info h3').textContent.toLowerCase();
        if (teamName.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    // Create team button functionality
    const createTeamButton = document.querySelector('.create-team');
    createTeamButton.addEventListener('click', function() {
      window.location.href = '/create-team.html';
    });
  
    // Manage team button functionality
    const manageTeamButtons = document.querySelectorAll('.manage-team-btn');
    manageTeamButtons.forEach(button => {
      button.addEventListener('click', function() {
        const teamName = this.closest('.team-card').querySelector('.team-info h3').textContent;
        window.location.href = '/invite-players.html';
      });
    });
  
    // Join team button functionality
    const joinTeamButtons = document.querySelectorAll('.join-team-btn');
    joinTeamButtons.forEach(button => {
      button.addEventListener('click', function() {
        const teamName = this.closest('.team-card').querySelector('.team-info h3').textContent;
        alert(`Solicitação enviada para entrar no time ${teamName}`);
        this.textContent = 'Solicitação Enviada';
        this.disabled = true;
        this.style.opacity = '0.7';
      });
    });
  });
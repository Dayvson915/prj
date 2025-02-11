document.addEventListener('DOMContentLoaded', function() {
  // Adiciona funcionalidade aos botões de participar
  const joinButtons = document.querySelectorAll('.join-button');
  joinButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tournamentName = this.closest('.tournament-card')
        .querySelector('.tournament-header h3').textContent;
      alert(`Inscrição realizada para o torneio: ${tournamentName}`);
    });
  });

  // Adiciona funcionalidade à barra de pesquisa
  const searchInput = document.querySelector('.search-box input');
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const tournamentCards = document.querySelectorAll('.tournament-card');
    
    tournamentCards.forEach(card => {
      const tournamentName = card.querySelector('.tournament-header h3')
        .textContent.toLowerCase();
      if (tournamentName.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // Adiciona funcionalidade ao botão de notificações
  const notificationsButton = document.querySelector('.notifications');
  notificationsButton.addEventListener('click', function() {
    alert('Você tem 3 notificações não lidas');
  });

  // Adiciona funcionalidade ao botão de criar torneio
  const createTournamentButton = document.querySelector('.create-tournament');
  createTournamentButton.addEventListener('click', function() {
    alert('Em breve: Formulário para criar novo torneio!');
  });

  // Adiciona animação suave ao hover dos cards
  const tournamentCards = document.querySelectorAll('.tournament-card');
  tournamentCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
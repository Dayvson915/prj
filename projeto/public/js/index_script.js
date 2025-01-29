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

  // Login System
  const loginButton = document.querySelector('.login-button');
  const registerButton = document.querySelector('.register-button');
  const loginModal = document.querySelector('.login-modal');
  const registerModal = document.querySelector('.register-modal');
  const closeButtons = document.querySelectorAll('.close-modal');
  const switchToRegister = document.querySelector('.switch-to-register');
  const switchToLogin = document.querySelector('.switch-to-login');

  // Show/Hide Modals
  function showModal(modal) {
    modal.classList.add('show');
  }

  function hideModal(modal) {
    modal.classList.remove('show');
  }

  loginButton.addEventListener('click', () => showModal(loginModal));
  registerButton.addEventListener('click', () => showModal(registerModal));

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      hideModal(loginModal);
      hideModal(registerModal);
    });
  });

  // Switch between login and register
  switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal(loginModal);
    showModal(registerModal);
  });

  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal(registerModal);
    showModal(loginModal);
  });

  // Handle form submissions
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    // Simulate login
    console.log('Login attempt:', { email, password });
    hideModal(loginModal);
    toggleUserState(true);
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#register-name').value;
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    
    // Simulate registration
    console.log('Register attempt:', { name, email, password });
    hideModal(registerModal);
    toggleUserState(true);
  });

  function toggleUserState(isLoggedIn) {
    const loggedOutSection = document.querySelector('.user-logged-out');
    const loggedInSection = document.querySelector('.user-logged-in');
    
    if (isLoggedIn) {
      loggedOutSection.classList.add('hidden');
      loggedInSection.classList.remove('hidden');
    } else {
      loggedOutSection.classList.remove('hidden');
      loggedInSection.classList.add('hidden');
    }
  }

  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) hideModal(loginModal);
    if (e.target === registerModal) hideModal(registerModal);
  });
});
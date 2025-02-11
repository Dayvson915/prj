document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.add('hidden'));
  
        // Add active class to clicked button and show corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.remove('hidden');
      });
    });
  
    // Edit profile button functionality
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    editProfileBtn.addEventListener('click', () => {
      alert('Funcionalidade de edição de perfil em desenvolvimento!');
    });
  
    // Edit avatar button functionality
    const editAvatarBtn = document.querySelector('.edit-avatar');
    editAvatarBtn.addEventListener('click', () => {
      alert('Funcionalidade de alteração de avatar em desenvolvimento!');
    });
  
    // Settings form submission
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
      settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Configurações salvas com sucesso!');
      });
    }
  
    // Logout button functionality
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja sair?')) {
          window.location.href = '/index.html';
        }
      });
    }
  
    // Scrim confirmation buttons
    const scrimActions = document.querySelectorAll('.scrim-action');
    scrimActions.forEach(button => {
      button.addEventListener('click', function() {
        this.textContent = 'Presença Confirmada';
        this.style.backgroundColor = '#10b981';
        this.disabled = true;
      });
    });
  });
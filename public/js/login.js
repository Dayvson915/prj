// Função para login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    if (username === '' || password === '') {
      errorMessage.textContent = 'Por favor, preencha todos os campos.';
    } else {
      errorMessage.textContent = '';
  
      fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Usuário ou senha inválidos.');
          }
          return response.json();
        })
        .then(data => {
          alert(data.message);
          if (data.message === 'Usuário logado com sucesso!') {
            window.location.href = '/index';
          }
        })
        .catch(error => {
          errorMessage.textContent = error.message;
        });
    }
  });
  
  // Função para registro
  document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const errorMessage = document.getElementById('reg-error-message');
  
    if (username === '' || password === '') {
      errorMessage.textContent = 'Por favor, preencha todos os campos.';
    } else {
      errorMessage.textContent = '';
  
      fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
        })
        .catch(error => {
          errorMessage.textContent = 'Erro ao registrar: ' + error.message;
        });
    }
  });
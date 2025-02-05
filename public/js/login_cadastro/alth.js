document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.acessar_form');
    const cadastroForm = document.querySelector('.cadastro_form');
    
    cadastroForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.querySelector('#cadastro-nome').value;
        const email = document.querySelector('#cadastro-email').value;
        const senha = document.querySelector('#cadastro-senha').value;
        
        const response = await fetch('/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        });
        
        const data = await response.json();
        if (data.mensagem) {
            alert(data.mensagem);
            window.location.href = '/login';
        } else {
            alert(data.erro);
        }
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.querySelector('#login-nome').value;
        const senha = document.querySelector('#login-senha').value;
        
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, senha })
        });
        
        const data = await response.json();
        if (response.ok) {
            window.location.href = data.redirect;
        } else {
            alert(data.erro);
        }
    });
});
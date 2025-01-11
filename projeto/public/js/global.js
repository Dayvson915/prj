document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', function () {
        document.querySelector('.nav-item.active').classList.remove('active');
        this.classList.add('active');

        document.querySelector('.content-section.active').classList.remove('active');
        const section = document.querySelector(this.getAttribute('href'));
        section.classList.add('active');
    });
});

function checkLogin() {
    const isLoggedIn = false; // Simula o estado de login
    if (!isLoggedIn) {
        document.getElementById('loginModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function login(event) {
    event.preventDefault();
    alert('Login efetuado com sucesso!');
    closeModal();
}

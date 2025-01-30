document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Remover a classe "active" da navegação
        document.querySelector('.nav-item.active').classList.remove('active');
        this.classList.add('active');

        // Esconder todas as seções
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar a seção correspondente
        const section = document.querySelector(this.getAttribute('href'));
        section.classList.add('active');
    });
});

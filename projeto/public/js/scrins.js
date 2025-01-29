document.addEventListener('DOMContentLoaded', () => {
    const teamPhotoInput = document.getElementById('team-photo');
    const teamPhotoUpload = document.querySelector('.team-photo-upload');
    const scrimeForm = document.getElementById('scrims-form');
    const loginButton = document.querySelector('.login-button');
    const registerButton = document.querySelector('.register-button');
    const userLoggedOut = document.querySelector('.user-logged-out');
    const userLoggedIn = document.querySelector('.user-logged-in');

    // Team Photo Upload
    teamPhotoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                teamPhotoUpload.style.backgroundImage = `url(${event.target.result})`;
                teamPhotoUpload.classList.add('has-image');
            };
            reader.readAsDataURL(file);
        }
    });

    // Scrim Form Submission
    scrimeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            teamPhoto: document.getElementById('team-photo').files[0],
            teamName: document.getElementById('team-name').value,
            tournamentDate: document.getElementById('tournament-date').value,
            tournamentTime: document.getElementById('tournament-time').value,
            roomId: document.getElementById('room-id').value,
            maxKills: document.getElementById('max-kills').value
        };

        console.log('Torneio criado:', formData);
        // TODO: Add backend submission logic
    });

    // Login/Register Buttons
    loginButton.addEventListener('click', () => {
        userLoggedOut.classList.add('hidden');
        userLoggedIn.classList.remove('hidden');
    });

    registerButton.addEventListener('click', () => {
        // TODO: Implement registration logic
        alert('Registro de usuário será implementado');
    });
});
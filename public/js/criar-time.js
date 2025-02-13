document.addEventListener('DOMContentLoaded', function() {
    const teamForm = document.getElementById('team-form');
    const teamPhotoUpload = document.querySelector('.team-photo-upload');
    const fileInput = document.getElementById('team-photo');
    const teamNameInput = document.getElementById('team-name');
    const characterCount = document.querySelector('.character-count');
    const photoPreview = document.querySelector('.team-photo-preview');
  
    // Photo upload functionality
    teamPhotoUpload.addEventListener('click', () => {
      fileInput.click();
    });
  
    fileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          photoPreview.innerHTML = `
            <img src="${e.target.result}" alt="Team photo preview" style="width: 100%; height: 100%; object-fit: cover;">
          `;
        }
        reader.readAsDataURL(file);
      }
    });
  
    // Character count update
    teamNameInput.addEventListener('input', function() {
      const currentLength = this.value.length;
      characterCount.textContent = `${currentLength}/30`;
    });
  
    // Form submission
    teamForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData();
      formData.append('teamName', teamNameInput.value);
      formData.append('teamPhoto', fileInput.files[0]);
  
      // Redirect to invite players page after team creation
      window.location.href = '/invite-players.html';
    });
  });
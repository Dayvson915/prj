// Função para navegar entre as seções (Home, Scrims, Perfil)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
      // Remove a classe 'active' de todos os itens
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
  
      // Esconde todas as seções
      document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
  
      // Exibe a seção correspondente
      const sectionId = item.getAttribute('href').substring(1);
      document.getElementById(sectionId).classList.add('active');
    });
  });
  
  // Função para abrir e fechar o modal de login
  function closeModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  function openModal() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  // Função de login (apenas um exemplo simples)
  function checkLogin() {
    alert('Função de login não implementada!');
  }
  
// document.addEventListener("DOMContentLoaded", function () {
//     const navItems = document.querySelectorAll(".nav-item");
//     const sections = document.querySelectorAll(".content-section");

//     navItems.forEach((item, index) => {
//         item.addEventListener("click", () => {
//             navItems.forEach(nav => nav.classList.remove("active"));
//             item.classList.add("active");

//             sections.forEach(section => section.classList.remove("active"));
//             sections[index].classList.add("active");
//         });
//     });

//     sections[0].classList.add("active");
// });


// function openModal() {
//     document.getElementById("loginModal").style.display = "block";
// }


// function closeModal() {
//     document.getElementById("loginModal").style.display = "none";
// }


// function checkLogin() {
//     const isLoggedIn = false;
//     if (!isLoggedIn) {
//         openModal();
//     } else {

//         alert("Acesso permitido!");
//     }
// }


// window.onclick = function (event) {
//     const modal = document.getElementById("loginModal");
//     if (event.target === modal) {
//         closeModal();
//     }
// }


// function login(event) {
//     event.preventDefault();
//     alert("Login realizado com sucesso!");
//     closeModal();
// }

// Sélectionnez l'élément avec la classe ".hamburger_menu" et affectez-le à la variable "hamburgermenu"
const hamburgermenu = document.querySelector(".hamburger_menu"); 

// Sélectionnez l'élément avec la classe ".navbar__link" et affectez-le à la variable "navbarlink"
const navbarlink = document.querySelector(".navbar__link");

// Ajoutez un "event listener" à l'élément "hamburgermenu" pour détecter les clics
hamburgermenu.addEventListener('click',() => {
  // À chaque clic, alternez la classe "mobile-menu" de l'élément "navbarlink"
  navbarlink.classList.toggle('mobile-menu');
});

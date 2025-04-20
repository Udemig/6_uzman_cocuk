// Html'den elemanları çağır
const navMenu = document.querySelector("#nav-menu");
const closeBtn = document.querySelector("#close-btn");
const menuBtn = document.querySelector("#menu-btn");

// Document içerisindeki tıklanma olayını izle

document.addEventListener("click", (e) => {
  // Eğer menu butonuna tıklandıysa
  if (e.target.classList.contains("fa-bars")) {
    // Nav menuye class ekle
    navMenu.classList.add("show-menu");
  }

  // Eğer close butonuna tıklandıysa
  if (e.target.classList.contains("fa-times")) {
    // Nav menuden class çıkar
    navMenu.classList.remove("show-menu");
  }
});

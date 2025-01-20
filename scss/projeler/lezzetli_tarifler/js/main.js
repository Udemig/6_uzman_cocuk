// Scroll olduğunda header'ın arka planını değiştir
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else {
    header.style.backgroundColor = "white";
  }
});

// Sayfa yüklendiğinde yumuşak bir geçiş efekti
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = "0";
  heroContent.style.transform = "translateY(20px)";

  setTimeout(() => {
    heroContent.style.transition = "all 1s ease";
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
  }, 100);
});

// Mobil menü işlemleri
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
  body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
});

// Menü linklerine tıklandığında menüyü kapat
const menuLinks = document.querySelectorAll(".nav-links a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active");
    navLinks.classList.remove("active");
    body.style.overflow = "";
  });
});

// Sayfa scroll olduğunda menüyü kapat
window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("active")) {
    mobileMenuBtn.classList.remove("active");
    navLinks.classList.remove("active");
    body.style.overflow = "";
  }
});

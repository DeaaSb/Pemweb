// Form submission script (for demonstration)
// Form submission script (for demonstration)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pesan Anda telah dikirim!');
});
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".elegant-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

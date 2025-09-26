// For future interactive features like testimonials carousel or contact form enhancements
console.log("Website loaded successfully.");
console.log("Website loaded successfully.");

// Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Add click event to each service card
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = card.dataset.img;
  });
});

// Close modal when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
const images = document.querySelectorAll('.scroll-img');
  function revealImages() {
    images.forEach(img => {
      const windowHeight = window.innerHeight;
      const imgTop = img.getBoundingClientRect().top;
      if (imgTop < windowHeight - 100) {
        img.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealImages);
  revealImages();
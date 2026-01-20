$('.js-slider').slick();


const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // Ferme les autres sections
    document.querySelectorAll(".accordion-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Ouvre / ferme la section cliquée
    item.classList.toggle("active");
  });
});
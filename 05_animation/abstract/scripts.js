const btn = document.getElementById("btn");
const sky = document.querySelector(".js-card6");

btn.addEventListener("click", () => {

  // BOUCLE FOR : crée 5 étoiles
  for (let i = 1; i <= 5; i++) {

    const star = document.createElement("div");
    star.classList.add("star");
    star.textContent = "⭐";

    star.style.left = Math.random() * 95 + "%";

    sky.appendChild(star);

    // Supprime l’étoile après l’animation
    setTimeout(() => {
      star.remove();
    }, 3000);
  }
});

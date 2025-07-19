document.addEventListener("DOMContentLoaded", function () {
  const contenedorResenas = document.querySelector(".grid-resenas");

  fetch("https://jsonplaceholder.typicode.com/comments?_limit=4")
    .then((response) => response.json())
    .then((data) => {
      contenedorResenas.innerHTML = ""; // Limpia las reseñas estáticas

      data.forEach((comentario) => {
        const div = document.createElement("div");
        div.classList.add("resena");
        div.textContent = `💬 "${comentario.body}"`;
        contenedorResenas.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error al cargar las reseñas:", error);
      contenedorResenas.innerHTML = "<p>No se pudieron cargar las reseñas.</p>";
    });
});

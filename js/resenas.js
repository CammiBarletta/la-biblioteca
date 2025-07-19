document.addEventListener("DOMContentLoaded", function () {
  const contenedorResenas = document.querySelector(".grid-resenas");

  fetch("https://dummyjson.com/comments?limit=4")
    .then((response) => response.json())
    .then((data) => {
      contenedorResenas.innerHTML = "";

      data.comments.forEach((comentario) => {
        const div = document.createElement("div");
        div.classList.add("resena");
        div.textContent = `💬 "${comentario.body}" — ${comentario.user.username}`;
        contenedorResenas.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error al cargar las reseñas:", error);
      contenedorResenas.innerHTML = "<p>No se pudieron cargar las reseñas.</p>";
    });
});

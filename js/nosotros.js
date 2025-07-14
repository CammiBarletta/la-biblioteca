document.addEventListener('DOMContentLoaded', function() {
  const contador = document.getElementById('contador-carrito');
  if (contador) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contador.textContent = carrito.length;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Asignar botón de pagar si existe
  const btnPagar = document.getElementById('btnPagar');
  if (btnPagar) {
    btnPagar.addEventListener('click', pagar);
  }

  // Mostrar el contador del carrito
  const contador = document.getElementById('contador-carrito');
  if (contador) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contador.textContent = carrito.length;
  }

  // Asignar funcionalidad a botones "comprar"
  const botonesComprar = document.getElementsByClassName('comprar');
  for (let i = 0; i < botonesComprar.length; i++) {
    botonesComprar[i].addEventListener('click', agregarProducto);
  }

  // Asignar botón de vaciar carrito si existe
  const btnVaciar = document.getElementById('vaciar-carrito');
  if (btnVaciar) {
    btnVaciar.addEventListener('click', function () {
      localStorage.removeItem('carrito');
      cargarCarrito();
    });
  }

  // Mostrar el contenido del carrito si hay sección para eso
  cargarCarrito();
});

// Función para agregar producto al carrito
function agregarProducto(event) {
  const producto = {
    id: event.target.getAttribute('data-id'),
    nombre: event.target.getAttribute('data-nombre'),
    precio: event.target.getAttribute('data-precio')
  };

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  cargarCarrito();
}

// Función para mostrar el carrito y el total
function cargarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalSpan = document.getElementById('total-carrito');

  if (!lista || !totalSpan) return;

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  lista.innerHTML = '';

  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    const producto = carrito[i];
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${parseFloat(producto.precio).toFixed(3)}`;
    lista.appendChild(li);
    total += parseFloat(producto.precio) || 0;
  }

  totalSpan.textContent = total.toFixed(3);
}

// Función para pagar y redirigir
function pagar() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += parseFloat(carrito[i].precio) || 0;
  }

  sessionStorage.setItem('productos', JSON.stringify(carrito));
  sessionStorage.setItem('total', total.toFixed(3));

  window.location.href = "compra.html";
}

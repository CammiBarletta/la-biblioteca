document.addEventListener("DOMContentLoaded", function () {

   const productos = JSON.parse(sessionStorage.getItem('productos')) || [];
    const total = sessionStorage.getItem('total') || 0;
    const totalNumerico = parseFloat(total) || 0;
    const totalFormateado = totalNumerico.toFixed(3);

    const resumenDiv = document.getElementById("detalle");

    let resumenTextoHTML = "<h3>Resumen de tu Compra:</h3><br>";

    for (let i = 0; i < productos.length; i++) {
        const productoActual = productos[i]; 
        resumenTextoHTML += `${productoActual.nombre}: $${parseFloat(productoActual.precio).toFixed(3)}<br>`;
    }

    resumenTextoHTML += `<br><strong>Total a pagar: $${totalFormateado}</strong>`;
    resumenDiv.innerHTML = resumenTextoHTML;

    function enviarFormulario(event) {
    const nombreContacto = document.getElementById('nombre').value.trim();
    const emailContacto = document.getElementById('contactoEmail').value.trim();
    const telefonoContacto = document.getElementById('telefono').value.trim();

    if (!nombreContacto || !emailContacto || !telefonoContacto) {
        alert("Por favor, completa todos los campos de contacto antes de enviar.");
        event.preventDefault(); // Detenemos envío si falta info
        return;
    }
    let detallesCarritoParaEnvio = '';
    for (let i = 0; i < productos.length; i++) {
        const productoActual = productos[i];
        detallesCarritoParaEnvio += `${productoActual.nombre} - $${parseFloat(productoActual.precio).toFixed(3)}\n`;
    }

        document.getElementById('carritoData').value = detallesCarritoParaEnvio;
        document.getElementById('totalCarrito').value = `$${totalFormateado}`;

        document.getElementById('carritoData').value = detallesCarritoParaEnvio;
        document.getElementById('totalCarrito').value = `$${totalFormateado}`;
        alert("¡Gracias por tu compra! Te contactaremos pronto 📚✨");
        document.getElementById('formulario').submit();
    }

    const botonEnviar = document.getElementById('botonEnviar');
    if (botonEnviar) {
        botonEnviar.addEventListener('click', enviarFormulario);
    } else {
        console.warn("ADVERTENCIA: No se encontró el botón con ID 'botonEnviar'.");
    }
}); 
document.addEventListener('DOMContentLoaded', function() {
  const contador = document.getElementById('contador-carrito');
  if (contador) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contador.textContent = carrito.length;
  }
});
boton.classList.add("boton-agregado");
setTimeout(() => {
  boton.classList.remove("boton-agregado");
}, 1000);



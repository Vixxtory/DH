// cambiar de tema segun la eleccion del usuario
function cambiarTema() {
  const oscuro = document.body.classList.toggle('dark');

  const boton = document.querySelector('.theme button');

  if (oscuro) {
    boton.innerText = "Cambiar tema 🌞";
  } else {
    boton.innerText = "Cambiar tema 🌛";
  }
};

// renderizado dinamico
// PLANTILLA DE TARJETAS
/* <div class="item">
      <img src="./imagenes/tiger.jpg">
      <h2>El tigre</h2>
      <p>
        El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae)
        pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.
      </p>
    </div> */

/*
`<div class="item">
      <img src="${url}">
      <h2>${titulo}</h2>
      <p>
       ${descripcion}
      </p>
    </div>`
     */

console.log(listadoFelinos);

function renderizarTarjetas(data) {
  const contenedor = document.querySelector('.contendor');
  //replicamos las tarjetas en el contenedor

}
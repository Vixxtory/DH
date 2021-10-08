/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Por favor, ingrese su nombre: ");

  let anio = prompt("Por favor, ingrese su año de nacimiento: ");
  datosPersona.edad = (2021 - anio);

  datosPersona.ciudad = prompt("Por favor, ingrese el nombre de su ciudad: ");

  if(confirm("¿Está interesado en JavaScript?")) {
    datosPersona.interesPorJs = "Si esta interesado";
  } else {
    datosPersona.interesPorJs = "No esta interesado";
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    const parrafo = document.createElement('p');
    const nombreUsuario = document.querySelector('#nombre');
    const edadUsuario = document.querySelector('#edad');
    const ciudadUsuario = document.querySelector('#ciudad');
    const interesJS = document.querySelector('#javascript');

    nombreUsuario.appendChild(parrafo);
    nombreUsuario.innerText = datosPersona.nombre;

    edadUsuario.appendChild(parrafo);
    edadUsuario.innerText = datosPersona.edad;

    ciudadUsuario.appendChild(parrafo);
    ciudadUsuario.innerText = datosPersona.ciudad;

    interesJS.appendChild(parrafo);
    interesJS.innerText = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector('#fila');

  if(fila.innerHTML == ''){
    for(let i = 0; listado.length; i++) {
      fila.innerHTML += `<div class="caja">
      <img src="${listado[i].imgUrl}" alt="${listado[i].lenguajes}">
      <p class="lenguajes">${listado[i].lenguajes}</p>
      <p class="bimestre>${listado[i].bimestre}</p>  
      `
    }
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const tema = document.querySelector('#sitio').classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.querySelector('#sobre-mi');

document.addEventListener('keypress', function(e) {
  if(e.key == 'f') {
    sobreMi.removeAttribute('class');
  }
})
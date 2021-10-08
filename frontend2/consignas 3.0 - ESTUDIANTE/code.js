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
    datosPersona.nombre = prompt('Ingrese su nombre');
    const añoDeNacimiento = parseInt(prompt('Ingrese su año de nacimiento'));
    datosPersona.edad = 2021 - añoDeNacimiento;
    datosPersona.ciudad = prompt('Ingrese ciudad de nacimiento');
    if(confirm("¿Está interesado en JavaScript?")) {
      datosPersona.interesPorJs = "Esta interesado";
    } else {
      datosPersona.interesPorJs = "No esta interesado";
    }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.getElementById('nombre');
  nombre.innerText = datosPersona.nombre;
  let edad = document.getElementById('edad');
  edad.innerText = datosPersona.edad;
  let ciudad = document.getElementById('ciudad');
  ciudad.innerText = datosPersona.ciudad;
  let javascript = document.getElementById('javascript');
  javascript.innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const contenedor = document.getElementById('fila');
  
  if(contenedor.innerHTML == ''){
    
    for (let iterador of listado) {
      let div = document.createElement('div');
      div.classList.add('caja');
      contenedor.appendChild(div);

      let img = document.createElement('img');
      img.setAttribute('src',iterador.imgUrl);
      img.setAttribute('alt',iterador.lenguajes);
      div.appendChild(img);
      
      let parrafo = document.createElement('p');
      parrafo.classList.add('lenguajes');
      parrafo.innerText = iterador.lenguajes;
      div.appendChild(parrafo);  

      
      let parrafo2 = document.createElement('p');
      parrafo2.classList.add('bimestre');
      parrafo2.innerText = iterador.bimestre;
      div.appendChild(parrafo2);    
    }
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const tema = document.querySelector('#sitio');
  tema.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener('keypress', function(evento){
  if(evento.key == 'f')
  document.getElementById('sobre-mi').classList.remove('oculto');
});


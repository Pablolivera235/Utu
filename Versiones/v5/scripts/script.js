const images = document.querySelectorAll('.inicioimagenes');
const bkgsec1 = document.querySelectorAll('.cont_img_sec1');
const divimg1 = document.getElementById("div-img-1");

//info de la seccion historia
const nuevedoscero = document.getElementById('nuevedoscero');
const nuevedosdos = document.getElementById('nuevedosdos');
const nuevedosseis = document.getElementById('nuevedosseis');
const nuevedosocho = document.getElementById('nuevedosocho');
const nuevetrestres = document.getElementById('nuevetrestres');
const nuevetresseis = document.getElementById('nuevetresseis');

//arreglo con todas las historias
const historias = [nuevedoscero, nuevedosdos, nuevedosseis, nuevedosocho, nuevetrestres, nuevetresseis];

images.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    images.forEach((img) => {
      img.classList.remove('hovered');
    });
    image.classList.add('hovered');
  });
});



// pantalla de carga inicio

function showWaitScreen() {
  document.querySelector('.wait-screen').style.display = 'flex';
  document.querySelector('.logo_pantalla_de_carga').style.animation = '3s cliper';
  document.querySelector('.wait-screen-message').style.animation = '3s moveup';
}

function hideWaitScreen() {
  document.querySelector('.wait-screen').style.display = 'none';
}


if (window.performance.navigation.type == window.performance.navigation.TYPE_RELOAD) {

} else {
  showWaitScreen();

}

setTimeout(function () {
  hideWaitScreen();
}, 3000);

// pantalla de carga fin


// al hacer clic en el logo, recarga la pagina sin la pantalla de carga

document.getElementById("reiniciar").addEventListener("click", function () {
  var cargando = document.querySelector('.wait-screen');
  cargando.style.display = "none";
  location.reload();
});

// redireccinoamiento

function redireccionarPagina(link) {
  window.location = link;
}

//funciones de desparicion de lo no seleccionado(todo menos algo)
function selectHistoria(numero){
  console.log("activated");
  for (let i = 0; i < historias.length; i++) {
    const element = historias[i];
    if (numero == i) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}

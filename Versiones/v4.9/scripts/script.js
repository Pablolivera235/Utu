const images = document.querySelectorAll('.inicioimagenes');
const bkgsec1 = document.querySelectorAll('.cont_img_sec1');

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


  if (window.performance.navigation.type == window.performance.navigation.TYPE_RELOAD)
  {

  } else {
    showWaitScreen();

  }

  setTimeout(function() {
    hideWaitScreen();
  }, 3000); 

// pantalla de carga fin


// al hacer clic en el logo, recarga la pagina sin la pantalla de carga

document.getElementById("reiniciar").addEventListener("click", function(){
  var cargando = document.querySelector('.wait-screen');
  cargando.style.display = "none";
  location.reload();
});

// redireccinoamiento

function redireccionarPagina(link) {
  window.location = link;
}

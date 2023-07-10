const images = document.querySelectorAll('.inicioimagenes');

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

  showWaitScreen();


  setTimeout(function() {
    hideWaitScreen();
  }, 3000); 

// pantalla de carga fin


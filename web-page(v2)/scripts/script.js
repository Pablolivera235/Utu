$(window).scroll(function () {

   let pixel = $(window).scrollTop(); 

   console.log({ pixel }); 

// Ejecuta la animación css en el pixel 96 del scroll
   
   var previousScrollPosition = window.pageYOffset;

    function handleScroll() {
      var element = document.querySelector('.titulo-1933');
      var div = document.querySelector('.fundacion');
      var desiredScrollPosition = 96;
      var currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition >= desiredScrollPosition) {
        element.classList.add('animate');
      } 
      
      else if(currentScrollPosition < desiredScrollPosition) {
        element.classList.remove('animate');
      }

      previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', handleScroll);

    // otros

    var previousScrollPosition = window.pageYOffset;

    function controlarscroll() {
      var element = document.querySelector('.contenedor-imagen-fundacion');
      var desiredScrollPosition = 96;
      var currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition >= desiredScrollPosition) {
        element.classList.add('animar');
      } 
      
      else if(currentScrollPosition < desiredScrollPosition) {
        element.classList.remove('animar');
      }

      previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', controlarscroll);

    let vid = document.getElementById("nta");
    vid.playbackRate = 0.45;

});

$(window).scroll(function () {

   let pixel = $(window).scrollTop(); 

   console.log({ pixel }); 

// Ejecuta la animación css en el pixel 96 del scroll
   
   var previousScrollPosition = window.pageYOffset;

    function handleScroll() {
      var element = document.querySelector('.untt');
      var div = document.querySelector('.fund');
      var desiredScrollPosition = 96;
      var currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition >= desiredScrollPosition) {
        element.classList.add('animate');
        div.classList.remove('borrar');
      } 
      
      else if(currentScrollPosition < desiredScrollPosition) {
        element.classList.remove('animate');
        div.classList.add('borrar');
      }

      previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', handleScroll);

    let vid = document.getElementById("nta");
    vid.playbackRate = 0.45;

});

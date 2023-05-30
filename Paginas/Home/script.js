$(window).scroll(function () {
   //const info = document.getElementById("body");
   const video = document.getElementById("miLottie"); 


   //$(info).scroll(function( <Esto es para tomar el scroll de un div>
   let pixel = $(window).scrollTop(); // toma el scroll de la ventana como referencia

   console.log({ pixel }); // muestra la cantidad de pixeles desde el principio de la ventana hasta donde esté la barra de scroll por consola

   video.seek(pixel / 2) // Toma la cantidad de fotogramas del Lottie(animacion en formato json) y hace que la aniacion corra 2 veces mas lento

   var container = document.getElementById('fundacion');

  //Descarte esto porque generaba bugs, esto hacía que apareciera la imagen, el nuevo es el de abajo que hace que aparezca un div completo en el scroll 120 <desd acá>
  
  /*  container.innerHTML = ''
    var fund1 = document.getElementById("fund");
   

    if (pixel < 125 || pixel > 787) {
      container.innerHTML = '<style> #fundacion{opacity:0;} </style>'     
   }
   else{
      container.innerHTML = '<style> #fundacion{opacity:1; border:solid;}</style>'  
   }
   */
  
   // <Hasta acá>


   //Hace que aparezca la animación de el div aparezca cuando el pixel del scroll es 120 (En f12/Console se puede ver el pixel del scroll) <desde acá>
   
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

   //<Hasta acá>
  
   
    
});

$(window).scroll(function () {
   //const info = document.getElementById("body");
   const video = document.getElementById("miLottie");


   //$(info).scroll(function(){
   let pixel = $(window).scrollTop();

   console.log({ pixel });

   video.seek(pixel / 5)


   //pixel 590 de scroll para poner la foto

   var container = document.getElementById('fundacion');
  //  container.innerHTML = ''
   // var fund1 = document.getElementById("fund");
   

   /* if (pixel < 125 || pixel > 787) {
      container.innerHTML = '<style> #fundacion{opacity:0;} </style>'     
   }
   else{
      container.innerHTML = '<style> #fundacion{opacity:1; border:solid;}</style>'  
   }
   */
   
   var previousScrollPosition = window.pageYOffset;

    function handleScroll() {
      var element = document.querySelector('.untt');
      var desiredScrollPosition = 120;
      var currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition >= desiredScrollPosition && currentScrollPosition > previousScrollPosition) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }

      previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', handleScroll);
    
});





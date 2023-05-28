$(window).scroll(function () {
   //const info = document.getElementById("body");
   const video = document.getElementById("miLottie");


   //$(info).scroll(function(){
   let pixel = $(window).scrollTop();

   console.log({ pixel });

   video.seek(pixel / 2)


   //pixel 590 de scroll para poner la foto

   var container = document.getElementById('fundacion');
   container.innerHTML = '<img id="fund" src="./Fotos/fundacion(editada).jpeg">'
   var fund1 = document.getElementById("fund");
   if (pixel < 125) {
      container.innerHTML = '<style> #fund{opacity:0;} </style>'
   }
   else if (pixel > 787){
      container.innerHTML = '<style> #fund{opacity:0;} </style>'
   }


   //  });
});



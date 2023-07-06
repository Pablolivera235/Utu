const images = document.querySelectorAll('.inicioimagenes');

images.forEach(inicioimagenes => {
    inicioimagenes.addEventListener('mouseover', () => {
        images.forEach(img => {
            if (img !== inicioimagenes){
                img.classList.add('hide');
            }
        });
    });

    inicioimagenes.addEventListener('mouseout', () => {
       images.forEach(img => {
        img.classList.remove('hide');
       });
    });
});
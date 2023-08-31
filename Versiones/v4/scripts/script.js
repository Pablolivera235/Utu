const images = document.querySelectorAll('.inicioimagenes');

images.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        images.forEach((img) => {
            img.classList.remove('hovered');
        });
        image.classList.add('hovered');
    });
});


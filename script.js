window.addEventListener('scroll', function () {
    const title = document.querySelector('.title');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {  // Trigger the animation after scrolling 100px
        title.style.opacity = 1;
    } else {
        title.style.opacity = 0;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const homeSection = document.getElementById('home');
    const images = [
        'url("img/1.png")',
        'url("img/2.png")',
        'url("img/3.png")',
        'url("img/1.png")',
    ];
    let currentImageIndex = 0;

    function changeBackground() {
        homeSection.style.backgroundImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000); // Change image every 1 second
    changeBackground(); // Initial call to set the first background
});

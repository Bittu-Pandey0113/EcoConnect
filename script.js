const images = document.querySelectorAll('.hero-images img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active'); // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to next image
    images[currentIndex].classList.add('active'); // Show next image
}

// Show the first image initially
images[currentIndex].style.display = 'block';

// Change image every 3 seconds
setInterval(showNextImage, 3000);

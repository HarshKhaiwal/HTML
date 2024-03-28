// Get a reference to the image element
const image = document.querySelector('img');
image.src="Enhanced.jpeg"

// Give the image element an ID

// Define the animation function
function animateImage() {
    // Add your animation logic here
    // For example, you can change the image's position, opacity, or size over time using CSS transitions or animations
    image.style.transform = 'rotate(360deg)';
    image.style.transition = 'transform 1s';
}

// Call the animation function
animateImage();

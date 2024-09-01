// script.js

// Get the header element
const header = document.querySelector('header');

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 100) { // Adjust this value to control when the header appears
        header.classList.add('show-header');
    } else {
        header.classList.remove('show-header');
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check to ensure correct header state on page load
handleScroll();

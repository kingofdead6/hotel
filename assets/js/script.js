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

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-500px'; // Hide sidebar
    } else {
        sidebar.style.left = '0px'; // Show sidebar
    }
}

// JavaScript for Gallery Slideshow
let currentPage = 0;
const pages = document.querySelectorAll('.gallery-page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle('active', i === index);
    });
}

function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
}

function prevPage() {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
}

// Automatically switch pages every 5 seconds
setInterval(nextPage, 5000);

// Initial page display
showPage(currentPage);
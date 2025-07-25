// Responsive hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("open");
        // Toggle hamburger icon between ☰ and ✖
        if (navList.classList.contains("open")) {
            hamburger.innerHTML = "&times;"; // X symbol
        } else {
            hamburger.innerHTML = "&#9776;"; // Hamburger symbol
        }
    });

    // Hide hamburger button on large screens
    function handleResize() {
        if (window.innerWidth > 600) {
            hamburger.style.display = "none";
            navList.classList.remove("open");
            hamburger.innerHTML = "&#9776;";
        } else {
            hamburger.style.display = "block";
        }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
});

// Footer copyright year and last modified
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = "Last Modified: " + document.lastModified;
});
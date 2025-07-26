// Footer copyright year and last modified
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastmodified").textContent = document.lastModified;
});
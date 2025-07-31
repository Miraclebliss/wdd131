const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "McAllen Texas Temple",
        location: "McAllen, Texas, United States",
        dedicated: "8th October 2023",
        area: 78504,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
    },
    {
        templeName: "Rexburg Idaho Temple",
        location: "Rexburg, Idaho, United States",
        dedicated: "10th February 2008",
        area: 83440-5404,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-1057-main.jpg"
    },
];

function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.classList.add('temple');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    const caption = document.createElement('figcaption');
    caption.innerHTML = `
        <strong>${temple.name}</strong><br>
        <span>${temple.location}</span><br>
        <span>Dedicated: ${temple.dedicated}</span><br>
        <span>Area: ${temple.area.toLocaleString()} sq ft</span>
    `;

    card.appendChild(img);
    card.appendChild(caption);
    return card;
}

function displayTemples(filteredTemples) {
    const gallery = document.getElementById('temple-gallery');
    gallery.innerHTML = '';
    filteredTemples.forEach(temple => {
        gallery.appendChild(createTempleCard(temple));
    });
}

// Filtering logic
function filterTemples(criteria) {
    let filtered;
    switch (criteria) {
        case 'Old':
            filtered = temples.filter(t => new Date(t.dedicated) < new Date('1900-01-01'));
            break;
        case 'New':
            filtered = temples.filter(t => new Date(t.dedicated) > new Date('2000-01-01'));
            break;
        case 'Large':
            filtered = temples.filter(t => t.area > 90000);
            break;
        case 'Small':
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    displayTemples(filtered);
}

// Navigation event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Initial display
    displayTemples(temples);

    // Nav filtering
    document.querySelectorAll("#nav-list a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            filterTemples(link.textContent.trim());
        });
    });

    // Hamburger menu (reuse your existing code if needed)
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("open");
        hamburger.innerHTML = navList.classList.contains("open") ? "&times;" : "&#9776;";
    });
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

    // Footer year and last modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastmodified").textContent = document.lastModified;
});
    
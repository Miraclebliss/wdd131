// Product data (array of objects)
const selectproducts = [
    // BODY SPRAYS (12)
    {
        id: "BS01",
        name: "Deodorant Body Spray",
        type: "Body Spray",
        scent: "Citrus & Musk",
        price: 3500,
        image: "images/deodorantbodyspray.jpg",
        description: "Light, everyday freshness with durable odor protection and a subtle citrus-musk scent.",
    },

    {
        id: "BS02",
        name: "Aromatic Body Splash",
        type: "Body Spray",
        scent: "Coconut & Vanilla",
        price: 3000,
        image: "images/aromaticbodysplash.jpg",
        description: "Hydrating cooling splash with a soft tropical coconut-vanilla aroma for post-shower freshness."
    },

    {
        id: "BS03",
        name: "Sport Fresh Spray",
        type: "Body Spray",
        scent: "Mint & Sea Breeze",
        price: 3200,
        image: "images/sportfreshspray.jpg",
        description: "High-energy spray designed for active days — crisp mint meets oceanic notes."
    },

    {
        id: "BS04",
        name: "Urban Nights Spray",
        type: "Body Spray",
        scent: "Leather & Tobacco",
        price: 4200,
        image: "images/urbannightsspray.jpg",
        description: "Bold city-inspired aroma with smoky leather and warm tobacco for evening wear."
    },

    {
        id: "BS05",
        name: "Citrus Burst Spray",
        type: "Body Spray",
        scent: "Grapefruit & Bergamot",
        price: 3100,
        image: "images/citrusburstspray.jpg",
        description: "Bright and uplifting burst of grapefruit and bergamot — a morning pick-me-up."
    },

    {
        id: "BS06",
        name: "Floral Garden Spray",
        type: "Body Spray",
        scent: "Rose & Lily",
        price: 3300,
        image: "images/floralgardenspray.jpg",
        description: "Soft romantic floral blend ideal for everyday elegance and layering."
    },

    {
        id: "BS07",
        name: "Tropical Escape Spray",
        type: "Body Spray",
        scent: "Pineapple & Coconut",
        price: 3400,
        image: "images/tropicalescapespray.jpg",
        description: "Exotic, vacation-style fragrance with juicy pineapple and creamy coconut."
    },

    {
        id: "BS08",
        name: "Cool Mint Splash",
        type: "Body Spray",
        scent: "Peppermint & Eucalyptus",
        price: 3000,
        image: "images/coolmintbodyspray.jpg",
        description: "Crisp cooling spray with peppermint and eucalyptus for instant refreshment."
    },

    {
        id: "BS09",
        name: "Amber Glow Spray",
        type: "Body Spray",
        scent: "Amber & Sandalwood",
        price: 3800,
        image: "images/amberglowspray.jpg",
        description: "Warm, alluring amber layered with smooth sandalwood for a seductive finish."
    },

    {
        id: "BS10",
        name: "Herbal Green Spray",
        type: "Body Spray",
        scent: "Basil & Green Tea",
        price: 3200,
        image: "images/herbalgreenspray.jpg",
        description: "Fresh, earthy green notes perfect for a calm, natural scent profile."
    },

    {
        id: "BS11",
        name: "Berry Bliss Spray",
        type: "Body Spray",
        scent: "Strawberry & Blackcurrant",
        price: 3000,
        image: "images/berryblissspray.jpg",
        description: "Playful fruity spray with ripe strawberry and tart blackcurrant."
    },

    {
        id: "BS12",
        name: "Mystic Oud Spray",
        type: "Body Spray",
        scent: "Oud & Saffron",
        price: 4500,
        image: "images/mysticoudspray.jpg",
        description: "Modern oriental blend with deep oud and a hint of saffron spice."
    },

    // MISTS (11)
    {
        id: "M01",
        name: "Body Mist",
        type: "Mist",
        scent: "Rosewater",
        price: 2800,
        image: "images/bodymist.jpg",
        description: "Fine, airy mist with soft rosewater — ideal for layering and light wear."
    },

    {
        id: "M02",
        name: "Vanilla Cloud Mist",
        type: "Mist",
        scent: "Vanilla Bean",
        price: 2900,
        image: "images/vanillacloudmist.jpg",
        description: "Creamy, sweet comfort in a light mist for cozy everyday use."
    },

    {
        id: "M03",
        name: "Coconut Breeze Mist",
        type: "Mist",
        scent: "Coconut & Jasmine",
        price: 3000,
        image: "images/coconutbreezemist.jpg",
        description: "Warm beachy mist combining coconut and delicate jasmine."
    },

    {
        id: "M04",
        name: "Peach Nectar Mist",
        type: "Mist",
        scent: "Peach & Magnolia",
        price: 2900,
        image: "images/peachnectarmist.jpg",
        description: "Juicy peach lifted by magnolia for a feminine, fresh mist."
    },

    {
        id: "M05",
        name: "Ocean Whisper Mist",
        type: "Mist",
        scent: "Sea Salt & Driftwood",
        price: 3000,
        image: "images/oceanwhispermist.jpg",
        description: "Clean marine freshness with salty air and driftwood undertones."
    },

    {
        id: "M06",
        name: "Lilac Dream Mist",
        type: "Mist",
        scent: "Lilac & Violet",
        price: 2800,
        image: "images/lilacdreammist.jpg",
        description: "Powdery floral mist that feels like a springtime garden."
    },

    {
        id: "M07",
        name: "Sunlit Citrus Mist",
        type: "Mist",
        scent: "Orange & Lemon Peel",
        price: 2750,
        image: "images/sunlitcitrusmist.jpg",
        description: "Bright, zesty morning mist to lift your mood and energy."
    },

    {
        id: "M08",
        name: "Midnight Plum Mist",
        type: "Mist",
        scent: "Plum & Black Cherry",
        price: 3100,
        image: "images/midnightplummist.jpg",
        description: "Dark fruity mist with juicy plum and black cherry for nights out."
    },

    {
        id: "M09",
        name: "Herbal Spa Mist",
        type: "Mist",
        scent: "Lavender & Eucalyptus",
        price: 3000,
        image: "images/herbalspamist.jpg",
        description: "Calming spa-like mist blending lavender and eucalyptus notes."
    },

    {
        id: "M10",
        name: "Golden Amber Mist",
        type: "Mist",
        scent: "Amber & Vanilla",
        price: 2950,
        image: "images/goldenambermist.jpg",
        description: "Softly sweet warm mist with amber and vanilla comforts."
    },

    {
        id: "M11",
        name: "Jasmine Glow Mist",
        type: "Mist",
        scent: "Jasmine & Green Tea",
        price: 3050,
        image: "images/jasmineglowmist.jpg",
        description: "Light floral elegance with bright jasmine and green tea freshness."
    },

    // OIL PERFUMES (12)
    {
        id: "OP01",
        name: "Eau de Parfum (EDP)",
        type: "Oil Perfume",
        scent: "Amber & Vanilla",
        price: 12000,
        image: "images/eaudeparfum.jpg",
        description: "Rich, long-lasting EDP with a warm amber-vanilla base and elegant projection."
    },

    {
        id: "OP02",
        name: "Eau de Toilette (EDT)",
        type: "Oil Perfume",
        scent: "Citrus & Mint",
        price: 7500,
        image: "images/eaudetoilette.jpg",
        description: "Light, daytime EDT featuring crisp citrus and refreshing mint."
    },

    {
        id: "OP03",
        name: "Extrait de Parfum (Pure Perfume)",
        type: "Oil Perfume",
        scent: "Oud & Rose",
        price: 18000,
        image: "images/extraitdeparfum.jpg",
        description: "Highly concentrated pure perfume — intense oud balanced by rich rose."
    },

    {
        id: "OP04",
        name: "Attar (Alcohol-Free Oil)",
        type: "Oil Perfume",
        scent: "Sandalwood & Musk",
        price: 9000,
        image: "images/attar.jpg",
        description: "Traditional alcohol-free attar with creamy sandalwood and soft musk."
    },

    {
        id: "OP05",
        name: "Essential Oil Blend (Roll-on)",
        type: "Oil Perfume",
        scent: "Lavender & Chamomile",
        price: 3500,
        image: "images/essentialoilblend.jpg",
        description: "Portable roll-on of calming essential oils for mood and subtle scent."
    },

    {
        id: "OP06",
        name: "Royal Oud Oil",
        type: "Oil Perfume",
        scent: "Oud & Frankincense",
        price: 20000,
        image: "images/royaloudoil.jpg",
        description: "Regal oil perfume with deep oud and resinous frankincense",
    },
    {
        id: "OP07",
        name: "Oriental Amber Oil",
        type: "Oil Perfume",
        scent: "Amber & Cardamom",
        price: 11500,
        image: "images/orientalamberoil.jpg",
        description: "Sweet-spicy amber oil uplifted by warm cardamom notes."
    },

    {
        id: "OP08",
        name: "Rose Attar Oil",
        type: "Oil Perfume",
        scent: "Damask Rose",
        price: 12500,
        image: "images/roseattaroil.jpg",
        description: "Pure damask rose attar — concentrated, floral, and timeless."
    },

    {
        id: "OP09",
        name: "Cedarwood Musk Oil",
        type: "Oil Perfume",
        scent: "Cedarwood & White Musk",
        price: 9000,
        image: "images/cedarwoodmuskoil.jpg",
        description: "Grounded woody oil with clean musk for a refined masculine-feminine balance."
    },

    {
        id: "OP10",
        name: "Citrus Neroli Oil",
        type: "Oil Perfume",
        scent: "Neroli & Lemon Peel",
        price: 8500,
        image: "images/citrusnerolioil.jpg",
        description: "Bright, elegant neroli oil with zesty lemon peel freshness."
    },

    {
        id: "OP11",
        name: "Spiced Vanilla Oil",
        type: "Oil Perfume",
        scent: "Vanilla & Clove",
        price: 8000,
        image: "images/spicedvanillaoil.jpg",
        description: "Cozy addictive blend of warm vanilla and gentle clove spice."
    },

    {
        id: "OP12",
        name: "Tropical Floral Oil",
        type: "Oil Perfume",
        scent: "Ylang-Ylang & Jasmine",
        price: 9500,
        image: "images/tropicalfloraloil.jpg",
        description: "Lush exotic floral oil pairing ylang-ylang with rich jasmine."
    },
];

document.addEventListener("DOMContentLoaded", () => {

    // Hamburger menu
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");
    if (hamburger && navList) {
        hamburger.addEventListener("click", () => {
            navList.classList.toggle("open");
            hamburger.innerHTML = navList.classList.contains("open") ? "&times;" : "&#9776;";
        });
        window.addEventListener("resize", () => {
            if (window.innerWidth > 600) {
                navList.classList.remove("open");
                hamburger.innerHTML = "&#9776;";
            }
        });
    }

    // Footer year and last modified
    const yearSpan = document.getElementById("year");
    const lastModSpan = document.getElementById("last-modified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModSpan) lastModSpan.textContent = document.lastModified;

    // PRODUCTS PAGE: Render product cards
    const productList = document.getElementById("product-list");
    const scentFilter = document.getElementById("scent-filter");

    function renderProducts(filter = "all") {
        let filtered = filter == "all"
            ? selectproducts
            : selectproducts.filter(p => p.scent.toLowerCase() == filter.toLowerCase());
        if (productList) {
            productList.innerHTML = filtered.length
                ? filtered.map(p => `
          <div class="product-card">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p><strong>Type:</strong> ${p.type}</p>
            <p><strong>Scent:</strong> ${p.scent}</p>
            <p><strong>Price:</strong> ₦${p.price.toLocaleString()}</p>
            <p>${p.description}</p>
          </div>

        `).join('')
                : `<p>No products found for this scent.</p>`;
        }
    }
    if (productList && scentFilter) {
        renderProducts();
        scentFilter.addEventListener("change", () => {
            renderProducts(scentFilter.value);
        });
    }

    // CONTACT PAGE: Populate product select dropdown
    const productSelect = document.getElementById("productName");
    if (productSelect) {
        productSelect.innerHTML = `<option value="" disabled selected>Select a Product ...</option>` +
            selectproducts.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    }

    // CONTACT PAGE: Review counter using localStorage
    const reviewCounter = document.getElementById("review-counter");
    if (reviewCounter) {
        let count = Number(localStorage.getItem("reviewCount")) || 0;
        reviewCounter.textContent = `You have submitted ${count} review${count === 1 ? "" : "s"}.`;
    }
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.addEventListener("submit", () => {
            let count = Number(localStorage.getItem("reviewCount")) || 0;
            localStorage.setItem("reviewCount", count + 1);
        });
    }
});
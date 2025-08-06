// Product array
const products = [
  { id: "prod1", name: "Eau de Parfum (EDP)" },
  { id: "prod2", name: "Eau de Toilette (EDT)" },
  { id: "prod3", name: "Extrait de Parfum (Pure Perfume)" },
  { id: "prod4", name: "Body Mist" },
  { id: "prod5", name: "Deodorant Body Spray" },
  { id: "prod6", name: "Aromatic Body Splash" },
  { id: "prod7", name: "Attar (Alcohol-Free Oil Perfume)" },
  { id: "prod8", name: "Essential Oil Blends (Roll-on)" },
  { id: "prod9", name: "Reed Diffuser" },
  { id: "prod10", name: "Electric Ultrasonic Diffuser" },
];

// Populate product select options
document.addEventListener("DOMContentLoaded", () => {
  // Product select
  const select = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });

  // Footer year and last modified
  const yearSpan = document.getElementById("year");
  const lastModSpan = document.getElementById("last-modified");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModSpan) lastModSpan.textContent = document.lastModified;
});
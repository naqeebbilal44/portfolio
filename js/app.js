// ======== AUTO YEAR IN FOOTER ========
document.getElementById("year").textContent = new Date().getFullYear();

// ======== PROPERTY LISTINGS (Dynamic) ========
const properties = [
  {
    title: "Luxury Waterfront Apartment",
    price: "AED 2,450,000",
    location: "Dubai Marina",
    image: "assets/images/listings/prop1.jpg",
    message: "I'm interested in the Luxury Waterfront Apartment in Dubai Marina."
  },
  {
    title: "Premium Townhouse",
    price: "AED 3,200,000",
    location: "DAMAC Hills",
    image: "assets/images/listings/prop2.jpg",
    message: "I'm interested in the Premium Townhouse in DAMAC Hills."
  },
  {
    title: "Modern 1BR Apartment",
    price: "AED 980,000",
    location: "Business Bay",
    image: "assets/images/listings/prop3.jpg",
    message: "I'm interested in the Modern 1BR Apartment in Business Bay."
  }
];

function loadListings() {
  const grid = document.getElementById("property-grid");
  if (!grid) return;

  properties.forEach(p => {
    const card = document.createElement("div");
    card.className = "property-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="property-info">
        <h3>${p.title}</h3>
        <p>${p.location}</p>
        <p class="price">${p.price}</p>
        <a class="btn-whatsapp" target="_blank" href="https://wa.me/9710000000?text=${encodeURIComponent(p.message)}">Inquire on WhatsApp</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

loadListings();

// ======== CONTACT FORM HANDLING ========
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("formStatus");
    status.textContent = "Message sent successfully! Mafooz will contact you soon.";
    status.style.color = "green";

    contactForm.reset();
  });
}
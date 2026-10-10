// Sample Property Listings Data
const properties = [
    {
        id: 1,
        title: "Modern Suburban Family House",
        type: "House",
        price: 450000,
        location: "Austin, TX",
        beds: 4,
        baths: 3,
        sqft: 2600,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Luxury Downtown Penthouse",
        type: "Apartment",
        price: 850000,
        location: "Miami, FL",
        beds: 3,
        baths: 2,
        sqft: 1850,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Coastal Sunset Villa",
        type: "Villa",
        price: 1200000,
        location: "Malibu, CA",
        beds: 5,
        baths: 5,
        sqft: 4200,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Cozy Urban Apartment",
        type: "Apartment",
        price: 275000,
        location: "Chicago, IL",
        beds: 1,
        baths: 1,
        sqft: 850,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    }
];

// Sample Certifications Data
const certifications = [
    {
        id: 1,
        title: "Certified Real Estate Broker",
        issuer: "National Association of Realtors",
        date: "Jan 2024",
        link: "#",
        badgeImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "Licensed Property Appraiser",
        issuer: "State Real Estate Commission",
        date: "Mar 2025",
        link: "#",
        badgeImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80"
    }
];

// Render Properties in Grid
function renderProperties(data) {
    const grid = document.getElementById('propertyGrid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">No properties found matching your criteria.</p></div>`;
        return;
    }

    data.forEach(prop => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3';
        col.innerHTML = `
            <div class="card property-card h-100 shadow-sm rounded-4 overflow-hidden">
                <div class="property-img-wrapper position-relative">
                    <img src="${prop.image}" alt="${prop.title}">
                    <span class="badge bg-primary position-absolute top-0 start-0 m-3">${prop.type}</span>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-dark">$${prop.price.toLocaleString()}</h5>
                    <h6 class="text-secondary small mb-2"><i class="fa-solid fa-location-dot me-1"></i>${prop.location}</h6>
                    <p class="card-text fw-semibold mb-3">${prop.title}</p>
                    <div class="mt-auto pt-2 border-top d-flex justify-content-between text-muted small">
                        <span><i class="fa-solid fa-bed me-1"></i>${prop.beds} Beds</span>
                        <span><i class="fa-solid fa-bath me-1"></i>${prop.baths} Baths</span>
                        <span><i class="fa-solid fa-ruler-combined me-1"></i>${prop.sqft} sqft</span>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

// Render Certifications Section
function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    grid.innerHTML = '';

    certifications.forEach(cert => {
        const col = document.createElement('div');
        col.className = 'col-md-5 col-lg-4';
        col.innerHTML = `
            <div class="card cert-card h-100 rounded-4 shadow-sm p-3 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <img src="${cert.badgeImage}" alt="${cert.title}" class="rounded-circle me-3" style="width: 50px; height: 50px; object-fit: cover;">
                    <div>
                        <h6 class="fw-bold mb-0">${cert.title}</h6>
                        <small class="text-muted">Issued: ${cert.date}</small>
                    </div>
                </div>
                <p class="text-muted small mb-2">Issuer: <strong>${cert.issuer}</strong></p>
                <a href="${cert.link}" class="btn btn-outline-primary btn-sm mt-auto w-100">Verify Credential</a>
            </div>
        `;
        grid.appendChild(col);
    });
}

// Search & Filter Event Handlers
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const type = document.getElementById('typeFilter').value;
    const maxPrice = document.getElementById('priceFilter').value;

    const filtered = properties.filter(prop => {
        const matchesQuery = prop.location.toLowerCase().includes(query) || prop.title.toLowerCase().includes(query);
        const matchesType = type === "" || prop.type === type;
        const matchesPrice = maxPrice === "" || prop.price <= parseInt(maxPrice);
        return matchesQuery && matchesType && matchesPrice;
    });

    renderProperties(filtered);
});

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const alertDiv = document.getElementById('formAlert');
    alertDiv.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        Thank you! Your message has been sent to our agents.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    document.getElementById('contactForm').reset();
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderProperties(properties);
    renderCertifications();
});
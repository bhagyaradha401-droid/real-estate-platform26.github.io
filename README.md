# Real Estate Listing Platform

A modern, responsive web application designed for users to list, browse, search, and inquire about real estate properties. Built using HTML5, CSS3, JavaScript, and Bootstrap 5 for the front-end, supported by a structured MySQL backend database.

---

## Features

- **Multi-Role User System:** Supports Buyers, Sellers, and Real Estate Agents.
- **Dynamic Property Search & Filtering:** Filter listings instantaneously by location, property type, and price range.
- **Interactive Image Galleries & Grids:** Clean card layouts with smooth hover effects.
- **Client Inquiry Form:** Fully interactive contact form with instant validation alerts.
- **Certifications & Accreditations Section:** Dedicated accreditation cards displaying professional badges, issuer names, and verification links.

---

## Tech Stack

- **Front-End:** HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, FontAwesome Icons.
- **Back-End / Database:** MySQL (Relational Schema with proper indexing and foreign key constraints).

---

## Setup & Installation Instructions

1. **Clone or Download** the project repository files (`index.html`, `style.css`, `app.js`).
2. **Database Setup:** 
   - Open your MySQL server client (e.g., MySQL Workbench or phpMyAdmin).
   - Run the provided `schema.sql` script to set up tables (`users`, `property_listings`, `contact_inquiries`, `user_certifications`).
3. **Run the Application:**
   - Open `index.html` directly in any modern web browser, or run via a local server extension (like Live Server in Visual Studio Code) for optimal development flow.

---

## Documentation & Maintenance Plan

- **Development Process:** Modularized front-end components into independent files for maintainability and scalability. Search algorithms use reactive JavaScript array methods (`filter`) for high performance.
- **Maintenance & Scalability:** Future enhancements include transitioning from mock data (`app.js`) to a RESTful Node.js/Express backend API connected to MySQL, implementing user authentication (JWT), and adding cloud image hosting (e.g., AWS S3 or Cloudinary) for property listings.
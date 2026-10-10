-- Create Database
CREATE DATABASE IF NOT EXISTS real_estate_platform;
USE real_estate_platform;

-- Users Table (Supports Buyers, Sellers, and Real Estate Agents)
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Buyer', 'Seller', 'Agent') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Property Listings Table
CREATE TABLE property_listings (
    property_id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    property_type ENUM('House', 'Apartment', 'Villa') NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    location VARCHAR(255) NOT NULL,
    bedrooms INT NOT NULL,
    bathrooms INT NOT NULL,
    sqft INT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Contact Inquiries Table
CREATE TABLE contact_inquiries (
    inquiry_id INT AUTO_INCREMENT PRIMARY KEY,
    property_id INT,
    sender_name VARCHAR(100) NOT NULL,
    sender_email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (property_id) REFERENCES property_listings(property_id) ON DELETE SET NULL
);

-- User Certifications & Accreditations Table
CREATE TABLE user_certifications (
    certification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    issuer VARCHAR(150) NOT NULL,
    verification_link TEXT,
    badge_image_url TEXT,
    upload_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Index for optimized search queries
CREATE INDEX idx_property_search ON property_listings(location, property_type, price);
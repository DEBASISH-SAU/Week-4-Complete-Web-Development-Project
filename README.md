# Sau Technologies – Complete Business Website

**Developers Arena Internship – Week 4**  
**Debasish Sau**  
📞 +91 9876543210  
📧 debasish@example.com  

---

## 📋 Project Overview

This is a fully responsive, multi‑page business website for **Sau Technologies**, a fictional tech company founded by **Debasish Sau**. The project was built as the final week of the internship, combining all skills learned in HTML, CSS, and JavaScript. The site includes a home page, about page, services page, and a contact page with client‑side form validation. It demonstrates mobile‑first responsive design, semantic HTML5, CSS3 (Flexbox, Grid, Custom Properties), and interactive JavaScript features.

---

## ✅ Technical Requirements Met

| Requirement | Implementation |
|-------------|----------------|
| **At least 3 HTML pages** | 4 pages: Home (`index.html`), About (`about.html`), Services (`services.html`), Contact (`contact.html`) |
| **Fully responsive design** | Mobile‑first media queries, flexible grids, mobile hamburger menu |
| **Contact form with validation** | Real‑time validation on `blur` + final validation on `submit` with error messages |
| **Image optimization** | Images use `loading="lazy"`, descriptive `alt` text, and are served from Unsplash CDN |
| **Navigation between pages** | Consistent header and footer across all pages; active page highlighting |
| **Deployed to free hosting** | Ready to deploy on **GitHub Pages** (instructions below) |

---

## 👤 Founder & Contact Information

- **Name:** Debasish Sau  
- **Location:** Bengaluru, Karnataka, India  
- **Email:** debasish@example.com  
- **Phone:** +91 9876543210  
- **LinkedIn:** [linkedin.com/in/debasish-sau](https://www.linkedin.com/in/debasish-sau)  
- **GitHub:** [github.com/debasish-sau](https://github.com/debasish-sau)

---

## 📂 Project Structure
sau-tech-website/
├── index.html # Home page
├── about.html # About page
├── services.html # Services page
├── contact.html # Contact page with form
├── css/
│ └── style.css # All styling (CSS variables, responsive rules)
├── js/
│ └── script.js # Mobile menu toggle + form validation
├── images/ # (optional) Place any local images here
└── README.md # This documentation

---

## 🚀 Setup & Local Run

1. Clone or download the repository.
2. Ensure all files are in the correct folder structure (as shown above).
3. Open `index.html` in any modern browser (Chrome, Firefox, Edge).
4. No server or build tools are required – it runs entirely on the client side.

---

## 🎨 Design & Responsiveness

- **Colour palette:** Vibrant gradients (warm pink/orange, cool blue, yellow accent) based on CSS custom properties for easy theming.
- **Layout:** Flexbox and CSS Grid used throughout to create flexible, responsive sections.
- **Mobile‑first breakpoints:** Media queries at 768px adjust navigation (hamburger menu), stack columns, and reduce font sizes.
- **Visual effects:** Subtle hover animations on cards and buttons, smooth scrolling, and a sticky header.

---

## ⚙️ JavaScript Features

### 1. Mobile Navigation Toggle
- A hamburger button (`☰`) appears on screens ≤ 768px.
- Clicking it toggles the visibility of the navigation menu, making the site usable on small devices.

### 2. Contact Form Validation (Real‑time)
- **Blur event:** Each field is validated as soon as the user leaves it.
- **Submit event:** Full validation is performed again, and the form is prevented from submitting if errors exist.
- **Validation rules:**
  - **Name:** Required, minimum 2 characters.
  - **Email:** Required, must match standard email pattern.
  - **Phone:** Optional, but if provided must be exactly 10 digits.
  - **Message:** Required, minimum 10 characters.
- **Error display:** Red border on the input + specific error message below the field.
- **Success feedback:** A green success message is shown, and the form is reset (demo mode).

---

## 🧠 Form Validation Logic (Detailed)

The validation follows this flow for each field:

1. Trim the input value.
2. If the field is required and empty → show error `"Field is required."`
3. If the value does not meet the pattern/length criteria → show specific error (e.g., `"Invalid email format"`, `"Min 10 characters"`).
4. If valid → clear any error and remove the red border.

All validation functions (`validateName()`, `validateEmail()`, `validatePhone()`, `validateMessage()`) are reusable and called on both `blur` and `submit`.

---

## 🌐 Deployment (GitHub Pages)

1. Push the entire folder to a new GitHub repository.
2. Go to the repository **Settings** → **Pages**.
3. Under **Branch**, select `main` and keep the root folder `/`.
4. Click **Save** – your site will be live at `https://<your-username>.github.io/sau-tech-website/`.

---

## 📸 Screenshots

*(Add your own screenshots in a `screenshots/` folder and update the links below)*

| Home Page (Desktop) | Home Page (Mobile) |
|---------------------|---------------------|
| ![Home Desktop](screenshots/home-desktop.png) | ![Home Mobile](screenshots/home-mobile.png) |

| About Page | Services Page |
|------------|---------------|
| ![About](screenshots/about.png) | ![Services](screenshots/services.png) |

| Contact Page (Form Validation) | Contact Page (Success) |
|-------------------------------|------------------------|
| ![Form Error](screenshots/contact-error.png) | ![Form Success](screenshots/contact-success.png) |

---

## 📝 Week 4 Learning Outcomes

- Planned and structured a multi‑page website.
- Applied mobile‑first responsive design with media queries.
- Implemented image optimization techniques (lazy loading, alt text).
- Built a fully functional contact form with real‑time validation using pure JavaScript.
- Prepared the project for deployment on GitHub Pages.


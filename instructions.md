You are an expert frontend developer (HTML + CSS + vanilla JS) and UX designer.

I want you to create a **modern, elegant landing page webapp** to receive payments and donations.  
Stack: **pure HTML, CSS, and JS** (no frameworks, no build tools).  
Project structure:
- `index.html`
- `styles.css`
- `script.js`
- (optionally) `assets/` for icons or small SVGs

---

## Goal

A **single-page landing** where people can quickly:
- choose a **payment method**
- optionally **select or type an amount**
- click a button to be redirected to the payment service
- copy my **bank transfer details** in one click

No backend is required: everything is static and client-side.

---

## Branding & Style

Overall mood:
- Clean, modern, and trustworthy (like a fintech/payments page).
- Light theme by default.
- a touch of glassmorphishm
- Simple, readable typography (e.g., system fonts stack).
- Use a limited color palette, for example:
  - Primary: a deep blue
  - Accent: a vivid accent (e.g., cyan / teal)
  - Background: very light grey or white
- Rounded corners, subtle shadows for cards and buttons.
- Responsive layout: must look good on **mobile-first**, tablet, and desktop.

---

## Content & Layout

Use a centered, responsive layout. Something like:

1. **Hero section**
   - Title: e.g. “Send a Payment to Maurizio Falconi”.
   - Short subtitle explaining use cases, like:  
     “Use this page to send payments, donations or reimbursements in a few clicks.”
   - Optional small text explaining that no card data is stored on the site.

2. **Payment methods section**

Create a section with **three cards** (flex or grid layout):

### Card 1 — PayPal

- Card title: "Pay with PayPal"
- Short description: “Pay securely with your PayPal account or card.”
- Big primary button: “Open PayPal”
- Button links to:  
  `https://paypal.me/falker47`
- When clicked, open PayPal in a **new tab**.

### Card 2 — Satispay

- Card title: "Pay with Satispay"
- Short description: “Use Satispay for quick, mobile payments.”
- Button: “Open Satispay”
- Button links to:  
  `https://www.satispay.com/app/match/link/user/S6Y-CON--C93AA867-ACBE-4F99-9F05-11CBA443A7F9`
- Open in a new tab.

### Card 3 — Bank Transfer

- Card title: "Bank Transfer"
- Short description: “Use a classic SEPA bank transfer.”
- Inside the card, show clearly formatted bank data:

  - **Bank name:** BBVA  
  - **Account owner:** Maurizio Falconi  
  - **IBAN:** IT86D0357601601010004835062

- Add a **“Copy IBAN”** button:
  - On click, copy the IBAN to clipboard.
  - Show a small temporary confirmation message (“IBAN copied!”) below the button.

---

## JavaScript Requirements

Create a `script.js` file and wire it in `index.html`.  
Implement the following:


1. **Copy to clipboard for IBAN**
   - Use the modern Clipboard API (`navigator.clipboard.writeText`) with basic error handling.
   - Show a small message or toast (e.g. a small text below the button) that fades out after 2–3 seconds.

---

## Accessibility & UX

- Buttons must be keyboard-navigable.
- Use `aria-label` where appropriate (e.g., on icon-only buttons if any).
- Make sure text has sufficient color contrast.
- On mobile, ensure:
  - No horizontal or vertical scrolling.
  - Tap targets are large enough.
  - Inputs and buttons are not too close together.

---

## Technical Details

- Use **semantic HTML**: `<header>`, `<main>`, `<section>`, `<footer>`, etc.
- Link CSS with `<link rel="stylesheet" href="styles.css">`.
- Link JS with `<script src="script.js" defer></script>`.
- Use CSS variables for main colors, e.g.:

  ```css
  :root {
    --color-bg: #f5f7fb;
    --color-primary: #10316b;
    --color-accent: #0fb9b1;
    --color-text: #111827;
    --color-card-bg: #ffffff;
  }

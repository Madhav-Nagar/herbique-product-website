# HERBIQUE Natural Soap Co.

A premium, interactive product showcase website designed for **HERBIQUE Natural Soap Co.** to present handcrafted botanical soaps, highlight active natural ingredients, allow customers to write reviews, and order seamlessly via WhatsApp.

✨ **Live Preview**: [http://localhost:8443](http://localhost:8443) (Local Server) or your live Vercel website.

---

## 🌿 Core Features

* **High-End Editorial Catalog**: A magazine-style "Ingredients Spotlight" section with interactive tabs to explore Glutathione, Red Velvet, and Neem soaps.
* **Dynamic Variant Selector**: Glutathione product detail modal features interactive sizing options (100g Bar, Multipack, or 10g Trial Set) that dynamically update images, pricing, and orders.
* **Seamless WhatsApp Checkout**: Order buttons open a WhatsApp chat directly with a pre-filled purchase message based on the chosen variant and pack size.
* **Live Review System (LocalStorage Database)**: An interactive review collection form allowing users to submit ratings and reviews, persisting locally in the browser's database.
* **Responsive Luxury Aesthetics**: Curated natural HSL color palettes, custom botanical vector SVGs, and soft micro-interactions optimized for both mobile screens and desktop monitors.

---

## 🛠️ Tech Stack

* **Frontend Framework**: React 19 (TypeScript)
* **Build Tool**: Vite 8
* **Styling**: Tailwind CSS v4 (with `@tailwindcss/vite` configuration)
* **Format & Linting**: oxfmt

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone this repository to your local folder:
   ```bash
   git clone https://github.com/madhavnagar101/herbique-product-website.git
   cd herbique-product-website
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:8443/
   ```

---

## 📂 Project Structure

```text
├── .figma/                  # Figma Make environment configuration
├── src/
│   ├── imports/             # High-quality botanical product photos
│   ├── App.tsx              # Primary React codebase (Components & Pages)
│   ├── index.css            # Tailwind CSS imports & theme overrides
│   ├── main.tsx             # React entry mounting script
│   └── vite-env.d.ts        # TypeScript declarations
├── index.html               # Main HTML viewport document shell
├── package.json             # NPM dependencies & project scripts
├── vite.config.ts           # Vite server settings & Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

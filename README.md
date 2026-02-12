# GymOps White-Label Template

This is a premium, high-performance gym website template built with Next.js 14 and Tailwind CSS. It is designed to be fully customizable via a single configuration file.

## 🚀 Quick Start: Brand a New Gym in 10 Minutes

### 1. Clone the Template
```bash
git clone https://github.com/your-org/gymops-template.git new-gym-name
cd new-gym-name
npm install
```

### 2. Configure Branding & Content
Open `config/site.ts`. This is the **single source of truth** for the entire website.

Update the following:
- **Gym Info**: Name, address, contact details, social links.
- **Branding**: Colors (HSL values in `app/globals.css` matching your config), Logo.
- **Hero Section**: Choose a variant (`community`, `results`, `busy`) and update text.
- **Programs**: Add your specific programs and membership options.
- **Schedule**: Define your opening hours and class schedule.
- **Proof**: Add your own testimonials and FAQ items.

### 3. Update Images
The template uses Unsplash placeholders by default.
- Replace the URLs in `config/site.ts` with your own hosted images.
- Or place local images in `public/images/` and reference them (e.g., `/images/hero.jpg`).

### 4. Deploy
```bash
npm run build
# Deploy to Vercel, Netlify, or your preferred host
```

## 🎨 Customization Guide

### colors
The theme uses CSS variables for colors, defined in `app/globals.css`.
To change the color scheme, update the HSL values in `app/globals.css`:
```css
:root {
  --color-primary: 221 83% 53%;   /* Brand Blue */
  --color-secondary: 158 64% 52%; /* Brand Green */
  --color-accent: 35 92% 65%;     /* Brand Orange */
}
```
The `config/site.ts` branding section is for reference and logical usage, but CSS variables control the actual visual theme.

### Sections
The homepage is built from modular components:
- `HeroSection`
- `FeaturesSection`
- `TestimonialsSection`
- `FAQSection`
- `CTASection`

You can reorder or remove these in `app/page.tsx`.

## 🛠 Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Lucide React** (Icons)
- **Framer Motion** (Animations)

## 📄 License
Commercial - GymOps

# Gymbox Noordwijk Website

**Word weer fit, sterk & gezond** 💪

Een moderne, professionele website voor Gymbox Noordwijk, gebouwd met Next.js, TypeScript en Tailwind CSS.

## 🎨 Features

- **Tweetalige ondersteuning** (Nederlands/Engels)
- **Responsive design** - werkt perfect op mobile, tablet en desktop
- **Volledige pagina's**:
  - Home - Hero sectie, USPs, community showcase
  - Over ons - Team, missie, faciliteiten
  - Aanbod - Training opties en services
  - Rooster - Lesrooster (met iframe integratie)
  - Starten - Proefles aanmelding met formulier
  - Ervaringen - Testimonials van leden
  - Tarieven - Prijzen en memberships
  - Contact - Contactformulier en locatie info
- **Merkidentiteit**:
  - Kleuren: Primary Gold (#F5B800), Black (#1A1A1A), White (#FFFFFF)
  - Warm, persoonlijk en community-gericht
  - Optimaal voor conversie met strategische CTA's

## 🚀 Quick Start

### Installatie

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Open browser op http://localhost:3000
```

### Build voor productie

```bash
# Maak production build
npm run build

# Start production server
npm start
```

## 📁 Project Structuur

```
gymboxnoordwijk/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Locale-based routing (nl/en)
│   │   ├── layout.tsx     # Layout met Header/Footer
│   │   ├── page.tsx       # Homepage
│   │   ├── over-ons/      # Over ons pagina's
│   │   ├── aanbod/        # Aanbod pagina's
│   │   ├── rooster/       # Rooster pagina
│   │   ├── ervaringen/    # Testimonials pagina
│   │   ├── tarieven/      # Pricing pagina
│   │   └── contact/       # Contact pagina
│   ├── globals.css        # Global styles & Tailwind
│   ├── sitemap.ts         # Sitemap generator
│   └── robots.ts          # Robots.txt generator
├── components/            # Reusable components
│   ├── Header.tsx         # Navigatie met mobile menu
│   ├── Footer.tsx         # Footer met contact info
│   └── ...               # Andere components
├── messages/              # i18n translations
│   ├── nl.json           # Nederlandse vertalingen
│   └── en.json           # Engelse vertalingen
└── tailwind.config.ts     # Tailwind configuratie met brand colors
```

## 🎨 Branding & Styling

### Kleuren

De huisstijl kleuren zijn geconfigureerd in Tailwind:

- `primary` - #F5B800 (Primary - goud/geel voor buttons, accenten)
- `black` - #1A1A1A (Tekst, headings)
- `gray-light` - #F5F5F5 (Secundaire achtergronden)
- `gray` - #9CA3AF (Subtiele elementen)

### Typography

- **Font**: Inter (Google Fonts via CDN)
- **Fallback**: System fonts voor snelle loading

### Components

Herbruikbare utility classes:
- `.cta-button` - Primaire CTA button (Gold, rounded)
- `.cta-button-secondary` - Secundaire button (Black)
- `.section-padding` - Consistente sectie padding
- `.container-custom` - Container met max-width

## 🔧 Technische Details

### Dependencies

- **Next.js 16** - React framework met App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS framework
- **next-intl** - Internationalization

### Browser Support

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)

## 📱 Responsive Design

Alle pagina's zijn volledig responsive:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📄 License

© 2025 Gymbox Noordwijk. Alle rechten voorbehouden.

## 📞 Contact

- **Email**: welkom@gymboxnoordwijk.nl
- **Instagram**: @gymboxnoordwijk
- **Adres**: Keyserswey 26A, 2201 CW Noordwijk

---

**Gebouwd met ❤️ voor de Gymbox Noordwijk community**

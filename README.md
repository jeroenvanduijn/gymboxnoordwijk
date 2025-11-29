# CrossFit Leiden Website

**Everyday people, exceptionally strong** 💪

Een moderne, professionele website voor CrossFit Leiden, gebouwd met Next.js, TypeScript en Tailwind CSS.

## 🎨 Features

- **Tweetalige ondersteuning** (Nederlands/Engels) - klaar voor implementatie
- **Responsive design** - werkt perfect op mobile, tablet en desktop
- **8 volledige pagina's**:
  - Home - Hero sectie, USPs, community showcase
  - Over ons - Team, missie, faciliteiten
  - Aanbod - Training opties en services
  - Rooster - Lesrooster (met iframe integratie)
  - Starten - Proefles aanmelding met formulier
  - Ervaringen - Testimonials van leden
  - Tarieven - Prijzen en referral programma
  - Contact - Contactformulier en locatie info
- **Merkidentiteit**:
  - Kleuren: Cinnabar (#EF4C37), Verdigris (#0CBABA), Jonquil (#F7CB15), Chinese Violet (#7B6D8D)
  - Warm, informeel en community-gericht
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
crossfitleiden/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout met Header/Footer
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles & Tailwind
│   ├── over-ons/          # Over ons pagina
│   ├── aanbod/            # Aanbod pagina
│   ├── rooster/           # Rooster pagina
│   ├── starten/           # Starten pagina (met form)
│   ├── ervaringen/        # Testimonials pagina
│   ├── tarieven/          # Pricing pagina
│   └── contact/           # Contact pagina (met form)
├── components/            # Reusable components
│   ├── Header.tsx         # Navigatie met mobile menu
│   └── Footer.tsx         # Footer met contact info
├── public/                # Static assets
│   └── images/           # Placeholder voor afbeeldingen
└── tailwind.config.ts     # Tailwind configuratie met brand colors
```

## 🎨 Branding & Styling

### Kleuren

De huisstijl kleuren zijn geconfigureerd in Tailwind:

- `cinnabar` - #EF4C37 (Primary - voor CTA buttons, accenten)
- `verdigris` - #0CBABA (Secondary - voor highlights)
- `jonquil` - #F7CB15 (Tertiary - voor accenten)
- `chinese-violet` - #7B6D8D (Tertiary - voor subtiele accenten)

### Typography

- **Font**: Inter (Google Fonts via CDN)
- **Fallback**: System fonts voor snelle loading

### Components

Herbruikbare utility classes:
- `.cta-button` - Primaire CTA button (Cinnabar)
- `.cta-button-secondary` - Secundaire button (Verdigris)
- `.section-padding` - Consistente sectie padding
- `.container-custom` - Container met max-width

## 📝 Aanpassingen & Volgende Stappen

### 1. Echte Content Toevoegen

**Afbeeldingen**:
- Voeg echte foto's toe in `/public/images/`
- Vervang placeholder emoji's door echte afbeeldingen
- Gebruik foto's van leden in actie (geen stockfoto's)

**Teksten**:
- Personaliseer coaches bio's in `/app/over-ons/page.tsx`
- Update testimonials met echte ledenverhalen in `/app/ervaringen/page.tsx`
- Pas prijzen aan in `/app/tarieven/page.tsx`

### 2. Formulieren Integreren

Momenteel loggen formulieren naar console. Integreer met:
- **Email service** (bijv. SendGrid, Mailgun)
- **CRM/Database** voor lead management
- **Google Forms** als eenvoudige oplossing

Formulieren te integreren:
- `/app/starten/page.tsx` - Proefles aanmelding
- `/app/contact/page.tsx` - Contact formulier

### 3. Rooster Integreren

In `/app/rooster/page.tsx`:
- Vervang placeholder iframe met echte rooster embed
- Mogelijke systemen: WODify, CrossHero, Virtuagym, Google Calendar
- Update lesrooster voorbeeld met echte tijden

### 4. Tweetaligheid Implementeren

Optie 1: **next-intl** (aanbevolen)
```bash
npm install next-intl
```

Optie 2: **Manual** - Dupliceer pages met `/en/` prefix

### 5. SEO Optimaliseren

- [ ] Voeg sitemap.xml toe
- [ ] Configureer robots.txt
- [ ] Voeg Open Graph images toe
- [ ] Update metadata per pagina
- [ ] Google Analytics integreren

### 6. Maps Integreren

In `/app/contact/page.tsx`:
- Voeg Google Maps iframe toe
- Of gebruik Google Maps API voor interactieve kaart

### 7. Social Media

- Update social media links met echte URLs
- Voeg Instagram feed toe (optioneel)
- Implementeer social sharing

## 🔧 Technische Details

### Dependencies

- **Next.js 16** - React framework met App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS framework

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

## 🤝 Contributing

Voor updates of aanpassingen:

1. Clone de repository
2. Maak een nieuwe branch
3. Maak je wijzigingen
4. Test lokaal met `npm run dev`
5. Build met `npm run build`
6. Push naar branch

## 📄 License

© 2025 CrossFit Leiden. Alle rechten voorbehouden.

## 📞 Contact

Voor vragen over de website:
- **Email**: welcome@crossfitleiden.com
- **Telefoon**: 071 - 234 0477
- **Adres**: Rooseveltstraat 49C, 2321 BL Leiden

---

**Gebouwd met ❤️ voor de CrossFit Leiden community**

import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  gym: {
    name: "Gymbox",
    tagline: "Smart training for real life",
    city: "Noordwijk",
    address: "Keyserswey 26a",
    postalCode: "2201 CW",
    email: "welkom@gymboxcrossfit.nl",
    phone: "06 4872 8580",
    openingHours: [
      "Ma-Vr: 06:00 - 21:00",
      "Za: 08:00 - 13:00",
      "Zo: 09:00 - 12:00"
    ],
    socials: {
      instagram: "https://instagram.com/gymboxnoordwijk",
      facebook: "https://facebook.com/gymboxnoordwijk"
    },
    reviewSummary: {
      rating: 5,
      count: 93,
      sourceLabel: "Google Reviews"
    }
  },
  branding: {
    colors: {
      primary: "hsl(225, 12%, 19%)", // Dark charcoal from live site
      secondary: "hsl(158, 64%, 42%)",
      accent: "hsl(45, 100%, 53%)", // Yellow from live site
      background: "hsl(0, 0%, 100%)",
      text: "hsl(215, 19%, 35%)"
    },
    fonts: {
      heading: "Inter",
      body: "Inter"
    },
    logo: "https://8reapzspluqk4ou3.public.blob.vercel-storage.com/gymbox%20logo%20zwart.png"
  },
  navigation: [
    { label: "Aanbod", href: "/aanbod" },
    { label: "Ervaringen", href: "/ervaringen" },
    { label: "Rooster", href: "/rooster" },
    {
      label: "Over Ons",
      href: "/over-ons",
      items: [
        { label: "Over Gymbox Noordwijk", href: "/over-ons" },
        { label: "Het team", href: "/team" },
        { label: "Onze locatie", href: "/contact" },
        { label: "Tarieven", href: "/tarieven" }
      ]
    }
  ],
  hero: {
    variant: "results",
    headline: "Word sterker. Zonder dat je eerst fit hoeft te zijn.",
    subheadline: "Persoonlijke begeleiding in kleine groepen. Voor drukke ouders en professionals die weer energie willen voelen. Geen ervaring nodig. Geen ego’s. Gewoon goed trainen.",
    bullets: [], // Cleared as requested for cleaner look
    cta: "Plan mijn Gratis Intro",
    ctaUrl: "/starten",
    ctaSubtext: "Geen training. Gewoon kennismaken. 20 minuten.",
    image: "https://8reapzspluqk4ou3.public.blob.vercel-storage.com/hero-background-146.jpg",
    reviewBadge: "93+ 5-sterren Google reviews"
  },
  recognition: {
    title: "Herken je dit?",
    bullets: [
      "Je wilt fitter worden, maar weet niet waar te beginnen",
      "Je voelt je niet thuis in een gewone sportschool",
      "Je hebt een druk werk- of gezinsleven",
      "Je wilt begeleiding, geen rondje apparaten"
    ],
    closing: "Bij Gymbox trainen gewone mensen. Met een vol leven. Net als jij."
  },
  howItWorks: {
    steps: [
      {
        title: "Plan een Gratis Intro",
        description: "We maken kennis. Geen sportkleding nodig."
      },
      {
        title: "Persoonlijk plan",
        description: "We bespreken je doelen, je lichaam en je agenda."
      },
      {
        title: "Start met de Kickstart",
        description: "2 personal training sessies om veilig en zelfverzekerd te beginnen."
      }
    ]
  },
  kickstart: {
    title: "De veilige start voor mensen die het spannend vinden",
    subtitle: "90% van onze leden begon hier.",
    bullets: [
      "Leer de basis goed",
      "Krijg vertrouwen",
      "Voorkom blessures",
      "Start met een plan dat bij je past"
    ],
    cta: "Plan mijn Gratis Intro"
  },
  programs: {
    title: "Ons Aanbod",
    subtitle: "Of je nu beginner bent of gevorderd, wij hebben een plan voor jou.",
    primaryOffer: {
      name: "Gratis Intro Gesprek",
      description: "Het perfecte startpunt. Leer ons kennen, bespreek je doelen en ontdek welk programma bij je past.",
      bullets: [
        "Vrijblijvend kennismakingsgesprek",
        "Persoonlijk advies",
        "Rondleiding door de gym"
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      link: "/starten"
    },
    items: [
      {
        title: "Groepslessen",
        description: "Word gezonder, ga voor gezelligheid. Word lid van onze community en behaal je sportieve doelen sneller.",
        icon: "group"
      },
      {
        title: "Personal Training",
        description: "Behaal sneller echt resultaat. Werk met één van onze gespecialiseerde trainers.",
        icon: "personal"
      },
      {
        title: "Voedingscoaching",
        description: "Start met wat je eet. Koppel training aan goede eetgewoontes en geef je resultaten een boost.",
        icon: "nutrition"
      }
    ]
  },
  pricing: {
    title: "Tarieven",
    subtitle: "Geen verborgen kosten. Geen lange contracten. Alleen resultaat.",
    plans: [
      {
        name: "2x / Week",
        price: "€65",
        period: "/maand",
        features: ["8 lessen per maand", "Open Gym toegang", "Community App"],
        cta: "Kies Plan"
      },
      {
        name: "Onbeperkt",
        price: "€85",
        period: "/maand",
        features: ["Onbeperkt lessen", "Open Gym toegang", "Voedingsgids", "Prioriteit boeken"],
        cta: "Kies Plan",
        popular: true
      },
      {
        name: "Strippenkaart",
        price: "€150",
        period: "/10 lessen",
        features: ["6 maanden geldig", "Alle lestypen", "Flexibel"],
        cta: "Koop Nu"
      }
    ]
  },
  schedule: {
    title: "Weekrooster",
    subtitle: "Lessen de hele dag, elke dag. Vind een tijd die bij je past.",
    days: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"]
  },
  proof: {
    scarcityText: "Meer dan 100 leden trainen hier met plezier.",
    testimonials: [
      {
        name: "Marijke",
        role: "Lid (49)",
        quote: "Ik twijfelde jaren. Dit had ik veel eerder moeten doen.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
        name: "Mike",
        role: "Lid (37)",
        quote: "Een hele gezellige box! Lang getwijfeld of crossfit iets voor mij was maar dit had ik jaren eerder moeten doen! Een leuke sfeer gemoedelijk sporten onder professioneel toezicht van motiverende trainers! Echt een aanrader!",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
        name: "Maartje",
        role: "Lid (25)",
        quote: "Lid sinds juni 2023. Mijn lifestyle is helemaal verandert sinds ik sport bij Gymbox. De trainingen zijn intensief en voor iedereen uitdagend. De coaches geven tips en tricks om doelen te stellen en ook te behalen.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
      }
    ],
    faqs: [] // FAQs are now pulled from translations.ts for multi-language support, this array is kept for type compatibility but not used directly
  },
  cta: {
    primaryText: "Plan een Gratis Intro",
    primaryUrl: "/starten",
    secondaryText: "Bekijk Rooster",
    secondaryUrl: "/rooster"
  },
  content: {
    pages: {}
  },
  media: {
    placeholders: {
      hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      community: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80",
      feature: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
    }
  }
};

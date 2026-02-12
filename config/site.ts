import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  gym: {
    name: "Gymbox",
    tagline: "Sterker, fitter en meer energie, zonder gedoe",
    city: "Noordwijk",
    address: "Keyserswey 26",
    postalCode: "2201 CW",
    email: "welkom@gymboxcrossfit.nl",
    phone: "064 872 8580",
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
      primary: "hsl(210, 20%, 25%)",
      secondary: "hsl(158, 64%, 42%)",
      accent: "hsl(35, 92%, 55%)",
      background: "hsl(0, 0%, 100%)",
      text: "hsl(215, 19%, 35%)"
    },
    fonts: {
      heading: "Inter",
      body: "Inter"
    },
    logo: "/images/logo-placeholder.svg"
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Aanbod", href: "/aanbod" },
    { label: "Rooster", href: "/rooster" },
    { label: "Tarieven", href: "/tarieven" },
    { label: "Ervaringen", href: "/ervaringen" },
    { label: "Contact", href: "/contact" }
  ],
  hero: {
    variant: "results",
    headline: "Gymbox",
    subheadline: "Voor drukke ouders en professionals die slim willen trainen met persoonlijke begeleiding.",
    bullets: [
      "Persoonlijke begeleiding",
      "Geen ervaring nodig",
      "Een plan dat werkt voor jouw leven"
    ],
    cta: "Plan een Gratis Intro",
    ctaUrl: "/starten",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
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
    scarcityText: "",
    testimonials: [
      {
        name: "Karlijn",
        role: "Lid sinds 2023",
        quote: "Gymbox heeft mijn leven veranderd. De coaches zijn betrokken en de sfeer is geweldig. Ik voel me fitter en energieker dan ooit!",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
        name: "Erik",
        role: "Lid sinds 2022",
        quote: "Het beste uurtje van mijn dag. Ik kom gestrest binnen en ga vol energie weer weg. De coaches letten echt op je techniek.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
        name: "Anne",
        role: "Lid sinds 2024",
        quote: "Efficiënt, effectief en leuk. Het past perfect in mijn drukke schema. Absolute aanrader!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
      }
    ],
    faqs: [
      {
        question: "Moet ik fit zijn om te beginnen?",
        answer: "Absoluut niet! Onze programma's zijn ontworpen voor alle fitnessniveaus. We passen elke training aan op jouw huidige niveau."
      },
      {
        question: "Hoe vaak moet ik trainen?",
        answer: "Voor beginners raden we 2-3 keer per week aan. Dit geeft genoeg herstel terwijl je consistentie opbouwt."
      },
      {
        question: "Wat moet ik meenemen?",
        answer: "Alleen comfortabele sportkleding, een waterfles en een positieve instelling. Wij regelen de rest!"
      }
    ]
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

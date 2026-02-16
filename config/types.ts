export interface HeroSection {
    variant: 'results' | 'community' | 'busy';
    headline: string;
    subheadline: string;
    bullets: string[];
    cta: string;
    ctaUrl: string;
    ctaSubtext?: string;
    image: string;
    reviewBadge?: string;
}

export interface RecognitionSection {
    title: string;
    bullets: string[];
    closing: string;
}

export interface KickstartSection {
    title: string;
    subtitle: string;
    bullets: string[];
    cta: string;
}

export interface HowItWorksSection {
    steps: {
        title: string;
        description: string;
    }[];
}

export interface ProgramsSection {
    title: string;
    subtitle: string;
    primaryOffer: {
        name: string;
        description: string;
        bullets: string[];
        image: string;
        link: string;
    };
    items: {
        title: string;
        description: string;
        icon?: string;
    }[];
}

export interface PricingSection {
    title: string;
    subtitle: string;
    plans: {
        name: string;
        price: string;
        period: string;
        features: string[];
        cta: string;
        popular?: boolean;
    }[];
}

export interface ScheduleSection {
    title: string;
    subtitle: string;
    days: string[];
}

export interface SocialProofSection {
    scarcityText?: string;
    testimonials: {
        name: string;
        role?: string;
        quote: string;
        image?: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

export interface CtaSection {
    primaryText: string;
    primaryUrl: string;
    secondaryText: string;
    secondaryUrl: string;
}

export interface ContentSection {
    pages: {
        [key: string]: any;
    };
}

export interface MediaConfig {
    placeholders: {
        hero: string;
        community: string;
        feature: string;
    };
}

export interface CalendarConfig {
    online: {
        url: string;
        id: string;
    };
    gym: {
        url: string;
        id: string;
    };
}

export interface NavigationItem {
    label: string;
    href: string;
    items?: {
        label: string;
        href: string;
    }[];
}

export interface GymInfo {
    name: string;
    tagline: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    openingHours: string[];
    socials: {
        instagram?: string;
        facebook?: string;
        youtube?: string;
        tiktok?: string;
        linkedin?: string;
    };
    reviewSummary: {
        rating: number;
        count: number;
        sourceLabel: string;
    };
}

export interface Branding {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
    };
    fonts: {
        heading: string;
        body: string;
    };
    logo: string;
}

export interface SiteConfig {
    gym: GymInfo;
    branding: Branding;
    navigation: NavigationItem[];
    hero: HeroSection;
    recognition: RecognitionSection;
    howItWorks: HowItWorksSection;
    kickstart: KickstartSection;
    programs: ProgramsSection;
    pricing: PricingSection;
    schedule: ScheduleSection;
    proof: SocialProofSection;
    cta: CtaSection;
    content: ContentSection;
    media: MediaConfig;
    calendar: CalendarConfig;
}

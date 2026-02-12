export interface SiteConfig {
    gym: {
        name: string;
        tagline: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        postalCode: string; // Added missing field
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
    };
    branding: {
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
    };
    navigation: {
        label: string;
        href: string;
        items?: {
            label: string;
            href: string;
        }[];
    }[];
    hero: {
        variant: 'community' | 'results' | 'busy';
        headline: string;
        subheadline: string;
        bullets: string[];
        cta: string;
        ctaUrl: string;
        image: string;
    };
    programs: {
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
    };
    pricing: {
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
    };
    schedule: {
        title: string;
        subtitle: string;
        days: string[]; // e.g. ["Mon", "Tue"...]
    };
    proof: {
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
    };
    cta: {
        primaryText: string;
        primaryUrl: string;
        secondaryText: string;
        secondaryUrl: string;
    };
    content: {
        pages: {
            [key: string]: any;
        };
    };
    media: {
        placeholders: {
            hero: string;
            community: string;
            feature: string;
        };
    };
}

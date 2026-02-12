"use client";

import { siteConfig } from "@/config/site";

export default function SchemaOrg() {
    const { name, description, url } = {
        name: siteConfig.gym.name,
        description: siteConfig.hero.subheadline,
        url: "https://demo.gymops.nl" // Should ideally be in config
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness", // or Gym or ExercisePlan
        "name": name,
        "image": siteConfig.hero.image,
        "telephone": siteConfig.gym.phone,
        "email": siteConfig.gym.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.gym.address,
            "addressLocality": siteConfig.gym.city,
            "postalCode": siteConfig.gym.postalCode,
            "addressCountry": "NL"
        },
        "openingHoursSpecification": siteConfig.gym.openingHours.map(hour => {
            // Very basic parsing or just generic string for now
            return {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
            };
        }),
        "url": url,
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

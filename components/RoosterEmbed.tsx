"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function RoosterEmbed() {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <link
                rel="stylesheet"
                href="https://crossfitleiden.sportbitapp.nl/cbm/css/embed/rooster/rooster.css"
                type="text/css"
            />

            <div id="sportbit-rooster" className="min-h-[600px] w-full bg-white rounded-xl shadow-sm">&nbsp;</div>

            <Script
                src="https://crossfitleiden.sportbitapp.nl/cbm/embed/rooster/cdn/"
                strategy="afterInteractive"
                onLoad={() => {
                    // @ts-ignore
                    if (typeof embed_rooster !== 'undefined') {
                        // @ts-ignore
                        embed_rooster.init('https://crossfitleiden.sportbitapp.nl/', 3);
                    }
                }}
            />
        </div>
    );
}

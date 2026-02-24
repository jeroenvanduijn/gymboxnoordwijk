"use client";

import { useEffect, useRef } from "react";

export default function RoosterEmbed() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        // Add stylesheet if not already present
        const linkId = "sportbit-rooster-css";
        if (!document.getElementById(linkId)) {
            const link = document.createElement("link");
            link.id = linkId;
            link.rel = "stylesheet";
            link.href = "https://crossfitleiden.sportbitapp.nl/cbm/css/embed/rooster/rooster.css";
            link.type = "text/css";
            document.head.appendChild(link);
        }

        const initRooster = () => {
            // @ts-ignore
            if (typeof embed_rooster !== 'undefined') {
                // Clear previous content
                const el = document.getElementById('sportbit-rooster');
                if (el) el.innerHTML = '&nbsp;';
                // @ts-ignore
                embed_rooster.init('https://crossfitleiden.sportbitapp.nl/', 3);
            }
        };

        if (scriptLoadedRef.current) {
            // Script already loaded from a previous mount, just re-init
            initRooster();
        } else {
            // Check if script is already in DOM (e.g. from SSR or previous page visit)
            // @ts-ignore
            if (typeof embed_rooster !== 'undefined') {
                scriptLoadedRef.current = true;
                initRooster();
            } else {
                // Load script dynamically
                const script = document.createElement("script");
                script.src = "https://crossfitleiden.sportbitapp.nl/cbm/embed/rooster/cdn/";
                script.async = true;
                script.onload = () => {
                    scriptLoadedRef.current = true;
                    initRooster();
                };
                document.body.appendChild(script);
            }
        }

        return () => {
            // Cleanup: clear the container on unmount to prevent stale content
            const el = document.getElementById('sportbit-rooster');
            if (el) el.innerHTML = '&nbsp;';
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full max-w-6xl mx-auto">
            <div id="sportbit-rooster" className="min-h-[600px] w-full bg-white rounded-xl shadow-sm">&nbsp;</div>
        </div>
    );
}

"use client";

import { useTranslations } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function IntakePlannenPage() {
    const t = useTranslations();
    const [activeTab, setActiveTab] = useState<'online' | 'gym'>('online');

    useEffect(() => {
        // Remove existing scripts to force reload
        const scripts = document.querySelectorAll('script[src="https://links.gymops.nl/js/form_embed.js"]');
        scripts.forEach(script => script.remove());

        // Create and append new script
        const script = document.createElement("script");
        script.src = "https://links.gymops.nl/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true; // Ensure async loading
        document.body.appendChild(script);

        return () => {
            // Optional: cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, [activeTab]); // Re-run when tab changes to resize new iframe

    return (
        <main className="pt-24 min-h-screen bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto py-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-headings text-gray-900">
                        {activeTab === 'online' ? "Online Kennismaken" : "Kennismaken op de Gym"}
                    </h1>
                    <p className="text-lg text-gray-600">
                        Kies hieronder hoe je wilt kennismaken.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
                        <button
                            onClick={() => setActiveTab('online')}
                            className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'online' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            Online (Video/Tel)
                        </button>
                        <button
                            onClick={() => setActiveTab('gym')}
                            className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'gym' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            Op de Gym
                        </button>
                    </div>
                </div>

                {/* Embeds */}
                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 min-h-[800px]">
                    {activeTab === 'online' ? (
                        <div key="online" className="w-full">
                            <iframe
                                src={siteConfig.calendar.online.url}
                                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }}
                                scrolling="no"
                                id={siteConfig.calendar.online.id}
                            ></iframe>
                        </div>
                    ) : (
                        <div key="gym" className="w-full">
                            <iframe
                                src={siteConfig.calendar.gym.url}
                                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }}
                                scrolling="no"
                                id={siteConfig.calendar.gym.id}
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

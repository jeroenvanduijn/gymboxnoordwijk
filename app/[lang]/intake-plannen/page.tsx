"use client";

import { useTranslations } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function IntakePlannenPage() {
    const t = useTranslations();
    const [activeTab, setActiveTab] = useState<'online' | 'gym'>('online');

    useEffect(() => {
        // Force reload of scripts when tab changes to ensure iframes render
        const scripts = document.querySelectorAll('script[src="https://links.gymops.nl/js/form_embed.js"]');
        scripts.forEach(script => script.remove());

        const script = document.createElement("script");
        script.src = "https://links.gymops.nl/js/form_embed.js";
        script.type = "text/javascript";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [activeTab]);

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
                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 min-h-[600px]">
                    {activeTab === 'online' ? (
                        <div key="online" className="w-full">
                            <iframe
                                src="https://links.gymops.nl/widget/booking/t8elIgaELFyNtGZ5tBdj"
                                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                                scrolling="no"
                                id="F2vr6FiRZ8EEcaCqyjPU_1771243018732"
                            ></iframe>
                        </div>
                    ) : (
                        <div key="gym" className="w-full">
                            <iframe
                                src="https://links.gymops.nl/widget/booking/viZvu1nseVtAUQ3FzULQ"
                                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                                scrolling="no"
                                id="F2vr6FiRZ8EEcaCqyjPU_1771243052700"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
            <Script src="https://links.gymops.nl/js/form_embed.js" strategy="lazyOnload" />
        </main>
    );
}

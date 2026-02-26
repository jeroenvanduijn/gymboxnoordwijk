"use client";

import Script from "next/script";

export default function IntakePlannenPage() {
    return (
        <main className="pt-24 min-h-screen bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto py-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-headings text-gray-900">
                        Kennismaken op de Gym
                    </h1>
                    <p className="text-lg text-gray-600">
                        Plan hieronder je gratis en vrijblijvende introductie in.
                    </p>
                </div>

                {/* Embed */}
                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 min-h-[800px] w-full">
                    <iframe
                        src="https://links.gymops.nl/widget/booking/viZvu1nseVtAUQ3FzULQ"
                        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "800px" }}
                        scrolling="no"
                        id="F2vr6FiRZ8EEcaCqyjPU_1772118770567"
                        title="Gymbox Intake Calendar"
                    />
                    <Script
                        src="https://links.gymops.nl/js/form_embed.js"
                        strategy="afterInteractive"
                    />
                </div>
            </div>
        </main>
    );
}

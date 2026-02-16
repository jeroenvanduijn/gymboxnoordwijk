"use client";

import { useTranslations } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function TeamPage() {
    const t = useTranslations();
    const { overOns } = t;

    return (
        <main className="pt-24 pb-20">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headings text-gray-900">
                        {overOns.teamTitle}
                    </h1>
                    <p className="text-xl text-gray-600">
                        Ontmoet de mensen achter Gymbox.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {overOns.teamMembers.map((member, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="h-64 bg-gray-200 relative">
                                {/* Placeholder for now */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-4xl">📷</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-headings mb-2">{member}</h3>
                                <p className="text-gray-600 text-sm">Coach</p>
                                <p className="mt-4 text-gray-500 italic">
                                    "Hier komt het persoonlijke verhaal van {member}..."
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

"use client";

import { useTranslations } from "@/context/LanguageContext";
import { usePopup } from "@/context/PopupContext";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Dumbbell, MessageCircle, Play, ArrowRight } from "lucide-react";

export default function LinksPage() {
    const t = useTranslations();
    const { openPopup } = usePopup();

    const links = [
        {
            title: t.links.freeIntro,
            onClick: openPopup,
            icon: Play,
            primary: true,
        },
        {
            title: t.links.kickstart,
            href: "/aanbod", // Anchor to kickstart if possible, linking to aanbod for now
            icon: ArrowRight,
        },
        {
            title: t.links.dropIn,
            href: "/drop-in",
            icon: Dumbbell,
        },
        {
            title: t.links.whatsapp,
            href: "https://wa.me/31648728580",
            icon: MessageCircle,
            external: true,
        },
        {
            title: t.links.schedule,
            href: "/rooster",
            icon: Calendar,
        },
    ];

    return (
        <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-6 font-sans">
            <div className="w-full max-w-md mx-auto flex flex-col items-center pt-8">

                {/* Logo & Header */}
                <div className="mb-10 text-center flex flex-col items-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden border-4 border-gray-800 shadow-xl">
                        {/* Using text logo if image isn't perfect, but assuming logo fits */}
                        <span className="font-headings font-black text-primary text-3xl">GB</span>
                    </div>
                    <h1 className="text-2xl font-bold font-headings tracking-tight">Gymbox Noordwijk</h1>
                    <p className="text-gray-400 mt-2 text-sm">{t.hero.tagline}</p>
                </div>

                {/* Links Container */}
                <div className="w-full space-y-4">
                    {links.map((link, i) => {
                        const Icon = link.icon;
                        const blockClass = `
                            group relative w-full flex items-center justify-center p-5 rounded-2xl
                            font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
                            overflow-hidden border
                            ${link.primary
                                ? "bg-accent text-primary border-accent shadow-lg"
                                : "bg-gray-800 text-white border-gray-700 hover:border-gray-500 hover:bg-gray-700"
                            }
                        `;

                        // If it's the popup button (Free Intro)
                        if (link.onClick) {
                            return (
                                <button key={i} onClick={link.onClick} className={blockClass}>
                                    <div className={`absolute left-5 w-8 h-8 rounded-full flex items-center justify-center ${link.primary ? 'bg-primary/10 text-primary' : 'bg-gray-700 text-gray-300'}`}>
                                        <Icon size={16} />
                                    </div>
                                    <span className="tracking-wide relative z-10">{link.title}</span>
                                </button>
                            );
                        }

                        // Normal Links
                        return (
                            <Link
                                key={i}
                                href={link.href!}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className={blockClass}
                            >
                                <div className={`absolute left-5 w-8 h-8 rounded-full flex items-center justify-center ${link.primary ? 'bg-primary/10 text-primary' : 'bg-gray-700 text-gray-300'}`}>
                                    <Icon size={16} />
                                </div>
                                <span className="tracking-wide relative z-10">{link.title}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Gymbox. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}

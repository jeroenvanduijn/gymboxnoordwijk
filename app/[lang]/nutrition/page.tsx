"use client";

import Link from "next/link";
import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";

export default function Nutrition() {
  const content = siteConfig.programs.items.find(i => i.icon === 'nutrition') || {
    title: "Nutrition Coaching",
    description: "Fuel your body right with simple, sustainable habits."
  };

  return (
    <>
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nutrition Coaching</h1>
          <p className="text-xl max-w-2xl">
            {content.description}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-lg text-gray-700 mb-6">
            Fitness is 100% mentality, but results are 80% nutrition. Our coaching helps you build sustainable habits without restrictive diets.
          </p>
          <ul className="space-y-4 mb-8">
            {["Personalized Meal Plans", "Weekly Check-ins", "Habit Tracking", "Supplement Guidance"].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA variant="footer" href="/starten" />
    </>
  );
}

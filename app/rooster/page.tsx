"use client";

import Link from "next/link";
import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";

export default function Rooster() {
  const content = siteConfig.schedule;

  // Mock times for the visual schedule
  const timeSlots = ["07:00", "09:00", "12:00", "17:30", "18:30", "19:30"];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
          <p className="text-xl max-w-2xl">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Static Demo Schedule */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="min-w-[800px] border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-8 bg-gray-50 border-b border-gray-200">
                <div className="p-4 font-bold text-gray-500">Time</div>
                {content.days.map((day, i) => (
                  <div key={i} className="p-4 font-bold text-center text-gray-800 border-l border-gray-200">{day}</div>
                ))}
              </div>

              {timeSlots.map((time, timeIndex) => (
                <div key={timeIndex} className="grid grid-cols-8 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <div className="p-4 font-semibold text-gray-500 bg-gray-50/50">{time}</div>
                  {content.days.map((day, dayIndex) => {
                    // Randomize classes for demo effect
                    const hasClass = (timeIndex + dayIndex) % 3 !== 0;
                    return (
                      <div key={dayIndex} className="p-2 border-l border-gray-100 min-h-[80px]">
                        {hasClass && (
                          <div className="bg-primary/10 text-primary p-2 rounded text-xs font-semibold text-center h-full flex flex-col justify-center">
                            {timeIndex % 2 === 0 ? "WOD" : "Strength"}
                            <span className="block opacity-75 font-normal mt-1">10 / 12</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 italic mt-6">
              * This is a sample schedule. Actual class times may vary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="footer"
        href="/starten"
      />
    </>
  );
}

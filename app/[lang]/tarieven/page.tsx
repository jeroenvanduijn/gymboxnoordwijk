"use client";

import Link from "next/link";
import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function Tarieven() {
  const t = useTranslations();
  const content = siteConfig.pricing;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
          <p className="text-xl max-w-2xl mb-6">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {content.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${plan.popular ? "ring-4 ring-primary transform md:scale-105 relative z-10" : ""
                  }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 font-semibold text-sm">
                    {t.programs.mostPopular.toUpperCase()}
                  </div>
                )}
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2 text-sm">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-secondary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <Link
                    href="/starten"
                    className={`block text-center py-3 rounded-lg font-semibold transition-all ${plan.popular
                      ? "bg-primary text-white hover:opacity-90 shadow-md"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            {t.pricing.disclaimer}
          </p>
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

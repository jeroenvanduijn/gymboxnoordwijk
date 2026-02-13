"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function Starten() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "general"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Start form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.starten.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t.starten.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto">
          {!submitted ? (
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-center">{t.starten.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">{t.forms.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    placeholder={t.forms.placeholder.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{t.forms.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    placeholder={t.forms.placeholder.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{t.forms.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    placeholder={t.forms.placeholder.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{t.forms.goal}</label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option value="general">{t.forms.goals.general}</option>
                    <option value="weightloss">{t.forms.goals.weightloss}</option>
                    <option value="muscle">{t.forms.goals.muscle}</option>
                    <option value="sport">{t.forms.goals.sport}</option>
                    <option value="other">{t.forms.goals.other}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all shadow-md text-lg"
                >
                  {t.cta.primaryText}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-green-50 p-12 rounded-2xl text-center border border-green-100">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">{t.starten.success.title}</h2>
              <p className="text-lg text-green-700">
                {t.starten.success.message}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

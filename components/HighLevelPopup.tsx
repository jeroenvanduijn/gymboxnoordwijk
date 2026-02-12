"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/context/LanguageContext";

export default function HighLevelPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    (window as any).openDemoPopup = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    (window as any).closeDemoPopup = () => {
      setIsOpen(false);
      document.body.style.overflow = '';
    };

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      delete (window as any).openDemoPopup;
      delete (window as any).closeDemoPopup;
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
          document.body.style.overflow = '';
        }
      }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.popup.title}</h3>
              <p className="text-gray-600">{t.popup.subtitle}</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = '';
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.forms.name}</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t.forms.placeholder.name} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.forms.email}</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t.forms.placeholder.email} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.forms.phone}</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t.forms.placeholder.phone} />
            </div>

            <div className="pt-2">
              <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all shadow-md">
                {t.cta.primaryText}
              </button>
            </div>

            <p className="text-xs text-center text-gray-400 mt-4">
              {t.popup.disclaimer}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

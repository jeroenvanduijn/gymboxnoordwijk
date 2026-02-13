"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/context/LanguageContext";

export default function HighLevelPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    (window as any).openDemoPopup = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
      setSubmitStatus("idle");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Get page history
      const storageKey = "gymbox_page_history";
      const historyString = sessionStorage.getItem(storageKey);
      const pageHistory = historyString ? JSON.parse(historyString).join(" > ") : "";

      // Payload for GHL Webhook
      // User needs to provide the Webhook URL
      const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "";

      if (!webhookUrl) {
        console.warn("GHL Webhook URL not set. Data:", { ...formData, page_history: pageHistory });
        // Simulate success for demo
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus("success");
        setTimeout(() => {
          setIsOpen(false);
          document.body.style.overflow = '';
          setFormData({ name: "", email: "", phone: "" });
        }, 2000);
        return;
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          page_history: pageHistory,
          form_source: "Website Popup",
          url: window.location.href
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          setIsOpen(false);
          document.body.style.overflow = '';
          setFormData({ name: "", email: "", phone: "" });
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }

    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {submitStatus === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Bedankt!</h4>
              <p className="text-gray-600">We hebben je gegevens ontvangen en nemen snel contact op.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.forms.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder={t.forms.placeholder.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.forms.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder={t.forms.placeholder.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.forms.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder={t.forms.placeholder.phone}
                />
              </div>

              {submitStatus === "error" && (
                <div className="text-red-500 text-sm text-center">
                  Er ging iets mis. Probeer het later opnieuw.
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {isSubmitting ? "Versturen..." : t.cta.primaryText}
                </button>
              </div>

              <p className="text-xs text-center text-gray-400 mt-4">
                {t.popup.disclaimer}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

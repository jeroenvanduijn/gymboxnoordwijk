"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // Here you can initialize analytics or other tracking
    console.log("Cookies accepted");
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    // Here you can disable analytics or other tracking
    console.log("Cookies rejected");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-gradient-to-t from-black/95 to-black/90 backdrop-blur-sm">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">🍪</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    We gebruiken cookies
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    We gebruiken cookies om je ervaring te verbeteren en onze website te analyseren.
                    {!showDetails && (
                      <button
                        onClick={() => setShowDetails(true)}
                        className="text-cinnabar hover:underline ml-1 font-medium"
                      >
                        Meer info
                      </button>
                    )}
                  </p>

                  {/* Detailed Information */}
                  {showDetails && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-3 text-sm">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">🔧 Functionele cookies (verplicht)</h4>
                        <p className="text-gray-600">
                          Noodzakelijk voor de werking van de website. Deze cookies kunnen niet worden uitgeschakeld.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">📊 Analytische cookies</h4>
                        <p className="text-gray-600">
                          Helpen ons begrijpen hoe bezoekers onze website gebruiken, zodat we deze kunnen verbeteren.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">🎯 Marketing cookies</h4>
                        <p className="text-gray-600">
                          Gebruikt voor het weergeven van relevante advertenties en het meten van campagne-effectiviteit.
                        </p>
                      </div>
                      <p className="text-gray-600 pt-2">
                        Lees meer in ons{" "}
                        <Link href="/privacy" className="text-cinnabar hover:underline font-medium">
                          privacybeleid
                        </Link>
                        .
                      </p>
                      <button
                        onClick={() => setShowDetails(false)}
                        className="text-cinnabar hover:underline font-medium"
                      >
                        Verberg details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all whitespace-nowrap"
              >
                Alleen noodzakelijk
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-lg font-semibold bg-cinnabar text-white hover:bg-cinnabar/90 transition-all shadow-lg whitespace-nowrap"
              >
                Accepteer alles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

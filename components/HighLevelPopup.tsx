"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function HighLevelPopup() {
  const t = useTranslations('popups.cta');

  useEffect(() => {
    // Load the HighLevel script
    const script = document.createElement('script');
    script.src = 'https://kilo.gymleadmachine.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Open popup function (called by CTA buttons via window.openCFLPopup())
    (window as any).openCFLPopup = () => {
      const modal = document.getElementById('cfl-popup-modal');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent body scroll
      }
    };

    // Close popup function
    (window as any).closeCFLPopup = () => {
      const modal = document.getElementById('cfl-popup-modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scroll
      }
    };

    // Close on ESC key
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        (window as any).closeCFLPopup();
      }
    };

    // Close when clicking overlay (outside popup)
    const handleOverlayClick = (e: MouseEvent) => {
      const modal = document.getElementById('cfl-popup-modal');
      if (e.target === modal) {
        (window as any).closeCFLPopup();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    const modal = document.getElementById('cfl-popup-modal');
    if (modal) {
      modal.addEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      if (modal) {
        modal.removeEventListener('click', handleOverlayClick);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Niet verwijderen - deze functies moeten beschikbaar blijven
      // voor CTA buttons die mogelijk na cleanup nog proberen te openen
    };
  }, []);

  return (
    <>
      {/* Modal Overlay + Popup Container */}
      <div id="cfl-popup-modal" style={{ display: 'none' }}>
        {/* Popup Content */}
        <div className="cfl-popup-content">
          {/* Close Button */}
          <button
            className="cfl-popup-close"
            onClick={() => (window as any).closeCFLPopup()}
            aria-label={t('close')}
          >
            ×
          </button>

          {/* Header Section - Improved */}
          <div className="cfl-popup-header">
            <h3>{t('title')}</h3>
            <p
              className="cfl-popup-subtitle"
              dangerouslySetInnerHTML={{ __html: t('subtitle') }}
            />
          </div>

          {/* HighLevel Form Iframe */}
          <div className="cfl-popup-form">
            <iframe
              src="https://kilo.gymleadmachine.com/widget/form/nGDExYgYZcuHjGNwCsue"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px'
              }}
              id="inline-nGDExYgYZcuHjGNwCsue"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website Form"
              data-height="600"
              data-layout-iframe-id="inline-nGDExYgYZcuHjGNwCsue"
              data-form-id="nGDExYgYZcuHjGNwCsue"
              title="Website Form"
            />
          </div>
        </div>
      </div>

      {/* Inline Styles - Updated */}
      <style jsx>{`
        /* Overlay */
        #cfl-popup-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }

        /* Popup Content Container - Improved spacing */
        .cfl-popup-content {
          position: relative;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
          max-width: 640px;
          width: 100%;
          max-height: 90vh;
          padding: 40px;
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
          margin: auto;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Close Button - Softer */
        .cfl-popup-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f5f5f5;
          border: none;
          font-size: 24px;
          line-height: 1;
          color: #666;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.2s ease;
          z-index: 10;
          font-weight: 300;
        }

        .cfl-popup-close:hover {
          background: #e0e0e0;
          color: #333;
        }

        /* Header Section - Warmer, more spacious */
        .cfl-popup-header {
          margin-bottom: 32px;
          padding-right: 50px;
          text-align: left;
        }

        .cfl-popup-header h3 {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .cfl-popup-subtitle {
          font-size: 16px;
          color: #555;
          margin: 0;
          line-height: 1.7;
        }

        .cfl-popup-subtitle strong {
          color: #E25C2A;
          font-weight: 600;
        }

        /* Form Container - Cleaner */
        .cfl-popup-form {
          width: 100%;
          min-height: 600px;
          height: auto;
          background: transparent;
          border-radius: 8px;
          overflow: visible;
          margin-bottom: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 640px) {
          #cfl-popup-modal {
            padding: 12px;
          }

          .cfl-popup-content {
            max-width: 100%;
            max-height: 95vh;
            padding: 24px;
            border-radius: 12px;
          }

          .cfl-popup-header {
            margin-bottom: 8px;
            padding-right: 40px;
          }

          .cfl-popup-header h3 {
            font-size: 22px;
          }

          .cfl-popup-subtitle {
            font-size: 15px;
          }

          .cfl-popup-close {
            top: 16px;
            right: 16px;
            font-size: 22px;
            padding: 6px 10px;
          }

          .cfl-popup-form {
            min-height: 500px;
          }
        }
      `}</style>
    </>
  );
}

/*
NOTE FOR DEVELOPERS:
To open this popup from any CTA button, call:
  window.openCFLPopup()

Example in CTAButton component:
  onClick={() => window.openCFLPopup()}
*/

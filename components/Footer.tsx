"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/context/LanguageContext";

export default function Footer() {
  const t = useTranslations();
  const { name, tagline, email, phone, address, postalCode, city, socials } = siteConfig.gym;

  const navLabels: Record<string, string> = {
    "/": t.nav.home,
    "/aanbod": t.nav.programs,
    "/rooster": t.nav.schedule,
    "/tarieven": t.nav.pricing,
    "/ervaringen": t.nav.testimonials,
    "/contact": t.nav.contact,
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-white text-xl font-heading font-bold mb-4">
              {name}
            </h3>
            <p className="text-sm text-gray-400 italic">
              {t.hero.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.slice(0, 4).map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-primary transition-colors">{navLabels[item.href] || item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.info}</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.slice(4).map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-primary transition-colors">{navLabels[item.href] || item.label}</Link></li>
              ))}
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">{t.footer.terms}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>{address}</li>
              <li>{postalCode} {city}</li>
              <li className="pt-2">
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                  {phone}
                </a>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary cursor-pointer transition-colors text-white" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              )}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary cursor-pointer transition-colors text-white" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {name}. {t.footer.allRights}</p>

          <a href="https://gymops.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer group relative">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Powered by GymOps</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

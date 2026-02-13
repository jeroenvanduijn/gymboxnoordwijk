"use client";

import { siteConfig } from "@/config/site";

export default function Privacy() {
  return (
    <section className="section-padding bg-white max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-blue max-w-none text-gray-700">
        <p>This is a generic privacy policy placeholder for {siteConfig.gym.name}.</p>
        <h3>1. Data Collection</h3>
        <p>We collect personal information that you voluntarily provide to us when you register for an account, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
        {/* Add more generic privacy text here */}
        <p className="mt-8 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </section>
  );
}

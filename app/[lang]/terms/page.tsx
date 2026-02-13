"use client";

import { siteConfig } from "@/config/site";

export default function Terms() {
  return (
    <section className="section-padding bg-white max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-blue max-w-none text-gray-700">
        <p>This is a generic terms and conditions placeholder for {siteConfig.gym.name}.</p>
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h3>2. Membership</h3>
        <p>All memberships are subject to approval by management. {siteConfig.gym.name} reserves the right to refuse service to anyone for any reason at any time.</p>

        {/* Add more generic terms text here */}
        <p className="mt-8 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </section>
  );
}

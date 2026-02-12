"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Opzeggen() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Membership Cancellation</h1>
        <p className="mb-4 text-gray-700">
          We're sorry to see you go! If there is anything we can do to improve your experience, please let us know.
        </p>
        <p className="mb-8 text-gray-700">
          To cancel your membership, please send an email to <a href={`mailto:${siteConfig.gym.email}`} className="text-primary hover:underline">{siteConfig.gym.email}</a> with your name and reason for cancellation.
        </p>
        <p className="text-sm text-gray-500">
          * Please note a 1-month notice period applies to all recurrent memberships.
        </p>
        <Link href="/" className="inline-block mt-8 text-primary font-semibold hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    </section>
  );
}

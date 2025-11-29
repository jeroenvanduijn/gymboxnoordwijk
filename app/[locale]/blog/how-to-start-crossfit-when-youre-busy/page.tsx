"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';

export default function BlogPost() {
  const locale = useLocale();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-cinnabar">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-cinnabar">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">How to Start CrossFit When You're Busy With Work and Kids</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-cinnabar font-semibold">Training Tips</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">5 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Start CrossFit When You're Busy With Work and Kids</h1>

          {/* Image */}
          <div className="aspect-video rounded-xl mb-8 overflow-hidden">
            <img
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-61.jpg"
              alt="Busy parent training at CrossFit Leiden"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">If you have a full-time job and kids at home, you probably feel like there's no time for the gym. We hear this a lot. Many parents think they're too busy or too tired to start training.</p>

            <p className="text-lg leading-relaxed">But here's the truth: you don't need hours of free time to get stronger and healthier. You just need one hour, two or three times a week.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Classes Are Only 60 Minutes</h2>

            <p className="text-lg leading-relaxed">Every class at CrossFit Leiden takes exactly one hour. You come in, warm up, learn the movements, do the workout, and you're done. No long gym sessions. No wandering around wondering what to do next.</p>

            <p className="text-lg leading-relaxed">We also offer early morning classes (6:00 AM) and evening classes (up to 8:00 PM), so you can train before the kids wake up or after bedtime.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">You're Not Alone</h2>

            <p className="text-lg leading-relaxed">Most of our members are between 35 and 45 years old. They have jobs. They have families. They understand what it's like to juggle everything.</p>

            <p className="text-lg leading-relaxed">You'll be training next to other parents and professionals who are in the same phase of life. That makes it easier to stay motivated and keep going.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">More Energy for Your Family</h2>

            <p className="text-lg leading-relaxed">Here's what happens when you start training regularly: you get more energy, not less. You sleep better. Your mood improves. You feel stronger when you play with your kids or carry groceries.</p>

            <p className="text-lg leading-relaxed">Training doesn't take time away from your family. It gives you more energy to enjoy your time with them.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Personal Coaching in Every Class</h2>

            <p className="text-lg leading-relaxed">You never train alone. Every class has a coach who watches you, helps you with technique, and makes sure the workout fits your level. If you need to go lighter or take a break, that's totally fine.</p>

            <p className="text-lg leading-relaxed">We know you're busy. We know you're tired. That's exactly why we're here to help you take that first step.</p>

            <p className="text-lg leading-relaxed mt-6"><strong>Ready to start? Schedule a free intro and see how we can help you get stronger, even with a busy life.</strong></p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-700 mb-6">Schedule your free intro and see how CrossFit Leiden can fit into your busy life.</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                  (window as any).openCFLPopup();
                }
              }}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md cursor-pointer"
            >
              Schedule Free Intro
            </button>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href={`/${locale}/blog`} className="text-cinnabar font-semibold hover:underline inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

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
            <span className="text-gray-900">Why 80% of Our Members Start as Complete Beginners</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-cinnabar font-semibold">Community</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">5 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why 80% of Our Members Start as Complete Beginners</h1>

          {/* Image */}
          <div className="aspect-video rounded-xl mb-8 overflow-hidden">
            <img
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-64.jpg"
              alt="Beginners training at CrossFit Leiden"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">There's a common myth about CrossFit: that it's only for athletes or people who are already super fit.</p>

            <p className="text-lg leading-relaxed">Let's clear that up right now. Most people who walk through our doors have never done CrossFit before. Many have never lifted weights. Some haven't exercised in years.</p>

            <p className="text-lg leading-relaxed">And that's completely normal.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Our Typical Member</h2>

            <p className="text-lg leading-relaxed">The average CrossFit Leiden member is between 35 and 55 years old. They have a job. Many have kids. They're not professional athletes. They're just people who want to feel stronger, healthier, and more confident.</p>

            <p className="text-lg leading-relaxed">They come to us because they're tired of feeling tired. They want more energy. They want to feel good in their body again.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">We Scale Every Workout for Your Level</h2>

            <p className="text-lg leading-relaxed">Here's how it works: every workout can be adjusted to match your fitness level. We call this "scaling."</p>

            <p className="text-lg leading-relaxed">If the workout says 20 push-ups and you can't do 20 yet, you do them on your knees. Or you do 10 instead of 20. Or you do them against a box.</p>

            <p className="text-lg leading-relaxed">If the workout includes pull-ups and you've never done one, you use a resistance band to help you. Or you do ring rows instead.</p>

            <p className="text-lg leading-relaxed">Your coach will show you the right version for you. You're never expected to do something you're not ready for.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Small Wins Add Up</h2>

            <p className="text-lg leading-relaxed">In your first month, you might learn how to squat properly. That's a win.</p>

            <p className="text-lg leading-relaxed">In month two, you might do your first push-up without using your knees. Another win.</p>

            <p className="text-lg leading-relaxed">In month three, you might lift a barbell for the first time. These small steps build your strength and confidence over time.</p>

            <p className="text-lg leading-relaxed">You don't need to be the strongest person in the room. You just need to show up and do your best.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">You Don't Need to Be Fit to Start</h2>

            <p className="text-lg leading-relaxed">Here's the truth: you don't need to be fit to start CrossFit. You get fit by starting.</p>

            <p className="text-lg leading-relaxed">Every single person who is strong and confident now was once a beginner. They started exactly where you are. And they got better by showing up, learning, and taking it step by step.</p>

            <p className="text-lg leading-relaxed"><strong>Ready to take your first step? Schedule a free intro and see how we help beginners build strength safely.</strong></p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-700 mb-6">Join the 80% who started as complete beginners. Schedule your free intro today.</p>
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

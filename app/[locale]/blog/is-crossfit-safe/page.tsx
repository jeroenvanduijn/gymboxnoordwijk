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
            <span className="text-gray-900">Is CrossFit Safe?</span>
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
            <span className="text-gray-500">6 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Is CrossFit Safe? Here's How We Make It Safe at CrossFit Leiden</h1>

          {/* Image */}
          <div className="aspect-video rounded-xl mb-8 overflow-hidden">
            <img
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-62.jpg"
              alt="Safe training with coaching at CrossFit Leiden"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">One of the biggest worries people have before starting CrossFit is: "Will I get injured?"</p>

            <p className="text-lg leading-relaxed">It's a fair question. You've probably seen videos of people lifting heavy weights or doing complicated movements. And if you've never done this before, it can look a bit scary.</p>

            <p className="text-lg leading-relaxed">So let's talk about how we keep you safe at CrossFit Leiden.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Technique Comes First, Always</h2>

            <p className="text-lg leading-relaxed">Before you add any weight, you learn the movement. We start with a PVC pipe or an empty barbell. We teach you the right technique step by step.</p>

            <p className="text-lg leading-relaxed">Only when your coach sees that you can do the movement safely, we add a little bit of weight. And we do this slowly, over weeks and months.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Coaches Are Always Watching You</h2>

            <p className="text-lg leading-relaxed">Every class has a professional coach. They don't just explain the workout and walk away. They stay with you during the entire class.</p>

            <p className="text-lg leading-relaxed">They watch your form. They correct small mistakes before they become big problems. They make sure you're using the right weight for your level.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Most Members Start With Zero Experience</h2>

            <p className="text-lg leading-relaxed">About 80% of our members had no CrossFit or weightlifting experience when they started. Some had never been to a gym before.</p>

            <p className="text-lg leading-relaxed">They all started light, learned the basics, and built strength over time. That's the normal path. You don't need to be fit or strong to start. You get fit and strong by starting.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">We Have a Physio in the Gym</h2>

            <p className="text-lg leading-relaxed">CrossFit Leiden works closely with Fysiofabriek, a professional physiotherapy practice with a treatment room inside our gym.</p>

            <p className="text-lg leading-relaxed">If you ever have a small injury or discomfort, you can get quick help without going to another location. Our coaches and physio work together to keep you safe and healthy.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Your Safety Is Our Priority</h2>

            <p className="text-lg leading-relaxed">We don't push you to do things you're not ready for. We don't care about how much weight you lift on day one. We care about keeping you healthy, strong, and injury-free for years to come.</p>

            <p className="text-lg leading-relaxed mt-6"><strong>Want to see how we work? Schedule a free intro and ask us all your questions about safety and training.</strong></p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-700 mb-6">Schedule your free intro and see how we prioritize safety at CrossFit Leiden.</p>
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

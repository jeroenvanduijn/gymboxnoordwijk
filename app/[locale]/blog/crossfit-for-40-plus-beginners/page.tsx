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
            <span className="text-gray-900">CrossFit for 40+ Beginners</span>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CrossFit for 40+ Beginners: Getting Stronger Without Injuries</h1>

          {/* Image */}
          <div className="aspect-video rounded-xl mb-8 overflow-hidden">
            <img
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-65.jpg"
              alt="40+ beginners training at CrossFit Leiden"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">If you're over 40 and thinking about starting CrossFit, you might have some worries. "Am I too old?" "Will I get injured?" "Is this safe for someone my age?"</p>

            <p className="text-lg leading-relaxed">These are normal questions. And the answer is simple: it's never too late to start getting stronger.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Why Strength Training Matters After 40</h2>

            <p className="text-lg leading-relaxed">As you get older, you naturally lose muscle mass and bone density. This can lead to weaker joints, less energy, and a higher risk of injury in daily life.</p>

            <p className="text-lg leading-relaxed">Strength training helps you reverse this process. It builds muscle, strengthens your bones, improves your balance, and keeps your joints healthy.</p>

            <p className="text-lg leading-relaxed">The result? You feel stronger, move better, and have more energy for the things you love.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">We Start Slow and Build Smart</h2>

            <p className="text-lg leading-relaxed">At CrossFit Leiden, we don't rush you. We start with light weights and simple movements. We focus on teaching you proper technique before we add any load.</p>

            <p className="text-lg leading-relaxed">Your coach will work with you based on your current fitness level and any past injuries or limitations. If something doesn't feel right, we adjust.</p>

            <p className="text-lg leading-relaxed">We care more about keeping you safe and consistent than pushing you too hard too fast.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Coaching Makes the Difference</h2>

            <p className="text-lg leading-relaxed">You're never alone in a class. A professional coach is always there, watching your form and making corrections.</p>

            <p className="text-lg leading-relaxed">This is especially important for beginners over 40. Small mistakes in technique can lead to discomfort or injury. A good coach helps you avoid those mistakes from day one.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Real Benefits You'll Notice</h2>

            <p className="text-lg leading-relaxed">Here's what many of our 40+ members tell us after a few months of training:</p>

            <ul>
              <li>Less back pain and joint stiffness</li>
              <li>More energy throughout the day</li>
              <li>Better posture and mobility</li>
              <li>Stronger legs for stairs and daily activities</li>
              <li>More confidence in their body</li>
            </ul>

            <p className="text-lg leading-relaxed">These benefits don't come from doing extreme workouts. They come from showing up regularly, learning proper technique, and building strength step by step.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">It's Never Too Late</h2>

            <p className="text-lg leading-relaxed">We have members in their 50s, 60s, and even 70s who started as complete beginners. They didn't let age stop them. And now they're stronger, healthier, and happier than they were years ago.</p>

            <p className="text-lg leading-relaxed">You don't need to be young or already fit to start. You just need to take the first step.</p>

            <p className="text-lg leading-relaxed"><strong>Ready to get stronger safely? Schedule a free intro and let's talk about how we can help you reach your goals.</strong></p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-700 mb-6">It's never too late to get stronger. Schedule your free intro and see how we help 40+ beginners train safely.</p>
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

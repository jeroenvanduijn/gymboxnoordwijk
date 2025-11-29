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
            <span className="text-gray-900">What Really Happens During a Free Intro</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-cinnabar font-semibold">Getting Started</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">4 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Really Happens During a Free Intro (Step-by-Step)</h1>

          {/* Image */}
          <div className="aspect-video rounded-xl mb-8 overflow-hidden">
            <img
              src="https://t18gxeooihdd4vax.public.blob.vercel-storage.com/images/blog/hero-background-63.jpg"
              alt="Free intro at CrossFit Leiden"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">Thinking about visiting CrossFit Leiden for the first time? Not sure what to expect?</p>

            <p className="text-lg leading-relaxed">Let's walk through exactly what happens during your free intro, so you know there are no surprises.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">First Things First: No Workout</h2>

            <p className="text-lg leading-relaxed">You won't do a workout during your intro. This is not a test. We're not here to see how fit you are. We just want to meet you, show you around, and answer your questions.</p>

            <p className="text-lg leading-relaxed">The intro takes about 20 to 30 minutes. You can wear normal clothes. No need for workout gear.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Step 1: Coffee and a Warm Welcome</h2>

            <p className="text-lg leading-relaxed">When you arrive, we'll offer you a coffee or tea. We'll sit down together and have a relaxed chat.</p>

            <p className="text-lg leading-relaxed">This is your chance to tell us a bit about yourself. Why are you interested in CrossFit? What are your goals? Do you have any concerns or past injuries we should know about?</p>

            <p className="text-lg leading-relaxed">We listen. We don't push. We just want to understand what you're looking for.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Step 2: We Show You the Gym</h2>

            <p className="text-lg leading-relaxed">Next, we'll walk you through the gym. You'll see where we train, what equipment we use, and how a typical class works.</p>

            <p className="text-lg leading-relaxed">If there's a class happening, you can watch for a few minutes and see how it feels. You'll notice that people of all ages and fitness levels train together.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Step 3: We Explain Kickstart</h2>

            <p className="text-lg leading-relaxed">Kickstart is our beginner program. It's a series of small group classes where you learn all the basic movements step by step.</p>

            <p className="text-lg leading-relaxed">We'll explain how it works, how long it takes, and what you'll learn. If you have questions, we'll answer them.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Step 4: No Pressure, No Contract</h2>

            <p className="text-lg leading-relaxed">At the end of the intro, there's no pressure to sign up right away. You can go home, think about it, talk to your partner, and decide when you're ready.</p>

            <p className="text-lg leading-relaxed">If you want to start, great. If you need more time, that's fine too. We're here when you're ready.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">That's It</h2>

            <p className="text-lg leading-relaxed">The intro is calm, friendly, and stress-free. It's just a conversation and a tour. No workout. No pressure. Just information and a chance to see if CrossFit Leiden feels right for you.</p>

            <p className="text-lg leading-relaxed"><strong>Curious? Book your free intro and come meet us. We'd love to show you around.</strong></p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-cinnabar/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Free Intro?</h3>
            <p className="text-lg text-gray-700 mb-6">No workout, no pressure. Just coffee, conversation, and a tour. Book yours today.</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
                  (window as any).openCFLPopup();
                }
              }}
              className="inline-block bg-cinnabar text-white px-8 py-4 rounded-lg font-bold hover:bg-cinnabar/90 transition-all shadow-md cursor-pointer"
            >
              Book Your Free Intro
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

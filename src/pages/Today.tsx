import { motion } from 'motion/react';
import { Edit3, Share2, BookOpen, Volume2, ArrowRight, PlayCircle, Heart } from 'lucide-react';

export default function Today() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-sm">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNzMbnqGKYp10VW6il3k12Yn9t4dBrwGbLICH7RpdnJxW5HQBblX2tQTAOaGWAKAhmyiNs235cyL1p89Cizi8ga7sljZS3VUilVQdQtFGhpwJctZow3Aidf6KkgFbfGGMpGj8WWuDFPWSXQXmGfpt82M5hBxaTbBR_zS-8w4G75RdTbHVXWRcwjrvWIzlJ8mB4ukuH3GEQTtQdHUe501ghTI0G6zBvDm4F5cFFF2wofPe7feiNJ_Y-ED1SbQgLic4rmb8GGCZPpKY" 
            alt="Redwood Forest"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] opacity-80 mb-2 block">
              Morning Meditation
            </span>
            <h2 className="font-headline italic text-3xl md:text-5xl lg:text-6xl tracking-tight">
              The Stillness of Dawn
            </h2>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Breath Meter */}
        <div className="lg:col-span-1 hidden lg:flex flex-col items-center pt-24 sticky top-32 h-fit">
          <div className="relative w-16 h-16 rounded-full bg-tertiary-container/20 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-full bg-primary/20 breath-pulse" />
            <div className="text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
            </div>
          </div>
          <span className="font-label text-[8px] uppercase tracking-widest text-outline mt-4 vertical-rl transform rotate-180">
            Breathe
          </span>
        </div>

        {/* Main Body */}
        <div className="lg:col-span-11 space-y-20">
          {/* Scripture */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-outline-variant" />
              <span className="font-label text-xs uppercase tracking-[0.15em] text-secondary">
                Psalm 46:10
              </span>
            </div>
            <blockquote className="font-headline italic text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.15] text-balance">
              "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."
            </blockquote>
          </section>

          {/* Reflection */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-label text-sm font-bold text-on-surface border-b border-outline-variant/30 pb-4">
                The Reflection
              </h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 space-y-8">
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-headline first-letter:italic first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                  In the frantic pace of the modern era, stillness is often mistaken for stagnation. Yet, the Psalter reminds us that stillness is the soil from which true knowledge grows. It is not an absence of movement, but an intentional alignment of the soul.
                </p>
                <p>
                  Today, consider the quiet spaces between your breaths. Notice the way the light rests on the surfaces around you. In these unremarkable moments, the Eternal Presence is as vibrant and active as in the greatest of cosmic shifts.
                </p>
                <p>
                  What does it mean to 'know' in the silence? It is a knowledge of the heart—a deep-seated assurance that transcends the noise of our digital anxieties.
                </p>
              </div>

              {/* Actions */}
              <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto px-10 py-4 bg-primary text-on-primary rounded-full font-medium font-label text-sm tracking-wide shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
                  <Edit3 className="w-5 h-5" />
                  Reflect and Journal
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-secondary-container text-on-secondary-container rounded-full font-medium font-label text-sm tracking-wide hover:bg-surface-variant transition-colors flex items-center justify-center gap-3">
                  <Share2 className="w-5 h-5" />
                  Share Wisdom
                </button>
              </div>
            </div>
          </section>

          {/* Closing Prayer */}
          <section className="pt-12">
            <div className="bg-surface-container-high rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary fill-current" />
                  </div>
                  <h3 className="font-headline italic text-2xl text-primary">Closing Prayer</h3>
                </div>
                <p className="font-headline italic text-xl md:text-2xl text-on-surface-variant leading-relaxed text-balance">
                  "Lord, in the quiet of this moment, I surrender my busyness and my noise. Guide me into the sanctuary of Your stillness, that I might know You more deeply. Let Your peace rest in my heart as I move through this day. Amen."
                </p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
            <div className="p-8 bg-surface-container-low rounded-[2rem] space-y-4 hover:bg-surface-container transition-colors group cursor-pointer border border-outline-variant/10">
              <div className="w-12 h-12 bg-tertiary-container/20 rounded-2xl flex items-center justify-center text-tertiary">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-headline italic text-xl">Continue the Study</h4>
              <p className="text-sm text-on-surface-variant leading-snug">
                Explore more verses on peace and the tranquility of spirit.
              </p>
              <div className="pt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                Explore Library <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="p-8 bg-primary-container/20 rounded-[2rem] space-y-4 hover:bg-primary-container/30 transition-colors group cursor-pointer border border-primary/5">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-on-primary">
                <Volume2 className="w-6 h-6" />
              </div>
              <h4 className="font-headline italic text-xl">Listen to Audio</h4>
              <p className="text-sm text-on-surface-variant leading-snug">
                A guided 5-minute meditation based on today's scripture.
              </p>
              <div className="pt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                Play Meditation <PlayCircle className="w-4 h-4" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

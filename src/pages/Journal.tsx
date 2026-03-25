import { motion } from 'motion/react';
import { Plus, MoreHorizontal, Book, Sprout, ChevronDown } from 'lucide-react';

export default function Journal() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6"
    >
      {/* Header */}
      <header className="mb-12">
        <p className="font-label text-xs uppercase tracking-[0.2em] text-tertiary mb-2">Personal Reflection</p>
        <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight font-bold italic">Journal</h2>
        <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Quick Action Card */}
        <div className="md:col-span-12 bg-primary-container/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-none">
          <div className="flex-1">
            <h3 className="font-headline text-2xl text-on-primary-container mb-2">Capture a Moment</h3>
            <p className="text-on-primary-container/80 text-sm max-w-md font-body leading-relaxed">
              Let your thoughts flow onto the digital parchment. Reflections are the seeds of wisdom.
            </p>
          </div>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-sm hover:opacity-90 transition-opacity">
            <Plus className="w-5 h-5" />
            <span>New Entry</span>
          </button>
        </div>

        {/* Entry 1 */}
        <div className="md:col-span-8 bg-surface-container-low rounded-xl overflow-hidden group cursor-pointer">
          <div className="aspect-[16/7] w-full overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQCHeRnTuTgF8TVb2cEGq9kmmgG2NV_yLWfKG8jNE_o1miubvo2bKTGsmMnYI6BXsUsB9o2I_VzunXqZbnaEXkX9Xt3KQw4my8d3m9nHPG2KKfeNk59nCr2feXUxhixWqwSjqF0kQ1Q7QsGivN80-aFNcqKOvyAT9MLjamtsFZJvqrCrogr4CbdO0zIw-pT-f05RHwKJ2cBNIG-ApxnnKUEDkrVExlBWpKYcqx6sFtGB4SjQGLzG1mpyKO5GTksTstmbR1fzOlbA8" 
              alt="Sunset"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/10 px-2 py-1 rounded">
                October 24, 2023
              </span>
              <MoreHorizontal className="w-5 h-5 text-stone-400" />
            </div>
            <h4 className="font-headline text-2xl text-on-surface mb-3 italic">Finding Stillness in the City</h4>
            <p className="text-on-surface-variant font-body leading-relaxed line-clamp-3">
              Today I walked through the park at dawn. The fog was thick, obscuring the skyscrapers and for a moment, the world felt ancient. It reminded me of Psalm 46:10. There is a specific kind of silence that only exists when the rest of the world is still asleep...
            </p>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="md:col-span-4 bg-secondary-container/30 rounded-xl p-8 flex flex-col cursor-pointer hover:bg-secondary-container/40 transition-colors">
          <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold mb-4">October 21, 2023</span>
          <h4 className="font-headline text-xl text-on-secondary-container mb-4 italic">Gratitude for Small Mercies</h4>
          <p className="text-on-secondary-container/90 font-body leading-relaxed text-sm mb-6 flex-grow">
            The warmth of tea, the weight of a good book, and the kindness of a stranger at the market.
          </p>
          <div className="flex gap-2">
            <span className="bg-surface-variant px-3 py-1 rounded-full text-[10px] font-label uppercase text-on-surface-variant">Daily</span>
            <span className="bg-surface-variant px-3 py-1 rounded-full text-[10px] font-label uppercase text-on-surface-variant">Gratitude</span>
          </div>
        </div>

        {/* Entry 3 */}
        <div className="md:col-span-6 bg-white dark:bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 cursor-pointer hover:bg-surface-container-low transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Book className="w-5 h-5 text-tertiary fill-current" />
            <span className="font-label text-[10px] uppercase tracking-widest text-stone-500">October 18, 2023</span>
          </div>
          <h4 className="font-headline text-xl text-on-surface mb-3 italic">A Prayer for Guidance</h4>
          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            Feeling at a crossroads today. Choosing the path of patience over the path of speed. It is difficult to wait when my heart wants to run.
          </p>
        </div>

        {/* Entry 4 */}
        <div className="md:col-span-6 bg-white dark:bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 cursor-pointer hover:bg-surface-container-low transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Sprout className="w-5 h-5 text-emerald-800 fill-current" />
            <span className="font-label text-[10px] uppercase tracking-widest text-stone-500">October 15, 2023</span>
          </div>
          <h4 className="font-headline text-xl text-on-surface mb-3 italic">The Breath of the Woods</h4>
          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            Pine needles underfoot and the scent of damp earth. Nature doesn't hurry, yet everything is accomplished. Taking this lesson back home.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 flex justify-center">
        <button className="font-label text-xs uppercase tracking-[0.3em] text-tertiary hover:text-primary transition-colors flex flex-col items-center gap-2 group">
          Explore Past Reflections
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

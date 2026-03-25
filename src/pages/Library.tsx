import { motion } from 'motion/react';
import { Search, Clock, BookOpen, Droplets, Sun, Zap, MoreHorizontal, Calendar, ArrowRight, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Library() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6"
    >
      {/* Search & Header */}
      <section className="mb-12">
        <div className="flex flex-col gap-2 mb-8">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary">Archives</span>
          <h2 className="font-headline text-4xl font-bold text-on-surface leading-tight">Your Spiritual Library</h2>
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-outline" />
          </div>
          <input 
            type="text"
            className="w-full bg-surface-container-low border-none rounded-xl py-5 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary-container transition-all"
            placeholder="Search passages, topics, or dates..."
          />
        </div>
      </section>

      {/* Recently Read */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline text-2xl font-semibold italic text-primary">Recently Read</h3>
          <span className="font-label text-[11px] uppercase tracking-widest text-outline cursor-pointer hover:text-primary transition-colors">
            View All
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.15em] text-primary block mb-4">Yesterday</span>
              <h4 className="font-headline text-2xl mb-3">Psalm 23: The Good Shepherd</h4>
              <p className="text-on-surface-variant line-clamp-2 italic leading-relaxed">
                "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures..."
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-label text-[10px] uppercase tracking-widest">8 Min Reflection</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-secondary-container flex-shrink-0 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-on-secondary-container" />
              </div>
              <div>
                <span className="font-label text-[10px] uppercase tracking-tighter text-outline">Monday, Oct 23</span>
                <h5 className="font-headline text-lg">The Still Small Voice</h5>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-tertiary-container/20 flex-shrink-0 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-tertiary" />
              </div>
              <div>
                <span className="font-label text-[10px] uppercase tracking-tighter text-outline">Sunday, Oct 22</span>
                <h5 className="font-headline text-lg">Streams in the Desert</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By Topic */}
      <section className="mb-14">
        <h3 className="font-headline text-2xl font-semibold italic text-primary mb-6">By Topic</h3>
        <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">
          {[
            { label: 'Love', icon: Heart, color: 'bg-emerald-100/40 text-emerald-800' },
            { label: 'Peace', icon: Droplets, color: 'bg-stone-200/40 text-secondary' },
            { label: 'Faith', icon: Sun, color: 'bg-blue-100/40 text-tertiary' },
            { label: 'Hope', icon: Zap, color: 'bg-amber-100/40 text-amber-800' },
            { label: 'More', icon: MoreHorizontal, color: 'bg-stone-100/60 text-on-surface-variant' },
          ].map((topic) => (
            <div 
              key={topic.label}
              className={cn(
                "min-w-[140px] aspect-[3/4] rounded-full flex flex-col items-center justify-center p-6 text-center group cursor-pointer transition-all hover:scale-105",
                topic.color
              )}
            >
              <topic.icon className="w-8 h-8 mb-4" />
              <span className="font-headline text-xl">{topic.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* By Date */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-2xl font-semibold italic text-primary">By Date</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full hover:bg-primary/10 transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="font-label text-[11px] uppercase tracking-wider">Calendar View</span>
          </button>
        </div>
        <div className="space-y-4">
          {[
            { date: '24', month: 'OCT', title: 'Morning Mercies', quote: '"His compassions fail not; they are new every morning..." ' },
            { date: '23', month: 'OCT', title: 'Strength for the Weary', quote: '"But they that wait upon the Lord shall renew their strength..." ' },
            { date: '22', month: 'OCT', title: 'Walking in Wisdom', quote: '"If any of you lack wisdom, let him ask of God..." ', dimmed: true },
          ].map((entry, i) => (
            <div key={i} className={cn("grid grid-cols-[80px_1fr] gap-6 group cursor-pointer", entry.dimmed && "opacity-70")}>
              <div className="flex flex-col items-center justify-center border-r border-outline-variant py-2">
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">{entry.month}</span>
                <span className="font-headline text-3xl font-bold">{entry.date}</span>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6 transition-all group-hover:bg-surface-container-high">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-xl mb-1">{entry.title}</h4>
                    <p className="text-sm text-on-surface-variant italic">{entry.quote}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Archive */}
      <section className="mt-20 relative rounded-3xl overflow-hidden h-64 flex items-center p-12">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5vnv7nKjDrTmgEJfZE9rVgTbkDZJDZZaS6W-oVCJGOZDlFjwMVliEerWLQw5K7kSP_-CR82mUl3l31xVpOxdH8eNgP9oq2cgbZKwC4e33N7OpJ1jxCCiLEuxYKSKM-DMvZerBhQFL_74WfVAqgw9LreR_jk9b5VxssyHL5bo40LwHr61paAFCEB97aNfL0fOPkPOhbxSlE2nziEduJiK80HgPCFh5V8sJDKnFUS3kzKY6FTN1_jHEqh8LYUMLTEDxwird6JSaChI" 
          alt="Spring Meadow"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[2px]" />
        <div className="relative z-10 text-white max-w-sm">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] mb-4 block">Special Collection</span>
          <h3 className="font-headline text-3xl mb-4">Spring Renewal Archive</h3>
          <button className="px-6 py-3 bg-white text-emerald-900 rounded-full font-label text-xs uppercase tracking-widest hover:bg-emerald-50 transition-colors">
            Explore Vol. 1
          </button>
        </div>
      </section>
    </motion.div>
  );
}

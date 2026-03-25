import { motion } from 'motion/react';
import { Bell, Palette, HelpCircle, LogOut, Clock, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto px-6 space-y-12"
    >
      <header>
        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mb-2">Preferences</p>
        <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Settings</h2>
      </header>

      {/* Reminders */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <Bell className="w-5 h-5" />
          <h3 className="font-label text-sm font-bold uppercase tracking-widest">Reminders</h3>
        </div>
        <div className="bg-surface-container-low rounded-xl p-6 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-headline text-lg font-semibold">Daily Reflection</p>
              <p className="text-on-surface-variant text-sm">Gentle nudge for your morning prayer</p>
            </div>
            <button className="w-12 h-6 bg-primary rounded-full relative flex items-center px-1">
              <div className="w-4 h-4 bg-on-primary rounded-full ml-auto" />
            </button>
          </div>
          <div className="space-y-3">
            <label className="font-label text-xs font-bold text-outline uppercase tracking-wider">Daily Reminder Time</label>
            <div className="flex items-center justify-between bg-surface-container-high rounded-lg p-4 cursor-pointer hover:bg-surface-variant transition-colors">
              <span className="font-headline text-2xl">07:30 <span className="text-sm font-body uppercase">AM</span></span>
              <Clock className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Appearance */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <Palette className="w-5 h-5" />
          <h3 className="font-label text-sm font-bold uppercase tracking-widest">Appearance</h3>
        </div>
        <div className="bg-surface-container-low rounded-xl p-6 space-y-8">
          <div className="space-y-4">
            <p className="font-headline text-lg font-semibold">Reading Theme</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'light', label: 'Light', bg: 'bg-white' },
                { id: 'dark', label: 'Dark', bg: 'bg-[#1c1c19]' },
                { id: 'sepia', label: 'Sepia', bg: 'bg-[#f1e7d0]' },
              ].map((t) => (
                <button 
                  key={t.id}
                  onClick={() => setTheme(t.id as any)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all",
                    theme === t.id ? "border-primary bg-surface-bright" : "border-transparent bg-stone-100/50 hover:bg-stone-200/50"
                  )}
                >
                  <div className={cn("w-full aspect-video rounded shadow-sm border border-outline-variant/20", t.bg)} />
                  <span className="text-xs font-medium">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <p className="font-headline text-lg font-semibold">Font Size</p>
              <span className="text-xs font-bold font-label text-primary">Standard</span>
            </div>
            <div className="relative flex items-center py-4">
              <div className="absolute w-full h-0.5 bg-surface-container-highest rounded-full" />
              <div className="absolute w-1/2 h-0.5 bg-primary rounded-full" />
              <div className="w-full flex justify-between items-center relative z-10">
                <div className="w-2 h-2 rounded-full bg-on-surface-variant" />
                <div className="w-2 h-2 rounded-full bg-on-surface-variant" />
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 shadow-md" />
                <div className="w-2 h-2 rounded-full bg-on-surface-variant" />
                <div className="w-2 h-2 rounded-full bg-on-surface-variant" />
              </div>
            </div>
            <div className="flex justify-between px-1">
              <span className="text-xs font-headline italic">Aa</span>
              <span className="text-xl font-headline italic">Aa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="space-y-4">
        <button className="w-full bg-surface-container-low hover:bg-surface-container-high transition-colors p-5 rounded-xl flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-headline font-semibold">Support & Resources</p>
              <p className="text-sm text-on-surface-variant">Tutorials, FAQs, and contact us</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-outline group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="w-full bg-red-500/10 hover:bg-red-500/20 transition-colors p-5 rounded-xl flex items-center justify-center gap-2 text-red-600 font-bold">
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </section>

      <footer className="text-center py-8">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-outline">v2.4.0 • The Modern Psalter</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Terms</a>
        </div>
      </footer>
    </motion.div>
  );
}

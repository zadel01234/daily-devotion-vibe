import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Library, 
  Edit3, 
  Settings, 
  Menu,
  Mic
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Today', icon: Sparkles },
    { path: '/library', label: 'Library', icon: Library },
    { path: '/journal', label: 'Journal', icon: Edit3 },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-surface-variant/40 rounded-full transition-colors">
              <Menu className="w-6 h-6 text-primary" />
            </button>
            <h1 className="text-xl font-headline italic font-semibold text-primary tracking-tight">
              The Modern Psalter
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === item.path 
                    ? "text-primary font-bold" 
                    : "text-outline hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu9ptY19o2qYOx_7UcJTLAbqZcuoCzURqjWjq6lJYbSCMnwawnXi-leLQo_obMoN51VMpXj-LoJhrGvHwNhPc_gw4WKN6j6EuNWHFWcJIMR0UcGRpHv5NqK4CvG4TPPExJi6uGAvTlkP6c92xoBzUXPduScUP6s6WBzHZCBabVonk6AFXUR9PNNNq8LgJ2Uc7XEOZ8V90FQDgP6gnlBs2CxWnOOQ0AKGnMv-Xi4R98ws5dRrBSKf4_PAnEE76iRvwBu9Y_uBl3Nao" 
              alt="Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-32">
        {children}
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur-md border-t border-outline-variant/10 z-50 pb-safe">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-1 rounded-full transition-all duration-300",
                  isActive ? "bg-primary/10 text-primary" : "text-outline"
                )}
              >
                <item.icon className={cn("w-6 h-6", isActive && "fill-current")} />
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 md:bottom-12 md:right-12 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg z-40"
      >
        <Mic className="w-8 h-8" />
      </motion.button>
    </div>
  );
}

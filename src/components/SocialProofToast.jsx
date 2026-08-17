import React, { useState, useEffect } from 'react';
import { X, Zap, MapPin } from 'lucide-react';
import { recentActivities } from '../data/siteData';

export function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let subTimeout = null;

    // Show after 3.5 seconds initial delay
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3500);

    // Loop through events
    const interval = setInterval(() => {
      setVisible(false);
      subTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentActivities.length);
        setVisible(true);
      }, 1000);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      if (subTimeout) clearTimeout(subTimeout);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = recentActivities[currentIndex];

  return (
    <aside
      aria-live="polite"
      aria-label="Atividades recentes"
      className="fixed bottom-6 left-6 z-40 max-w-xs sm:max-w-sm glass-panel border-primary/30 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-primary-glow shadow-glow">
          <Zap className="h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-foreground leading-snug">
            {current.text}
          </p>
          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-0.5">
              <MapPin className="h-3 w-3 text-primary-glow" />
              {current.city}
            </span>
            <span>•</span>
            <span>{current.time}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Fechar notificação de atividade recente"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center -mr-3 -mt-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}

export default SocialProofToast;

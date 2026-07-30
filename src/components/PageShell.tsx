import type { ReactNode } from 'react';

export function PageShell({
  eyebrow,
  title,
  centered,
  centerTitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  centered?: boolean;
  centerTitle?: boolean;
  children?: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white font-body px-6 pt-40 pb-24">
      <div className={`max-w-5xl mx-auto ${centered ? 'text-center' : ''}`}>
        <div className={centerTitle && !centered ? 'text-center' : ''}>
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">{eyebrow}</p>
          )}
          <h1 className="font-heading italic text-5xl md:text-7xl mb-10">{title}</h1>
        </div>
        {children}
      </div>
    </main>
  );
}

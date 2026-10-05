import { PageShell } from '../components/PageShell';
import flyer from '../assets/tickets/ethos-flyer.webp';

const RSVP_URL = 'https://posh.vip/g/3onefoent';

export default function ShowTickets() {
  return (
    <PageShell eyebrow="Live show" title="Show Tickets" centered>
      <div className="max-w-md mx-auto">
        <div className="project-glow liquid-glass rounded-2xl overflow-hidden mb-8">
          <img
            src={flyer}
            alt="ETHOS — I met tour — Saint Louis, October 10, 2026"
            className="w-full h-auto"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <h2 className="font-heading italic text-3xl mb-2">ETHOS</h2>
        <p className="text-white/70 mb-1">Listening party</p>
        <p className="text-white/70 mb-1">Saturday, October 10, 2026</p>
        <p className="text-white/70 mb-8">Saint Louis, USA</p>

        <p className="font-body font-extrabold uppercase text-6xl md:text-7xl leading-none tracking-tight text-yellow-400 mb-2">
          Free
        </p>
        <p className="font-body font-bold uppercase text-lg tracking-[0.2em] mb-8">
          Event
        </p>

        <a
          href={RSVP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-white text-black text-base font-body font-bold uppercase tracking-wide px-10 py-4 text-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          RSVP
        </a>

        <div className="mt-14 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-white/20" />
          <span className="text-white/40 text-xs">&#10022;</span>
          <span className="h-px flex-1 bg-white/20" />
        </div>

        <p className="mt-8 font-heading italic text-4xl md:text-5xl">8PM – 10PM</p>
        <p className="mt-4 text-yellow-400 text-base font-bold uppercase tracking-[0.3em]">Free</p>
        <p className="mt-1 text-white/60 text-sm uppercase tracking-[0.2em]">
          Beverages &amp; light snacks
        </p>
        <p className="mt-1 text-white/40 text-xs uppercase tracking-[0.2em]">while supplies last</p>
      </div>
    </PageShell>
  );
}

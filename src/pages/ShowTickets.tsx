import { PageShell } from '../components/PageShell';
import flyer from '../assets/tickets/the-show-flyer.png';

export default function ShowTickets() {
  return (
    <PageShell eyebrow="Live show" title="Show Tickets" centered>
      <div className="max-w-md mx-auto">
        <div className="project-glow liquid-glass rounded-2xl overflow-hidden mb-8">
          <img
            src={flyer}
            alt="The Show — September 26, Shock City Studios"
            className="w-full h-auto"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <p className="text-lg font-body font-medium mb-1">There will be FREE NICKY SLICES</p>
        <p className="text-white/50 text-xs mb-8">while supplies last</p>

        <h2 className="font-heading italic text-3xl mb-2">The Show</h2>
        <p className="text-white/70 mb-1">Saturday, September 26, 2026</p>
        <p className="text-white/70 mb-1">Shock City Studios — St. Louis</p>
        <p className="text-white/50 text-sm mb-4">Doors 8:00pm · Show 8:30pm</p>
        <p className="text-white/50 text-sm mb-8">
          El-Train, Soufside Jerei, 4Deep, 3reofum &amp; special guests
        </p>

        <p className="font-heading italic text-4xl md:text-5xl">Thank you for coming!</p>
      </div>
    </PageShell>
  );
}

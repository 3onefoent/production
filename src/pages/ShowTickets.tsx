import { PageShell } from '../components/PageShell';
import flyer from '../assets/tickets/the-show-flyer.png';

const TICKET_PURCHASE_URL = 'https://buy.stripe.com/bJedRa4vj8kK99v9Ic5gc00';

// Capacity is 60 tickets, enforced on the Stripe Payment Link itself
// ("Limit the number of payments") once it's created — deliberately not
// shown on the page.

const FALLBACK_URL =
  'mailto:home@314ent.net?subject=' + encodeURIComponent('Ticket reservation: The Show');

export default function ShowTickets() {
  const purchaseUrl = TICKET_PURCHASE_URL || FALLBACK_URL;
  const buttonLabel = TICKET_PURCHASE_URL ? 'Buy Tickets — $30' : 'Reserve Your Spot';

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

        <h2 className="font-heading italic text-3xl mb-2">The Show</h2>
        <p className="text-white/70 mb-1">Saturday, September 26, 2026</p>
        <p className="text-white/70 mb-1">Shock City Studios — St. Louis</p>
        <p className="text-white/50 text-sm mb-4">Doors 8:00pm · Show 8:30pm</p>
        <p className="text-white/50 text-sm mb-8">El-Train, 4Deep, 3reofum &amp; special guests</p>

        <p className="text-4xl font-heading italic mb-6">$30</p>

        <a
          href={purchaseUrl}
          target={TICKET_PURCHASE_URL ? '_blank' : undefined}
          rel={TICKET_PURCHASE_URL ? 'noopener noreferrer' : undefined}
          className="inline-block rounded bg-white text-black text-sm font-body font-medium px-6 py-3 text-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          {buttonLabel}
        </a>
      </div>
    </PageShell>
  );
}

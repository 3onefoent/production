import { Check } from 'lucide-react';
import { PageShell } from '../components/PageShell';

const TIERS = [
  {
    name: 'Photoshoots',
    price: '$100/hr',
    desc: 'For those who need a professional photoshoot, fast.',
    note: 'In-studio shoots have a $125 add-on fee.',
    features: ['24hr delivery', '1 location', 'Standard exports'],
  },
  {
    name: 'Videography',
    price: 'Custom',
    desc: "Every project is different. Let us know what you need.",
    features: ['HD exports', 'Full color grade', 'Raw video files', 'Sound design'],
    featured: true,
  },
  {
    name: 'Retainer',
    price: '$1000-$2500',
    desc: 'For agencies and teams at scale.',
    note: '*Included below is showing basic retainer perks.',
    features: [
      '3 sit down meetings',
      '1 long form video',
      '1 photoshoot',
      '3 social media reels',
      'Content scheduling',
      'Marketing guidance',
      'Brand building',
    ],
  },
];

export default function Pricing() {
  return (
    <PageShell eyebrow="Plans" title="Pricing" centerTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl px-8 py-10 flex flex-col ${
              tier.featured ? 'liquid-glass-strong' : 'liquid-glass'
            }`}
          >
            <h2 className="text-xl font-body font-medium mb-1">{tier.name}</h2>
            <p className="text-white/50 text-sm">{tier.desc}</p>
            {tier.note && <p className="text-white/40 text-xs italic mt-2 mb-6">{tier.note}</p>}
            <p className={`text-4xl font-heading italic mb-6 ${tier.note ? '' : 'mt-6'}`}>
              {tier.price}
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="w-4 h-4 text-[#8fbf6a]" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:home@314ent.net?subject=${encodeURIComponent(`Inquiry: ${tier.name}`)}`}
              className="rounded bg-white text-black text-sm font-body font-medium px-6 py-3 text-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Choose {tier.name}
            </a>
          </div>
        ))}
      </div>

      <p className="text-sm font-body font-light text-white/75 text-center mt-16">
        No deposit. No booking.
      </p>
    </PageShell>
  );
}

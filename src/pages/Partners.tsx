import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import fader from '../assets/partners/fader.png';
import defJam from '../assets/partners/def-jam.png';
import republicRecords from '../assets/partners/republic-records.png';
import sxsw from '../assets/partners/sxsw.png';
import thrasher from '../assets/partners/thrasher.png';
import madeInAmericaLight from '../assets/partners/made-in-america-light.jpeg';
import gatheringForJustice from '../assets/partners/gathering-for-justice.jpeg';
import eltenLatham from '../assets/partners/elten-latham.png';
import zf from '../assets/partners/zf-logo.png';

const PARTNERS = [
  { name: 'SXSW', logo: sxsw },
  { name: 'Thrasher', logo: thrasher },
  { name: 'Republic Records', logo: republicRecords },
  { name: 'Def Jam Recordings', logo: defJam },
  { name: 'Made in America', logo: madeInAmericaLight },
  { name: 'The Gathering For Justice', logo: gatheringForJustice },
  { name: 'The FADER', logo: fader },
  { name: 'ZF', logo: zf },
  { name: 'Elten Latham Photography', logo: eltenLatham },
];

const CARD_WIDTH = 380;
const CARD_GAP = 24;

export default function Partners() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * (CARD_WIDTH + CARD_GAP), behavior: 'smooth' });
  };

  return (
    <PageShell eyebrow="Who we've worked with" title="Partners" centered>
      <p className="text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">
        We team up with companies and platforms who care as much about craft as we do.
      </p>

      <div className="mx-auto" style={{ maxWidth: CARD_WIDTH }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll partners left"
            className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll partners right"
            className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div className="partners-spotlight" />
          <div
            ref={scrollerRef}
            className="no-scrollbar flex overflow-x-auto scroll-smooth"
            style={{ gap: CARD_GAP }}
          >
            {PARTNERS.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="liquid-glass shrink-0 h-64 rounded-2xl flex items-center justify-center p-10"
                style={{ width: CARD_WIDTH }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain rounded-md"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

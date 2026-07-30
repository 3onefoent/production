import { PageShell } from '../components/PageShell';
import kevinGates from '../assets/projects/kevin-gates.jpeg';
import bonIver from '../assets/projects/bon-iver.jpeg';
import snoopDogg from '../assets/projects/snoop-dogg.jpeg';
import chanceTheRapper from '../assets/projects/chance-the-rapper.jpeg';

const PROJECTS = [
  { title: 'Kevin Gates — Luca Brasi 2', image: kevinGates },
  { title: 'Schoolboy Q — Blank Face LP', image: bonIver },
  { title: 'Snoop Dogg — Bush', image: snoopDogg },
  { title: 'Chance the Rapper — 3', image: chanceTheRapper },
];

export default function Projects() {
  return (
    <PageShell eyebrow="Selected campaigns" title="Projects" centered>
      <p className="text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">
        Campaigns we've helped bring to life.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="project-glow liquid-glass aspect-square rounded-2xl overflow-hidden relative"
          >
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/85 to-transparent">
              <p className="text-sm text-white/80 leading-snug">{p.title}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

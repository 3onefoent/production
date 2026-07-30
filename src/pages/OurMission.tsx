import { PageShell } from '../components/PageShell';
import planetLogo from '../assets/planet-logo.png';

export default function OurMission() {
  return (
    <PageShell eyebrow="Why we exist" title="Our Mission" centered>
      <div className="space-y-6 max-w-2xl mx-auto text-white/70 leading-relaxed text-lg">
        <p>Anyone can shoot visuals. Not just anyone can market them.</p>
        <p>
          We build for the artists behind the work — giving them the tools to turn raw creative
          output into visuals that actually move people, and move product.
        </p>
        <p>
          Every feature we ship starts with the same question: does this make an artist's work
          easier to see, share, and sell?
        </p>
      </div>

      <div className="planet-glow mx-auto mt-16 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
        <img
          src={planetLogo}
          alt=""
          className="w-full h-full object-cover scale-[1.65]"
          draggable={false}
        />
      </div>
    </PageShell>
  );
}

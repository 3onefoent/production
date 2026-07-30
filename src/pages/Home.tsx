import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import planetLogo from '../assets/planet-logo.png';
import forArtistsImg from '../assets/for-artists.png';
import byArtistsImg from '../assets/by-artists.png';
import { useRouter } from '../lib/router';

export default function Home() {
  const { navigate } = useRouter();
  const [mounted, setMounted] = useState(false);

  const planetBgRef = useRef<HTMLDivElement>(null);
  const planetSpinRef = useRef<HTMLDivElement>(null);

  // Fade-in on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Continuous planet rotation (gsap)
  useEffect(() => {
    if (!planetSpinRef.current) return;
    const tween = gsap.to(planetSpinRef.current, {
      rotation: 360,
      duration: 48,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
    });
    return () => {
      tween.kill();
    };
  }, []);

  // Parallax mouse tracking (gsap)
  useEffect(() => {
    const strength = 20;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = ((e.clientX - cx) / cx) * strength;
      targetY = ((e.clientY - cy) / cy) * strength;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      if (planetBgRef.current) {
        gsap.set(planetBgRef.current, { x: currentX, y: currentY });
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-body overflow-x-hidden">
      {/* Planet background layer */}
      <div
        ref={planetBgRef}
        className="fixed top-0 left-0 w-full h-full z-0 flex items-start justify-center overflow-hidden"
      >
        <div
          className="relative"
          style={{
            width: 'min(55vmin, 620px)',
            height: 'min(55vmin, 620px)',
            marginTop: '22vh',
          }}
        >
          {/* Flanking labels — behind the spinning planet, peeking out top and bottom */}
          <img
            src={forArtistsImg}
            alt="For Artists"
            draggable={false}
            className="select-none absolute left-1/2 pointer-events-none"
            style={{
              top: 0,
              transform: 'translate(-50%, -62%)',
              width: 'clamp(300px, 46vw, 620px)',
              height: 'auto',
            }}
          />
          <img
            src={byArtistsImg}
            alt="By Artists"
            draggable={false}
            className="select-none absolute left-1/2 pointer-events-none"
            style={{
              bottom: 0,
              transform: 'translate(-50%, 62%)',
              width: 'clamp(300px, 46vw, 620px)',
              height: 'auto',
            }}
          />

          {/* Rotating sphere texture */}
          <div className="planet-glow absolute inset-0 rounded-full overflow-hidden">
            <div ref={planetSpinRef} className="absolute inset-0">
              <img
                src={planetLogo}
                alt=""
                className="w-full h-full object-cover scale-[1.65]"
                draggable={false}
              />
            </div>

            {/* Sunlit highlight (fixed, doesn't rotate) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 22%, rgba(255,255,255,0) 45%)',
              }}
            />
            {/* Shadowed dark side (fixed, doesn't rotate) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 68% 74%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.8) 100%)',
              }}
            />
            {/* Rim light */}
            <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]" />
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        className={`fixed bottom-12 left-0 right-0 px-10 flex items-end justify-between z-20 transition-all duration-1000 delay-300 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed">
          Anyone can shoot visuals.
        </p>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-3">
          <button
            onClick={() => navigate('/contact')}
            className="group relative bg-white text-black text-sm font-body font-medium rounded px-6 py-3 overflow-hidden active:scale-[0.97] transition-all duration-200 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] hover:scale-[1.03]"
          >
            <span className="relative z-10">Contact us</span>
            <span className="absolute inset-0 bg-gradient-to-b from-white to-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </div>

        <p className="text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed text-right">
          Not just anyone can market visuals.
        </p>
      </div>
    </div>
  );
}

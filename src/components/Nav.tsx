import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoMark } from './LogoMark';
import { useRouter } from '../lib/router';

const NAV_LINKS = [
  { label: 'Gallery', path: '/gallery' },
  { label: 'Projects', path: '/projects' },
  { label: 'Our Mission', path: '/our-mission' },
  { label: 'Partners', path: '/partners' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Show Tickets', path: '/show-tickets' },
];

export function Nav() {
  const { path, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate(to);
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex flex-col items-center">
      <div className="liquid-glass flex items-center gap-6 rounded px-4 py-2.5 max-w-full">
        <a href="/" onClick={go('/')} aria-label="Home">
          <LogoMark />
        </a>
        <div className="hidden md:flex items-center gap-5 whitespace-nowrap">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={go(link.path)}
              className={`text-sm font-body font-light transition-colors duration-200 ${
                path === link.path ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3 ml-4 whitespace-nowrap">
          <a
            href="/contact"
            onClick={go('/contact')}
            className="liquid-glass-strong text-sm font-body font-medium text-white rounded px-4 py-1.5 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.12)] active:scale-[0.97]"
          >
            Contact us
          </a>
        </div>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-white/80 hover:text-white transition-colors duration-200"
        >
          {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden liquid-glass-strong mt-2 w-full max-w-xs rounded-2xl px-5 py-4 flex flex-col items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={go(link.path)}
              className={`text-sm font-body font-light transition-colors duration-200 ${
                path === link.path ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={go('/contact')}
            className="liquid-glass text-sm font-body font-medium text-white rounded px-4 py-1.5 transition-all duration-200 active:scale-[0.97]"
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
}

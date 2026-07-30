import { LogoMark } from './LogoMark';
import { useRouter } from '../lib/router';

const NAV_LINKS = [
  { label: 'Gallery', path: '/gallery' },
  { label: 'Projects', path: '/projects' },
  { label: 'Our Mission', path: '/our-mission' },
  { label: 'Partners', path: '/partners' },
  { label: 'Pricing', path: '/pricing' },
];

export function Nav() {
  const { path, navigate } = useRouter();

  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap">
      <div className="liquid-glass flex items-center gap-6 rounded px-4 py-2.5">
        <a href="/" onClick={go('/')} aria-label="Home">
          <LogoMark />
        </a>
        <div className="flex items-center gap-5">
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
        <div className="flex items-center gap-3 ml-4">
          <a
            href="/contact"
            onClick={go('/contact')}
            className="liquid-glass-strong text-sm font-body font-medium text-white rounded px-4 py-1.5 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.12)] active:scale-[0.97]"
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
}

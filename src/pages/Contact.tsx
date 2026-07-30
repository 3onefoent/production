import { useState } from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import instagramIcon from '../assets/social/instagram.png';
import youtubeIcon from '../assets/social/youtube.png';

const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/3onefoent/', icon: instagramIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/@3onefoent', icon: youtubeIcon },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subject = `New inquiry from ${name || 'website contact form'}`;
  const body = `${message}\n\nReply to: ${email}`;
  const mailtoHref = `mailto:home@314ent.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <PageShell eyebrow="Get in touch" title="Contact us">
      <div className="flex items-center gap-4 mb-8">
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="liquid-glass rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 hover:scale-[1.08] active:scale-[0.95]"
          >
            <img
              src={s.icon}
              alt={s.name}
              className="w-8 h-8 object-contain"
              draggable={false}
            />
          </a>
        ))}
      </div>
      <div className="max-w-lg space-y-5">
        <label className="liquid-glass flex items-center gap-3 rounded-2xl px-4 py-3">
          <User className="w-4 h-4 text-white/40" strokeWidth={1.5} />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
          />
        </label>
        <label className="liquid-glass flex items-center gap-3 rounded-2xl px-4 py-3">
          <Mail className="w-4 h-4 text-white/40" strokeWidth={1.5} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
          />
        </label>
        <label className="liquid-glass flex items-start gap-3 rounded-2xl px-4 py-3">
          <MessageSquare className="w-4 h-4 text-white/40 mt-1" strokeWidth={1.5} />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What are you working on?"
            rows={4}
            className="bg-transparent outline-none text-sm w-full placeholder:text-white/40 resize-none"
          />
        </label>
        <a
          href={mailtoHref}
          className="inline-block rounded bg-white text-black text-sm font-body font-medium px-6 py-3 text-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          Send message
        </a>
      </div>
    </PageShell>
  );
}

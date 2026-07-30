import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import sminoTitle from '../assets/smino-title.png';
import jtTitle from '../assets/jt-title.png';
import fourDeepTitle from '../assets/4deep-title.png';
import shadearoo from '../assets/videos/shadearoo.mp4';
import uno from '../assets/videos/uno.mp4';
import sminaroo from '../assets/videos/sminaroo.mp4';
import bottleroo from '../assets/videos/bottleroo.mp4';
import hannamablamma from '../assets/videos/hannamablamma.mp4';
import rooo from '../assets/videos/rooo.mp4';
import texas from '../assets/videos/texas.mp4';
import posearoo from '../assets/videos/posearoo.mp4';
import atl1 from '../assets/smino-photos/atl1.png';
import atl3 from '../assets/smino-photos/atl3.png';
import atlhouse from '../assets/smino-photos/atlhouse.png';
import atxsmi3 from '../assets/smino-photos/atxsmi3.png';
import ft6 from '../assets/smino-photos/ft6.png';
import ft7 from '../assets/smino-photos/ft7.png';
import ft8 from '../assets/smino-photos/ft8.png';
import ft9 from '../assets/smino-photos/ft9.png';
import ft10 from '../assets/smino-photos/ft10.png';
import ft11 from '../assets/smino-photos/ft11.png';
import ft13 from '../assets/smino-photos/ft13.png';
import ft14 from '../assets/smino-photos/ft14.png';
import smitx2 from '../assets/smino-photos/smitx2.png';
import indotx2 from '../assets/smino-photos/indotx-2.png';
import txsmi from '../assets/smino-photos/txsmi.png';
import tehgirljt from '../assets/videos/tehgirljt.mp4';
import jttttt from '../assets/videos/jttttt.mp4';
import jztz from '../assets/videos/jztz.mov';
import finaljt from '../assets/jt-photos/finaljt.png';
import jtwerq from '../assets/jt-photos/jtwerq.png';
import bwjt from '../assets/jt-photos/bwjt.png';
import bwjt2 from '../assets/jt-photos/bwjt2.png';
import bwjt3 from '../assets/jt-photos/bwjt3.png';
import threereofumTitle from '../assets/3reofum-title.png';
import haloreels from '../assets/videos/haloreels.mp4';
import sequence01 from '../assets/videos/sequence01.mp4';
import brick from '../assets/videos/brick.mp4';
import brickbybrick from '../assets/videos/brickbybrick.mp4';
import brickphx from '../assets/videos/brickphx.mov';
import damotionwe from '../assets/videos/damotionwe.mp4';
import truthbittt from '../assets/videos/truthbittt.mp4';
import versehalo from '../assets/videos/versehalo.mp4';
import fourDeepRunning from '../assets/videos/4deeprunning.mp4';
import livepfr from '../assets/videos/livepfr.mp4';
import fourDeepListn from '../assets/videos/4deeplistn.mp4';
import bounce2 from '../assets/videos/bounce2.mp4';
import drewgmtverse from '../assets/videos/drewgmtverse.mp4';
import fourTheNight4d from '../assets/videos/4thenight4d.mp4';

const PALETTE = ['#ec4899', '#8fbf6a', '#60a5fa', '#f59e0b', '#a78bfa', '#f472b6'];

type MediaItem = { type: 'video' | 'image'; src: string; variant?: 'gif' | 'preview' };

const SMINO_MEDIA: MediaItem[] = [
  { type: 'video', src: shadearoo },
  { type: 'video', src: uno },
  { type: 'video', src: sminaroo },
  { type: 'video', src: bottleroo },
  { type: 'video', src: hannamablamma },
  { type: 'video', src: rooo },
  { type: 'video', src: texas },
  { type: 'video', src: posearoo },
  { type: 'image', src: atl1 },
  { type: 'image', src: atl3 },
  { type: 'image', src: ft6 },
  { type: 'image', src: ft7 },
  { type: 'image', src: ft8 },
  { type: 'image', src: ft9 },
  { type: 'image', src: ft11 },
  { type: 'image', src: ft14 },
  { type: 'image', src: smitx2 },
  { type: 'image', src: indotx2 },
  { type: 'image', src: atxsmi3 },
  { type: 'image', src: txsmi },
  { type: 'image', src: atlhouse },
  { type: 'image', src: ft10 },
  { type: 'image', src: ft13 },
];

const JT_MEDIA: MediaItem[] = [
  { type: 'video', src: tehgirljt },
  { type: 'video', src: jttttt },
  { type: 'video', src: jztz },
  { type: 'image', src: finaljt },
  { type: 'image', src: jtwerq },
  { type: 'image', src: bwjt },
  { type: 'image', src: bwjt2 },
  { type: 'image', src: bwjt3 },
];

const THREEREOFUM_MEDIA: MediaItem[] = [
  { type: 'video', src: haloreels, variant: 'preview' },
  { type: 'video', src: sequence01, variant: 'preview' },
  { type: 'video', src: brick, variant: 'preview' },
  { type: 'video', src: brickbybrick, variant: 'preview' },
  { type: 'video', src: brickphx, variant: 'preview' },
  { type: 'video', src: damotionwe, variant: 'preview' },
  { type: 'video', src: truthbittt, variant: 'preview' },
  { type: 'video', src: versehalo, variant: 'preview' },
];

const FOURDEEP_MEDIA: MediaItem[] = [
  { type: 'video', src: fourDeepRunning, variant: 'preview' },
  { type: 'video', src: livepfr, variant: 'preview' },
  { type: 'video', src: fourDeepListn, variant: 'preview' },
  { type: 'video', src: bounce2, variant: 'preview' },
  { type: 'video', src: drewgmtverse, variant: 'preview' },
  { type: 'video', src: fourTheNight4d, variant: 'preview' },
];

const ALBUMS = [
  {
    title: 'Smino',
    titleImage: sminoTitle,
    description: 'Everything is a lot tour w/ smino',
    count: SMINO_MEDIA.length,
    media: SMINO_MEDIA,
  },
  {
    title: 'JT',
    titleImage: jtTitle,
    description: 'WerQfest w/ JT',
    count: JT_MEDIA.length,
    media: JT_MEDIA,
  },
  {
    title: '3reofum',
    titleImage: threereofumTitle,
    description: 'Reels with 3',
    count: THREEREOFUM_MEDIA.length,
    media: THREEREOFUM_MEDIA,
  },
  {
    title: '4DEEP',
    titleImage: fourDeepTitle,
    description: 'Saints & Sinners',
    count: FOURDEEP_MEDIA.length,
    media: FOURDEEP_MEDIA,
  },
];

function blockContextMenu(e: React.MouseEvent) {
  e.preventDefault();
}

function tileGradient(seed: number) {
  const color = PALETTE[seed % PALETTE.length];
  return `linear-gradient(135deg, ${color}55 0%, #000000 70%)`;
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const PREVIEW_MIN_MS = 20000;

function PreviewTileVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const startRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  const restart = () => {
    const v = videoRef.current;
    if (!v) return;
    startRef.current = performance.now();
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const handlePlay = () => {
    if (!startRef.current) startRef.current = performance.now();
  };

  const handleEnded = () => {
    const elapsed = performance.now() - startRef.current;
    const remaining = PREVIEW_MIN_MS - elapsed;
    if (remaining > 0) {
      timeoutRef.current = window.setTimeout(restart, remaining);
    } else {
      restart();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      playsInline
      preload="auto"
      controlsList="nodownload noremoteplayback"
      disablePictureInPicture
      onContextMenu={blockContextMenu}
      onPlay={handlePlay}
      onEnded={handleEnded}
    />
  );
}

function Row({
  album,
  rowIndex,
  onOpenMedia,
}: {
  album: (typeof ALBUMS)[number];
  rowIndex: number;
  onOpenMedia: (item: MediaItem) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const media = useMemo(
    () => (album.media ? shuffle(album.media) : album.media),
    [album.media],
  );

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 480, behavior: 'smooth' });
  };

  return (
    <div className="mb-12">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          {album.titleImage ? (
            <img
              src={album.titleImage}
              alt={album.title}
              className="h-8 md:h-10 w-auto select-none"
              draggable={false}
              onContextMenu={blockContextMenu}
            />
          ) : (
            <h2 className="font-heading italic text-2xl md:text-3xl">{album.title}</h2>
          )}
          <p className="text-white/50 text-sm mt-1">{album.description}</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label={`Scroll ${album.title} left`}
            className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label={`Scroll ${album.title} right`}
            className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {Array.from({ length: album.count }).map((_, i) => {
          const item = media?.[i];
          return (
            <div
              key={i}
              className="shrink-0 w-56 h-56 rounded-2xl relative overflow-hidden liquid-glass"
            >
              {item?.type === 'video' ? (
                <button
                  onClick={() => onOpenMedia(item)}
                  aria-label="View full size"
                  className="absolute inset-0 w-full h-full cursor-zoom-in"
                >
                  {item.variant === 'preview' ? (
                    <PreviewTileVideo src={item.src} />
                  ) : (
                    <video
                      src={item.src}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      controlsList="nodownload noremoteplayback"
                      disablePictureInPicture
                      onContextMenu={blockContextMenu}
                    />
                  )}
                </button>
              ) : item?.type === 'image' ? (
                <button
                  onClick={() => onOpenMedia(item)}
                  aria-label="View full size"
                  className="absolute inset-0 w-full h-full cursor-zoom-in"
                >
                  <img
                    src={item.src}
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                    onContextMenu={blockContextMenu}
                  />
                </button>
              ) : (
                <>
                  <div
                    className="absolute inset-0"
                    style={{ background: tileGradient(rowIndex + i + 1) }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-7 h-7 text-white/40" strokeWidth={1.5} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!lightboxItem) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxItem]);

  const close = () => {
    setVisible(false);
    setTimeout(() => setLightboxItem(null), 200);
  };

  return (
    <PageShell eyebrow="Selected work" title="Gallery">
      <p className="text-white/70 max-w-xl mb-12 leading-relaxed">
        A living collection of visuals made for artists, by artists. Scroll a row to see more.
      </p>
      {ALBUMS.map((a, i) => (
        <Row key={a.title} album={a} rowIndex={i} onOpenMedia={setLightboxItem} />
      ))}

      {lightboxItem && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center px-6 py-10 transition-opacity duration-200 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors duration-200 z-10"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          {lightboxItem.type === 'video' ? (
            <video
              src={lightboxItem.src}
              onClick={(e) => e.stopPropagation()}
              onContextMenu={blockContextMenu}
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              autoPlay
              loop
              controls
              playsInline
              className={`relative max-w-full max-h-full object-contain rounded-2xl transition-transform duration-200 ${
                visible ? 'scale-100' : 'scale-95'
              }`}
            />
          ) : (
            <img
              src={lightboxItem.src}
              alt=""
              draggable={false}
              onContextMenu={blockContextMenu}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-full max-h-full object-contain rounded-2xl transition-transform duration-200 ${
                visible ? 'scale-100' : 'scale-95'
              }`}
            />
          )}
        </div>
      )}
    </PageShell>
  );
}

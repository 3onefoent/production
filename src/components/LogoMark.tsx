import threeMark from '../assets/three-mark.png';

export function LogoMark() {
  return (
    <svg
      width={44}
      height={26}
      viewBox="0 0 44 26"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x={0} y={3} width={14} height={20} rx={3} fill="white" />
      <rect x={16} y={3} width={12} height={20} rx={3} fill="white" />
      <rect x={30} y={3} width={14} height={20} rx={3} fill="white" />
      <defs>
        <clipPath id="threeMarkClip">
          <rect x={16} y={3} width={12} height={20} rx={3} />
        </clipPath>
      </defs>
      <image
        href={threeMark}
        x={16}
        y={3}
        width={12}
        height={20}
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#threeMarkClip)"
      />
    </svg>
  );
}

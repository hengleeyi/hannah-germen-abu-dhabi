type IconProps = { size?: number };

export function Arrow({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 5.5 19.5 12 13 18.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

export function Plus({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

export function Tick({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12.5 9.5 18 20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

interface MarianIconProps {
  className?: string;
  size?: number;
}

export function MarianRoseIcon({ className = "w-5 h-5", size = 20 }: MarianIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2C9.5 4.5 9 8 10.5 11C8 9.5 4.5 10 2 12C4.5 14 8 14.5 10.5 13C9 16 9.5 19.5 12 22C14.5 19.5 15 16 13.5 13C16 14.5 19.5 14 22 12C19.5 10 16 9.5 13.5 11C15 8 14.5 4.5 12 2Z" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function MarianLilyIcon({ className = "w-5 h-5", size = 20 }: MarianIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2V22" />
      <path d="M12 7C9.5 5 5 7 5 11C5 15 12 19 12 19C12 19 19 15 19 11C19 7 14.5 5 12 7Z" />
      <path d="M7 16C4 18 3 21 3 21" />
      <path d="M17 16C20 18 21 21 21 21" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export function MarianMonogramIcon({ className = "w-5 h-5", size = 20 }: MarianIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 19L8 6L12 15L16 6L20 19" />
      <path d="M2 12C6 9 18 9 22 12" />
      <circle cx="12" cy="4" r="1" fill="currentColor" />
      <circle cx="8" cy="2" r="0.75" fill="currentColor" />
      <circle cx="16" cy="2" r="0.75" fill="currentColor" />
    </svg>
  );
}

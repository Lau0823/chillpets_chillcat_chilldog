

"use client"
export default function Paw({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <ellipse cx="50" cy="65" rx="22" ry="18" fill="currentColor" />
      <circle cx="28" cy="37" r="9" fill="currentColor" />
      <circle cx="45" cy="30" r="9" fill="currentColor" />
      <circle cx="63" cy="30" r="9" fill="currentColor" />
      <circle cx="78" cy="37" r="9" fill="currentColor" />
    </svg>
  );
}

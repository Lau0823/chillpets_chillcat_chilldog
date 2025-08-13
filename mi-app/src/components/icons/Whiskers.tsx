
"use client"

export default function Whiskers({ className = "" }) {
  return (
    <svg viewBox="0 0 220 80" className={className} aria-hidden="true" fill="none">
      <path d="M10 20 C60 5, 90 15, 110 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M10 40 C60 35, 90 45, 110 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M10 60 C60 65, 90 55, 110 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 20 C130 15, 160 5, 210 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 50 C130 45, 160 35, 210 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 60 C130 55, 160 65, 210 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

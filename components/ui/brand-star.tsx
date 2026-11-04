/** A font-independent version of the decorative eight-spoked asterisk. */
export function BrandStar({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M50 0v100M0 50h100M14.65 14.65l70.7 70.7M14.65 85.35l70.7-70.7" />
    </svg>
  );
}

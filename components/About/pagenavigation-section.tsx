export function PageNavigationSection() {
  return (
    <nav
      aria-label="Explore the About page"
      className="border-b border-black/10 bg-[#eeece6]"
    >
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] flex flex-wrap items-center gap-x-7 gap-y-3 py-5 text-xs font-medium">
        <span className="font-mono text-[10px] leading-[1.6] tracking-[.13em] uppercase mr-auto text-muted">
          The minds behind the mantra
        </span>
        {[
          ["#who-we-are", "Who we are"],
          ["#vision", "Our vision"],
          ["#team", "The team"],
          ["#mantras", "Our mantras"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="transition-colors hover:text-teal"
          >
            {label} ↗
          </a>
        ))}
      </div>
    </nav>
  );
}

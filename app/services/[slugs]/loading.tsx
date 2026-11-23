export default function ServiceLoading() {
  return (
    <div className="min-h-[650px] bg-[#19181b] pb-20 pt-10 text-white md:min-h-[720px] md:pt-14">
      <div className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)]">
        <div className="mb-24 h-4 w-24 animate-pulse rounded bg-white/15 md:mb-32" />
        <div className="mb-8 h-8 w-40 animate-pulse rounded-full bg-white/15" />
        <div className="h-20 max-w-3xl animate-pulse rounded-xl bg-white/15 md:h-28" />
        <div className="mt-24 h-24 max-w-xl animate-pulse rounded-xl bg-white/15" />
        <span className="sr-only">Loading service</span>
      </div>
    </div>
  );
}

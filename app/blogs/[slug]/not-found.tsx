import Link from "next/link";
export default function NotFound() {
  return (
    <section className="media-wrap py-24">
      <p className="media-label">The journal / 404</p>
      <h1 className="text-5xl tracking-tight">
        This perspective couldn’t be found.
      </h1>
      <p className="my-6">
        Explore the journal for more ideas from Media Mantra.
      </p>
      <Link href="/blogs" className="media-link">
        Back to all perspectives →
      </Link>
    </section>
  );
}

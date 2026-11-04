import { Reveal } from "@/components/ui/reveal";
import { Heading, Label, TextLink } from "@/components/media/shared";

const contributions = [
  [
    "01",
    "Make ambition understood",
    "We translate ambitious ideas into clear narratives, content and media stories that people can understand and share.",
  ],
  [
    "02",
    "Bring people together",
    "Through public relations, events and digital conversations, we connect organisations with the communities that matter to them.",
  ],
  [
    "03",
    "Show the work behind progress",
    "We help brands communicate real initiatives and outcomes with the context, credibility and care they deserve.",
  ],
];

export function DubaiContribution() {
  return (
    <section className="media-wrap media-section">
      <Heading
        label="Our contribution"
        title="We help ideas"
        accent="move people."
      >
        As a communications company in Dubai, our contribution is to give
        meaningful work a voice. We build the stories, connections and
        experiences that help ideas reach people and gain momentum.
      </Heading>
      <div className="media-three mt-[55px] [&>div]:border-t [&>div]:border-[#19181b33] [&>div]:py-[30px] [&_h3]:mb-[18px] [&_h3]:text-[29px] [&_h3]:tracking-[-.045em] [&_p:last-child]:text-sm [&_p:last-child]:leading-[1.9] [&_p:last-child]:text-muted">
        {contributions.map(([number, title, description]) => (
          <Reveal key={number}>
            <Label>How we contribute</Label>
            <h3>{title}</h3>
            <p>{description}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-[35px]">
        <TextLink href="/services">Explore our services</TextLink>
      </div>
    </section>
  );
}

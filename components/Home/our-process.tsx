import { ArrowText } from "../ui/arrow-text";
import { Reveal } from "../ui/reveal";

export function OurProcess() {
  return (
    <section
      id="our-process"
      className="mx-auto w-[min(1440px,calc(100%-112px))] max-[768px]:w-[calc(100%-40px)] grid items-start gap-14 py-24 md:grid-cols-[1fr_1.1fr] md:py-32"
    >
      <div className="md:sticky md:top-16">
        <h2 className="text-[clamp(2.6rem,5vw,5.1rem)] leading-none tracking-[-.065em] font-[550]">
          Good stories
          <br />
          don’t happen
          <br />
          <span className="font-[Georgia,'Times_New_Roman',serif] italic font-normal tracking-[-.065em] text-teal">
            by accident.
          </span>
        </h2>
        <p className="mb-8 mt-7 max-w-sm text-sm leading-7 text-muted">
          A clear process. An open conversation. A shared ambition to make every
          move mean something. We work with you the way a good editor works with
          a writer: asking the hard questions early, cutting what doesn’t serve
          the story, and pushing until the message lands where it matters.
        </p>
        <ArrowText href="/services">Explore our capabilities</ArrowText>
      </div>
      <div>
        {[
          [
            "Listen to the landscape.",
            "We audit your brand, your competitors and the media environment around you. We look at who is being covered, what they’re saying, where the gaps are and which conversations your brand can credibly own. Nothing gets planned until we know what’s already out there.",
          ],
          [
            "Find your distinctive voice.",
            "We define the story, the spokespeople and the proof points. That means one clear narrative, the right people to carry it, and the facts, data and examples that make it believable. The result is a voice that sounds like you and not like everyone else in your category.",
          ],
          [
            "Bring the story to life.",
            "We pitch, publish, host and amplify across channels. Media relations, owned content, events and digital come together as one plan, so every placement, post and conversation supports the same story and reaches the right audience.",
          ],
          [
            "Learn. Refine. Keep moving.",
            "We track coverage, sentiment and business impact, then sharpen the plan. You get honest reporting on what worked and what didn’t, and we use it to adjust the next move while the momentum is still with you.",
          ],
        ].map(([title, text]) => (
          <Reveal
            key={title}
            className="border-t border-black/20 py-10 md:py-14"
          >
            <h3 className="text-3xl tracking-[-.04em]">{title}</h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

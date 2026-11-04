import { Heading } from "@/components/media/shared";
import { BeforeAfter } from "./before-after";

export function DubaiTransformation() {
  return (
    <section className="media-section bg-[#e7efea]">
      <div className="media-wrap">
        <Heading
          label="Vision made visible"
          title="See the"
          accent="transformation."
        >
          Move the divider to explore the before and after view of the Burj
          Khalifa area. Dubai’s story is written in what it has built.
        </Heading>
        <BeforeAfter />
      </div>
    </section>
  );
}

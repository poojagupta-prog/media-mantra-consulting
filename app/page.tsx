import { ScrollProgress } from "@/components/common/scroll-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="[&_section[id]]:scroll-mt-[100px] [&_h2]:text-balance [&_h3]:text-balance [&_p]:text-pretty">
      <ScrollProgress />
    </div>
  );
}

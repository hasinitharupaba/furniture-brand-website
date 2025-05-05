import HeroStats from "@/components/ui/hero-stats";
import { Hero } from "@/components/shared/hero";

export default function Home() {
  return <div className="pb-[180px]">
    <Hero />
    <HeroStats />
  </div>;
}

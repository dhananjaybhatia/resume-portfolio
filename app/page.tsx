// "use client";

import Grid from "@/components/Grid";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";

const GlobeDemo = dynamic(
  () => import("@/components/ui/GridGlobe").then((mod) => mod.GlobeDemo),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
}

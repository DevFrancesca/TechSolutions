'use client'
import AboutUs from "@/components/aboutUs/page";
import Heroes from "@/components/heroes/page";
import News from "@/components/news/page";
import Services from "@/components/services/page";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-hidden">
      <div id="home">
        <Heroes/>
      </div>

      <div id="about">
        <AboutUs/>
      </div>

      <div id="news">
        <News/>
      </div>

      <div id="services">
        <Services/>
      </div>
    </main>
  );
}

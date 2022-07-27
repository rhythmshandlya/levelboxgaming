import { useTheme } from "next-themes";
import { useEffect } from "react";

import data from "../json/data.json";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Video from "../components/video";
import BannerSoon from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import LatestNews from "../components/News";
import ConceptArt from "../components/Art";
import Banners from "../components/Banners";

export default function Home() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(data.mode);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <BannerSoon />
      <ConceptArt />
      <LatestNews />
      <Banners />
      <Footer />
      <PopupWidget />
    </div>
  );
}

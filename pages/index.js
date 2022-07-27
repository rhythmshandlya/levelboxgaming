import { useTheme } from "next-themes";
import { useEffect } from "react";

import data from "../json/data.json";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import BannerSoon from "../components/BannerSoon";
import Footer from "../components/Footer";
import PopupWidget from "../components/PopupWidget";
import LatestNews from "../components/News";
import ConceptArt from "../components/Art";
import Banners from "../components/Banners";

export default function Home() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(data.mode);
  }, []);

  return (
    <>
      <Hero />
      <Video />
      <BannerSoon />
      <ConceptArt />
      <LatestNews />
      <Banners />
      <PopupWidget />
    </>
  );
}

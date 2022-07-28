import { useTheme } from "next-themes";
import { useEffect } from "react";

import data from "../json/data.json";
import Hero from "../components/Hero";
import Video from "../components/Video";
import BannerSoon from "../components/BannerSoon";
import PopupWidget from "../components/PopupWidget";
import LatestNews from "../components/News";
import ConceptArt from "../components/Art";
import Banners from "../components/Banners";
import useData from "../hooks/useData";

export default function Home() {
  const { setTheme } = useTheme();
  const { reachUs } = useData();

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
      {reachUs && <PopupWidget />}
    </>
  );
}

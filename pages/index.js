import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import LatestNews from "../components/News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import { useTheme } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";

import data from "../json/data.json";
import Banner from "../components/Banner";
import { useEffect } from "react";
import ConceptArt from "../components/Art";

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(data.mode);
  }, []);

  return (
    <div className="">
      <Navbar />

      <Hero />

      <Video data={data.video} />

      <Benefits imgPos="left" data={data.bannerSoon} download={data.download} />

      <ConceptArt data={data.news} theme={theme} />
      <LatestNews data={data.news} theme={theme} />

      <div className="mt-10 mb-10">
        {data.banners.map((banner, i) => {
          return <Banner data={banner} key={i} />;
        })}
      </div>

      <Footer
        data={data.footer}
        theme={theme}
        social={data.social}
        download={data.download}
      />

      <PopupWidget />
    </div>
  );
}

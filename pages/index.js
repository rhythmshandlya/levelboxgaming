import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import LatestNews from "../components/LatestNews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import { useTheme } from "next-themes";

// import useSWR from "swr";
// const fetcher = (url) => fetch(url).then((res) => res.json());

import staticData from "../json/data";
import Banner from "../components/Banner";
import { useEffect } from "react";

export default function Home() {
  //const { data, error } = useSWR("/api/static", fetcher);

  //if (error) return <div>Failed to load</div>;
  //if (!data) return <div>Loading</div>;
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  const data = JSON.parse(staticData);
  return (
    <>
      <Head>
        <title>Level Box Games</title>
        <meta name="description" content="Clash Of Clans: Level Box Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        data={data.navigation}
        theme={theme}
        setTheme={setTheme}
        social={data.social}
      />

      <Hero data={data.hero} />

      <Video data={data.video} />

      <Benefits imgPos="left" data={data.bannerSoon} download={data.download} />

      <LatestNews data={data.news} />

      <div className="text-center">
      <button className="bg-red-500 w-40 px-3.5 py-2 m-1 border-2 border-red-500 hover:bg-white text-black hover:text-black font-medium rounded  hover:border-red-500">
              Pre Order
            </button>
      </div>
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
    </>
  );
}

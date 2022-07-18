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

// import useSWR from "swr";
// const fetcher = (url) => fetch(url).then((res) => res.json());

import staticData from "../json/data";

export default function Home() {
  //const { data, error } = useSWR("/api/static", fetcher);

  //if (error) return <div>Failed to load</div>;
  //if (!data) return <div>Loading</div>;

  const data = JSON.parse(staticData);
  return (
    <>
      <Head>
        <title>Level Box Games</title>
        <meta name="description" content="Clash Of Clans: Level Box Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar data={data.navigation} />

      <Hero data={data.hero} />

      <Video data={data.video} />

      <Benefits imgPos="left" data={data.bannerSoon} />

      <LatestNews data={data.news} />
      <div className="text-center">
        <button className="bg-red-500 w-40 px-3.5 py-2 m-1 hover:bg-red-700 text-white hover:text-white font-medium rounded">
          News Archives
        </button>
      </div>

      <Footer />

      <PopupWidget />
    </>
  );
}

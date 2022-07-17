import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import LatestNews from "../components/LatestNews";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/static", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading</div>;

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

      <LatestNews />

      <Footer />

      <PopupWidget />
    </>
  );
}

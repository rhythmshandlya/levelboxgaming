import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import LatestNews from "../components/LatestNews";
export default function Home() {
  return (
    <>
      <Head>
        <title>Level Box Games</title>
        <meta name="description" content="Clash Of Clans: Level Box Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />

      <Video />

      <Benefits imgPos="left" data={benefitOne} />
      <LatestNews/>
      <Footer />
      <PopupWidget />
    </>
  );
}

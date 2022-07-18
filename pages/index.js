import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import LatestNews from "../components/LatestNews";
// import useSWR from "swr";
// const fetcher = (url) => fetch(url).then((res) => res.json());

let staticData = `{
  "navigation": {
      "links":[
          { "name": "Start Attack", "href": "#", "current": false },
          { "name": "News", "href": "#", "current": false },
          { "name": "About Us", "href": "#", "current": false },
          { "name": "Careers", "href": "#", "current": false },
          { "name": "Support", "href": "#", "current": false }
      ]
  },
  "hero": {
      "heading": "Stack Attack",
      "subheading": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit."
  },
  "video":{
      "link":"https://www.youtube.com/embed/_CPrYB6Q-HM?controls=0"
  },
  "bannerSoon":{
      "title": "Available Soon",
      "desc": "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
      "image": "/img/coc_landscape.png",
      "android": "#",
      "ios": "#"
  }
}`;

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

      <LatestNews />

      <Footer />

      <PopupWidget />
    </>
  );
}

import { ThemeProvider } from "next-themes";
import { AppProvider } from "../context/appContext";
import { NewsProvider } from "../context/newsContext";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../css/tailwind.css";
import "../css/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../util/i18n";
import Layout from "../components/Layout";
import { OtherProvider } from "../context/otherContext";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider attribute="class">
        <NewsProvider>
          <OtherProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </OtherProvider>
        </NewsProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;

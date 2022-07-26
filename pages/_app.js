import { ThemeProvider } from "next-themes";
import { AppProvider } from "../context/appContext";
import "../css/tailwind.css";
import "../css/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../util/i18n";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;

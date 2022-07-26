import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "../css/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; //importing font awesome css
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

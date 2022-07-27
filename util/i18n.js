import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import SyncBackend from "i18next-sync-fs-backend";
import FetchBackend from "i18next-fetch-backend";
import fetch from "isomorphic-fetch";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(FetchBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      supportedLngs: ["en", "ar", "fr"],
      fallbackLng: "en",
      detection: {
        order: ["cookie", "path", "htmlTag"],
        caches: ["cookie"],
      },
      saveMissing: true,
      interpolation: {
        escapeValue: false,
      },
      useLocalStorage: true,
      useDataAttrOptions: true,
      react: {
        useSuspense: false,
      },
      backend: {
        loadPath: "/json/{{lng}}.json",
        fetch,
      },
    },
    () => {
      console.log("Hello Loaded!");
    }
  );

export default i18next;

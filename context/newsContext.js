import { createContext, useState } from "react";

const NewsContext = createContext({});

import newsStatic from "../json/news.json";

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(newsStatic);

  return <NewsContext.Provider value={news}>{children}</NewsContext.Provider>;
};

export default NewsContext;

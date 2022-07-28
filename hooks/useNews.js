import { useContext } from "react";
import newsContext from "../context/newsContext";

const useNews = () => {
  return useContext(newsContext);
};

export default useNews;

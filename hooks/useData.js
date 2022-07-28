import { useContext } from "react";
import AppContext from "../context/appContext";

const useData = () => {
  return useContext(AppContext);
};

export default useData;

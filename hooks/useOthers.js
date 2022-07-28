import { useContext } from "react";
import otherContext from "../context/otherContext";

const useOther = () => {
  return useContext(otherContext);
};

export default useOther;

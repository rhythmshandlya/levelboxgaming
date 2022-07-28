import { createContext, useState } from "react";

const OtherContext = createContext({});

import otherStatic from "../json/other.json";

export const OtherProvider = ({ children }) => {
  const [other, setOther] = useState(otherStatic);

  return (
    <OtherContext.Provider value={other}>{children}</OtherContext.Provider>
  );
};

export default OtherContext;

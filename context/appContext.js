import { createContext, useState } from "react";

const AppContext = createContext({});

import dataStatic from "../json/data.json";

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(dataStatic);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;

import { createContext, useState } from "react";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [formatura, setFormatura] = useState([]);

  console.log("console formatura", formatura);

  return (
    <>
      <FormaturaContext.Provider value={{ formatura, setFormatura }}>
        {children}
      </FormaturaContext.Provider>
    </>
  );
};

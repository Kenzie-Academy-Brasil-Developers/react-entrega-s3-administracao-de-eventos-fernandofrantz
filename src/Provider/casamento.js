import { createContext, useState } from "react";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [casamento, setCasamento] = useState([]);

  console.log("console do casamento", casamento);

  return (
    <>
      <CasamentoContext.Provider value={{ casamento, setCasamento }}>
        {children}
      </CasamentoContext.Provider>
    </>
  );
};

import { createContext, useState } from "react";

export const ConfraternizacaoContext = createContext([]);

export const ConfraternizacaoProvider = ({ children }) => {
  const [confraternizacao, setConfraternizacao] = useState([]);

  console.log("console confraternizacao", confraternizacao);

  return (
    <>
      <ConfraternizacaoContext.Provider
        value={{ confraternizacao, setConfraternizacao }}
      >
        {children}
      </ConfraternizacaoContext.Provider>
    </>
  );
};

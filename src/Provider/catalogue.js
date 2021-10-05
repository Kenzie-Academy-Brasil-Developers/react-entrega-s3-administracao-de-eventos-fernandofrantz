import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);
  const [beer, setBeer] = useState("");

  const handleRequisition = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setCatalogue(response.data));
  };

  useEffect(() => {
    handleRequisition();
  }, []);

  return (
    <>
      <CatalogueContext.Provider value={{ catalogue, setBeer, beer }}>
        {children}
      </CatalogueContext.Provider>
    </>
  );
};

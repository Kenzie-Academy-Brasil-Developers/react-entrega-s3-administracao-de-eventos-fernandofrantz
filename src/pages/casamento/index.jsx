import { Button } from "@mui/material";
import { useContext } from "react";
import { CasamentoContext } from "../../Provider/casamento";
import "./styles.css";

const Casamento = () => {
  const { casamento } = useContext(CasamentoContext);
  const { setCasamento } = useContext(CasamentoContext);

  const handleRemove = (itemId) => {
    setCasamento(casamento.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <ul>
        {casamento &&
          casamento.map((item, index) => (
            <li className="products" key={index}>
              <h3>{item.name}</h3>
              <img src={item.image_url} alt="" />
              <h5>{item.tagline}</h5>
              <h4>Since: {item.first_brewed}</h4>
              <Button onClick={() => handleRemove(item.id)}>Remove Item</Button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Casamento;

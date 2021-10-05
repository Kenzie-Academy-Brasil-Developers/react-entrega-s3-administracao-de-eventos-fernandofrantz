import { Button } from "@mui/material";
import { useContext } from "react";
import { ConfraternizacaoContext } from "../../Provider/confraternizacao";
import "./styles.css";

const Confraternizacao = () => {
  const { confraternizacao } = useContext(ConfraternizacaoContext);
  const { setConfraternizacao } = useContext(ConfraternizacaoContext);

  const handleRemove = (itemId) => {
    setConfraternizacao(confraternizacao.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <ul>
        {confraternizacao &&
          confraternizacao.map((item, index) => (
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
export default Confraternizacao;

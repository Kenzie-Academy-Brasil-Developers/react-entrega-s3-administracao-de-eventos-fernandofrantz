import { Button } from "@mui/material";
import { useContext } from "react";
import { FormaturaContext } from "../../Provider/formatura";
import "./styles.css";

const Formatura = () => {
  const { formatura } = useContext(FormaturaContext);
  const { setFormatura } = useContext(FormaturaContext);

  const handleRemove = (itemId) => {
    setFormatura(formatura.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <ul>
        {formatura &&
          formatura.map((item, index) => (
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
export default Formatura;

import { useContext, useState } from "react";
import { CasamentoContext } from "../../Provider/casamento";
import { CatalogueContext } from "../../Provider/catalogue";
import { ConfraternizacaoContext } from "../../Provider/confraternizacao";
import { FormaturaContext } from "../../Provider/formatura";
import { Li, Ul } from "./styles";
import "./styles.css";
import { Button } from "@mui/material";

const Home = () => {
  const { catalogue } = useContext(CatalogueContext);

  const { setBeer } = useContext(CatalogueContext);
  const { beer } = useContext(CatalogueContext);

  const { setCasamento } = useContext(CasamentoContext);
  const { casamento } = useContext(CasamentoContext);

  const { setConfraternizacao } = useContext(ConfraternizacaoContext);
  const { confraternizacao } = useContext(ConfraternizacaoContext);

  const { setFormatura } = useContext(FormaturaContext);
  const { formatura } = useContext(FormaturaContext);

  const [showEvents, setShowEvents] = useState(false);
  const handleClick = (item) => {
    setShowEvents(true);
    setBeer(item);
  };

  const funcFormatura = () => {
    setShowEvents(false);
    setFormatura([...formatura, beer]);
  };
  const funcConfraternizacao = () => {
    setShowEvents(false);
    setConfraternizacao([...confraternizacao, beer]);
  };
  const funcCasamento = () => {
    setShowEvents(false);
    setCasamento([...casamento, beer]);
  };

  return (
    <>
      <main className="container">
        <section>
          <h1>Catálogo de bebidas: </h1>

          <Ul>
            {catalogue &&
              catalogue.map((item, index) => (
                <Li key={index}>
                  <h3>{item.name}</h3>
                  <img src={item.image_url} alt="" />
                  <h5>{item.tagline}</h5>
                  <h4>Since: {item.first_brewed}</h4>
                  <Button onClick={() => handleClick(item)}>
                    Add to event
                  </Button>
                </Li>
              ))}
          </Ul>
        </section>
        {showEvents && (
          <aside>
            <h3>Escolha o evento para adicionar a bebida.</h3>
            <Button className="buttonAside" onClick={funcFormatura}>
              Adicionar a formatura
            </Button>
            <Button className="buttonAside" onClick={funcCasamento}>
              Adicionar ao casamento
            </Button>
            <Button className="buttonAside" onClick={funcConfraternizacao}>
              Adicionar a confraternização
            </Button>
          </aside>
        )}
      </main>
    </>
  );
};
export default Home;

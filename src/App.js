import { useContext } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { CasamentoProvider } from "./Provider/casamento";
import { CatalogueProvider } from "./Provider/catalogue";
import { ConfraternizacaoProvider } from "./Provider/confraternizacao";
import { FormaturaProvider } from "./Provider/formatura";
import Routes from "./routes";

function App() {
  const catalogue = useContext(CatalogueProvider);
  console.log("console do app", catalogue);
  return (
    <div className="App">
      <header className="App-header">
        <CatalogueProvider>
          <CasamentoProvider>
            <ConfraternizacaoProvider>
              <FormaturaProvider>
                <Menu />
                <Routes />
              </FormaturaProvider>
            </ConfraternizacaoProvider>
          </CasamentoProvider>
        </CatalogueProvider>
      </header>
    </div>
  );
}

export default App;

import { Route, Switch } from "react-router";
import Formatura from "../pages/formatura";
import Casamento from "../pages/casamento";
import Confraternizacao from "../pages/confraternização";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
      <Route path="/casamento">
        <Casamento />
      </Route>
      <Route path="/confraternizacao">
        <Confraternizacao />
      </Route>
    </Switch>
  );
};
export default Routes;

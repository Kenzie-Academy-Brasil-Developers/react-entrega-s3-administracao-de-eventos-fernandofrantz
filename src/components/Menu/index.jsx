import { AppBar, Toolbar, MenuItem } from "@mui/material";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();
  const sendTo = (path) => history.push(path);

  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
            <MenuItem onClick={() => sendTo("/formatura")}>Formatura</MenuItem>
            <MenuItem onClick={() => sendTo("/casamento")}>Casamento</MenuItem>
            <MenuItem onClick={() => sendTo("/confraternizacao")}>
              Confraternização
            </MenuItem>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default Menu;

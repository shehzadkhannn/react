import { useState } from "react";
import Nav from "./component/NavBar";
const App = () => {
  const [theme, settheme] = useState("light");
  return (
    <div>
      <Nav theme={theme} settheme={settheme}>
        <h2>this is nav bar</h2>
        <h2> another nav bar</h2>
      </Nav>
    </div>
  );
};

export default App;

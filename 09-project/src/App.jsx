import { useState } from "react";
import NavBar from "./component/NavBar";

const App = () => {
  const [Theme, setTheme] = useState("light");
  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <NavBar setTheme={setTheme} Theme={Theme} />
    </div>
  );
};

export default App;

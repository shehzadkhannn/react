import { useState } from "react";
import { createContext } from "react";

// This file intentionally exports both the Context API object and its provider.
// eslint-disable-next-line react-refresh/only-export-components
export const themeData = createContext();
const Themecontext = (props) => {
  const [theme, settheme] = useState("light");
  return (
    <div>
      <themeData.Provider value={[theme, settheme]}>
        {props.children}
      </themeData.Provider>
    </div>
  );
};

export default Themecontext;

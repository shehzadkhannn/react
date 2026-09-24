import { useContext } from "react";
import { themeData } from "./Themecontext";

const Nav2 = () => {
  const data = useContext(themeData);
  return (
    <div className="flex gap-10">
      <h2>home</h2>
      <h2>about</h2>
      <h2>product</h2>
      <h2>{data}</h2>
    </div>
  );
};

export default Nav2;

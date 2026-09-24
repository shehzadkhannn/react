import Nav2 from "./Nav2";

const NavBar = (props) => {
  return (
    <div className="flex justify-between bg-blue-600 text-lg font-bold p-5">
      <h1>Shazy</h1>
      {props.children[0]}
      {props.children[1]}
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default NavBar;

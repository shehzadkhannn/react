import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-[#1F150C] ">
      <h2>Shazy</h2>
      <div className="flex gap-10 ">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/product">product</Link>
      </div>
    </div>
  );
};

export default navbar;

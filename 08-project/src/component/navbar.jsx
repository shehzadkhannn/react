import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="bg-[#1F150C] flex justify-between p-3 font-semibold text-lg text-white">
      <h2>Shazy</h2>
      <div className="flex gap-10 ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default navbar;

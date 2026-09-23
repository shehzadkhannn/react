import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const contact = () => {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <Link to="/product/mens">mens</Link>
        <Link to="/product/womens">women</Link>
        <Link to="/product/keds">keds</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default contact;

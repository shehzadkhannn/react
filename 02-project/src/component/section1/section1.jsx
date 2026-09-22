import Navbar from "./navbar";
import Pagecontent from "./pagecontent";

const section1 = (props) => {
  return (
    <div>
      <Navbar />
      <Pagecontent user={props.user} />
    </div>
  );
};

export default section1;

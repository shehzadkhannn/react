import { Bookmark } from "lucide-react/";
const card = (props) => {
  return (
    <div className="card">
      <div className="header">
        <img src={props.logo} alt="" />
        <button>
          save <Bookmark size={15} />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>5 days ago</span>
        </h3>
        <h2>{props.post}</h2>
        <div className="center-items">
          <h4>{props.time}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>
      <div className="buttom">
        <div>
          <h3>{props.pph}</h3>
          <p>{props.loc}</p>
        </div>
        <button>apply now</button>
      </div>
    </div>
  );
};

export default card;

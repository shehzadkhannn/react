import Rightcontentcard from "./rightcontentcard";
const rightcard = (props) => {
  return (
    <div className="h-full w-70 rounded-4xl overflow-hidden relative shrink-0">
      <img src={props.imag} alt="" className="w-full h-full object-cover" />
      <Rightcontentcard tag={props.tag} id={props.id} color={props.color} />
    </div>
  );
};

export default rightcard;

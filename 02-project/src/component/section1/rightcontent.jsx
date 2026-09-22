import Rightcard from "./rightcard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className=" w-2/3 py-7 px-4 flex justify-center overflow-x-auto gap-10"
    >
      {props.user.map(function (elem, idx) {
        return (
          <Rightcard
            imag={elem.img}
            tag={elem.tag}
            key={idx}
            id={idx}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;

const button = (props) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      <button
        style={{ opacity: props.index == 1 ? 0.5 : 1 }}
        onClick={() => {
          if (props.index > 1) {
            props.setindex(props.index - 1);
            props.setuserData([]);
          }
        }}
        className="bg-amber-400 text-sm active:scale-95 rounded cursor-pointer text-black px-3 py-2"
      >
        prev
      </button>
      <h4>page {props.index}</h4>
      <button
        onClick={() => {
          props.setindex(props.index + 1);
          props.setuserData([]);
        }}
        className="bg-amber-400 text-sm active:scale-95 rounded cursor-pointer text-black px-3 py-2"
      >
        next
      </button>
    </div>
  );
};

export default button;

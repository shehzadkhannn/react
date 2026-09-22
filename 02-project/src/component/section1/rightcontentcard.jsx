const rightcontentcard = (props) => {
  return (
    <div>
      <div className="absolute w-full h-full  top-0 left-0 px-5 py-4 flex flex-col justify-between">
        <div className="rounded-full bg-white text-black text-3xl font-bold h-12 w-12 flex justify-center items-center">
          {props.id + 1}
        </div>
        <div className="text-white">
          <p className="mb-8 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            deleniti doloribus corporis nulla hic amet inventore voluptatem nam
            expedita consequatur!
          </p>
          <div className=" flex justify-between ">
            <button
              style={{ backgroundColor: props.color }}
              className=" rounded-full bg-blue-600 px-5 py-1.5"
            >
              {props.tag}
            </button>

            <button
              style={{ backgroundColor: props.color }}
              className="rounded-full  px-3 py-2 "
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rightcontentcard;

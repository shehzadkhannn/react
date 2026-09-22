import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();

    const copytask = [...task];
    copytask.push({ details, title });
    settask(copytask);
    settitle("");
    setdetails("");
  };
  const notedelete = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask);
  };
  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex lg:w-1/2 items-start p-10 flex-col gap-4"
      >
        <input
          className="px-5 py-2 border-2 rounded w-full"
          type="text"
          placeholder="Enter notes heading"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          className=" w-full  px-5 py-2 border-2 rounded "
          name=""
          id=""
          placeholder="write details"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        ></textarea>
        <button className="bg-white text-black w-full  px-5 py-2 border-2 rounded">
          Add notes
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l">
        <h1 className="font-bold text-2xl">Recent notes</h1>
        <div className="flex flex-wrap mt-5 gap-2 h-full overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between w-40 h-52 bg-cover bg-[url('https://e7.pngegg.com/pngimages/733/319/png-clipart-paper-clip-printing-and-writing-paper-romantic-background-miscellaneous-photography-thumbnail.png')] text-black rounded"
              >
                <div>
                  <h3 className="font-bold px-7 py-4 leading-5 ">
                    {elem.title}
                  </h3>
                  <p className="py-0 px-7 mt-0 leading-3 text-sm">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    notedelete(idx);
                  }}
                  className="bg-red-600 active:scale-95 text-white rounded m-1"
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

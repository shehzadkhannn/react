import axios from "axios";
import Button from "./component/button";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [index, setindex] = useState(1);
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=21`,
      );
      return response.data;
    };
    getData().then((data) => setuserData(data));
  }, [index]);
  let printUserdata = (
    <h3 className="text-gray-400 absolute top-1/2 left-1/2 -translatex-1/2 -translatey-1/2 font-semibold">
      Loading.....
    </h3>
  );
  if (userData.length > 0) {
    printUserdata = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <div className="h-44 w-40 overflow-hidden ">
            <a href={elem.url} target="_blank">
              <img
                className="h-full w-full object-cover rounded-xl"
                src={elem.download_url}
                alt=""
              />
            </a>
          </div>
          <h1 className="font-bold text-lg">{elem.author}</h1>
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen text-white overflow-auto">
      <div className="flex flex-wrap gap-4 overflow-auto h-[90%]">
        {printUserdata}
      </div>

      <Button index={index} setindex={setindex} setuserData={setuserData} />
    </div>
  );
};

export default App;

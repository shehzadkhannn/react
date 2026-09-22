import axios from "axios";
import { useState } from "react";
export const App = () => {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setdata(response.data);
  };
  return (
    <div>
      <button onClick={getdata}>get data</button>
      <div>
        {data.map((elem, idx) => {
          return (
            <h1>
              hello {idx} {elem.author}{" "}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default App;

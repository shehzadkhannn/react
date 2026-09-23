import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const achanging = () => {
    console.log("a ki value changr ho gye");
  };
  const bchanging = () => {
    console.log("b ki value changr ho gye");
  };
  useEffect(() => {
    bchanging();
  }, [b]);
  useEffect(() => {
    achanging();
  }, [a]);

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          seta(a + 1);
        }}
      >
        change a
      </button>
      <button
        onClick={() => {
          setb(b - 1);
        }}
      >
        change b
      </button>
    </div>
  );
};

export default App;

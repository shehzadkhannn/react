import Section1 from "./component/section1/section1";
import Section2 from "./component/section2/section2";
const App = () => {
  const user = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5xTiso-Q0u3FlQ8vSsz0n1kXGq1HIafn9yA7-R8LDw&s=10",
      intro: "",
      tag: "stisfied",
      color: "green",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShV2H6RmTbcDVhN6lLh3SWRu4H0ZtW6mhm3MyxGn36XA&s=10",
      intro: "",
      tag: "underserved",
      color: "purple",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTqqii001x9K939hPSk8bgAXnbnRgvdO480VUx4ArzA&s=10",
      intro: "",
      tag: "underbanked",
      color: "orange",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmq_12kCsF0W6v9lQ61xtVe9UgeduQ3TUiWO7nhpTkdw&s=10",
      intro: "",
      tag: "underreview",
      color: "blue",
    },
  ];
  return (
    <div>
      <Section1 user={user} />
      <Section2 />
    </div>
  );
};

export default App;

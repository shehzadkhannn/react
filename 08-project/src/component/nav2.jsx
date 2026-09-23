import { useNavigate } from "react-router-dom";
const Nav2 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-[#412D15] ">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-[#E1DCC9] px-5 py-3 rounded-2xl font-medium m-3 text-black cursor-pointer active:scale-95"
      >
        Return to Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-[#E1DCC9] px-5 py-3 rounded-2xl font-medium m-3 text-black cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-[#E1DCC9] px-5 py-3 rounded-2xl font-medium m-3 text-black cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;

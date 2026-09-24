const Nav2 = (props) => {
  return (
    <div className="flex gap-10">
      <h2>home</h2>
      <h2>about</h2>
      <h2>product</h2>
      <h2>{props.theme}</h2>
    </div>
  );
};

export default Nav2;

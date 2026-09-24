const NavBar = (props) => {
  const changeTheme = () => {
    props.setTheme("dark");
  };
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default NavBar;

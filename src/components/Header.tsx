import { NavLink, Link } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="flex flex-row gap-5">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login" end>
          Login
        </NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </>
  );
};

export default Header;

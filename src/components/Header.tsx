import { NavLink } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="flex flex-row gap-5">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Signup
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Profile
        </NavLink>
      </nav>
    </>
  );
};

export default Header;

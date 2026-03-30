import { NavLink } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="flex flex-row gap-10 items-center justify-center text-2xl">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : ""
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : ""
          }
        >
          Signup
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : ""
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : ""
          }
        >
          Upload
        </NavLink>
      </nav>
    </>
  );
};

export default Header;

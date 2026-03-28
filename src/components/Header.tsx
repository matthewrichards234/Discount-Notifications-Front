import { NavLink } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="flex flex-row gap-10 items-center justify-center text-2xl">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : "text-black hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : "text-black hover:underline"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : "text-black hover:underline"
          }
        >
          Signup
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline" : "text-black hover:underline"
          }
        >
          Profile
        </NavLink>
      </nav>
    </>
  );
};

export default Header;

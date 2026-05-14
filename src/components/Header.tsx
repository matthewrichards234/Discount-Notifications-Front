import { NavLink } from "react-router";
const Header = () => {
  return (
    <>
      <nav className="flex flex-row items-center text-2xl border-2 fixed top-0 w-full bg-white">
        <NavLink to={"/"} className={"ml-4"}>
          LOGO
        </NavLink>
        <div className="ml-auto flex flex-row items-center gap-3 p-4">
          <NavLink to={"/cart"} className={"p-0 m-0"}>
            <img
              src="src/assets/parcel.png"
              alt="Paper bag icons created by Sergei Kokota - Flaticon"
              className="w-7 h-7 p-0 m-0"
            />
          </NavLink>
          <NavLink to={"/auth"} className={"p-0"}>
            SIGN IN
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;

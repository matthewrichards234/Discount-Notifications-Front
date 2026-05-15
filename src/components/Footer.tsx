import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-gray-100 p-10">
      <NavLink to={"/about-us"}>About Us</NavLink>
    </div>
  );
};

export default Footer;

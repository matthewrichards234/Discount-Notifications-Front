import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-gray-100 p-10 flex flex-row items-center justify-between">
      <NavLink to={"/about-us"}>About Us</NavLink>
      <a
        href="https://www.linkedin.com/in/matthew-richards234/"
        target="_blank"
      >
        LinkedIn
      </a>
      <a href="https://github.com/matthewrichards234" target="_blank">
        GitHub
      </a>
    </div>
  );
};

export default Footer;

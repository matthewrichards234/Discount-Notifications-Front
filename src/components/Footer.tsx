import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-white">
      <NavLink to={"/about-us"}>About Us</NavLink>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis
        veritatis delectus quaerat laudantium sapiente, magnam at placeat harum
        tempore dolorem est illum itaque blanditiis laborum enim! Quisquam,
        voluptatibus magni!
      </p>
    </div>
  );
};

export default Footer;

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="main-div flex flex-row justify-between py-5 bg-gray-200 ">
          <div className="logo">
            <img className="w-25 ml-5" src={logo} alt="" />
          </div>
          <div className="pages mr-5 text-2xl font-bold text-green-600 ">
            <ul className=" flex flex-row ">
              <li className=" mr-5 hover:text-blue-800 ">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className=" mr-5 hover:text-blue-800">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className=" mr-5 hover:text-blue-800">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

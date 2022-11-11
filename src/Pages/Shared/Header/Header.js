import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/master-panda logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Header.css";


const Header = () => {
   
  const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

  const meniItem = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>

      {
        user?.uid ?
        <>
         <li className="font-semibold">
         <Link to='/myreviews'>My reviews</Link>
        <Link to='/addservice'>Add service</Link>
        <Link  onClick={handleLogOut}>Logout</Link>
      </li>
      
        </>:
        <>
         
         <li className="font-semibold">
        <Link  to='/login'>Login</Link>
      </li>
     
         
        </>
      }
    </>
  );
  return (
    <div>
    
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {meniItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img className="h-10 w-10 header-img" src={img} alt="" />
          </Link>
          <h2 className="text-2xl text-orange-400">personal Trainer</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{meniItem}</ul>
        </div>
        
      </div>
    </div>
  );
};

export default Header;

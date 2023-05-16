import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Group 1329.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between px-3 items-center py-6">
      <div>
        <img src={logo} alt="Logo" className="w-40" />
      </div>
      <div>
        <ul className="flex items-center gap-4 font-semibold">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Donation</NavLink>
          </li>
          <li>
            <NavLink>Events</NavLink>
          </li>
          <li>
            <NavLink>Blog</NavLink>
          </li>
          <li>
              {user ? (
                <button onClick={handleLogOut} className="btn btn-secondary">
                  Logout
                </button>
              ) : (
                <Link to="/login"><button className="btn btn-secondary">Login</button></Link>
              )}
          </li>
          <li>
            <Link>
              <button className="btn">Admin</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

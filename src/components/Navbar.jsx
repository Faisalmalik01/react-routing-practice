import { NavLink, useNavigate } from "react-router-dom";


export default function Navbar() {

  const navigate = useNavigate();


  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Navigation Links */}
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"
            }
          >
            Dashboard
          </NavLink>
        </li>
          <li>
    <NavLink
      to="/pages"
      className={({ isActive }) =>
        isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"
      }
    >
      Pages Layout
    </NavLink>
  </li>
      </ul>
      

      
      <button
         onClick={() => navigate("/login")}
        className="bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-400 text-black"
      >
       Login
      </button>
    </nav>
  );
}

import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-4 mb-4">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"
          }
        >
          Settings
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

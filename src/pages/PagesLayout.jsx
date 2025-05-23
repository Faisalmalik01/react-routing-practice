import { NavLink, Outlet } from "react-router-dom";

export default function PagesLayout() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pages Section</h2>
      
      {/* Local Navigation for Pages routes */}
      <nav className="mb-2">
        <NavLink to="/pages" className="mr-4 hover:text-blue-500">Some Page</NavLink>
        <NavLink to="/pages/another" className="hover:text-blue-500">Another Page</NavLink>
      </nav>

      {/* 🔄 Global Navigation */}
      <nav className="mb-6 border-t pt-2">
        <NavLink to="/" className="mr-4 hover:text-green-500">🏠 Home</NavLink>
        <NavLink to="/about" className="hover:text-green-500">ℹ️ About</NavLink>
      </nav>

      {/* Renders current nested page (e.g. SomePage, AnotherPage) */}
      <Outlet />
    </div>
  );
}

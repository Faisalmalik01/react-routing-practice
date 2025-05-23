import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"; // Acts as layout
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import PagesLayout from "./pages/PagesLayout";
import SomePage from "./pages/SomePage"; 
import AnotherPage from "./pages/AnotherPage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Dashboard Nested Routes (no ProtectedRoute) */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="user/:id" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        {/* Login Route */}
          <Route path="/login" element={<Login />} />
          


          {/* Pages layout with nested routes */}
          <Route path="pages" element={<PagesLayout />}>
            <Route index element={<SomePage />} />
            <Route path="another" element={<AnotherPage />} />
          </Route>

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

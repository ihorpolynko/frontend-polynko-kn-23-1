import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <h3>Панель керування</h3>
      <nav>
        <NavLink to="/dashboard" end style={{ marginRight: 10 }}>Home</NavLink>
        <NavLink to="/dashboard/profile" style={{ marginRight: 10 }}>Profile</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
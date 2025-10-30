import { NavLink } from "react-router-dom";

export default function Navbar() {
  const active = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
    marginRight: "15px"
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={active}>Home</NavLink>
      <NavLink to="/about" style={active}>About</NavLink>
      <NavLink to="/contact" style={active}>Contact</NavLink>
      <NavLink to="/products" style={active}>Products</NavLink>
      <NavLink to="/dashboard" style={active}>Dashboard</NavLink>
    </nav>
  );
}
import { NavLink } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#000", padding: "1rem", width: "100%" }}>
      {/* <ul style={{ display: "flex", gap: "2rem", listStyle: "none", color: "#fff", width: "100%" }}>
        <li><a href="#home" style={{ color: 'yellow' }}>Inicio</a></li>
        <li><a href="#about" style={{ color: 'yellow' }}>Quiénes somos</a></li>
        <li><a href="#projects" style={{ color: 'yellow' }}>Proyectos</a></li>
        <li><a href="#contact" style={{ color: 'yellow' }}>Contáctanos</a></li>
      </ul> */}
      <ul className="navBar">
        <li>
          <NavLink to="/" style={{ color: 'yellow' }}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/home" style={{ color: 'yellow' }}>Home</NavLink>
        </li>
        <li>
        <NavLink to="/about" style={{ color: 'yellow' }}>about</NavLink>
        </li>
        <li>
        <NavLink to="/projects" style={{ color: 'yellow' }}>projects</NavLink>
        </li>
        <li>
        <NavLink to="/contact" style={{ color: 'yellow' }}>contactanos</NavLink>
        </li>
        <li>
        <NavLink to="/analytics" style={{ color: 'yellow' }}>analitics</NavLink>
        </li>
        <li>
        <NavLink to="/admin" style={{ color: 'yellow' }}>Admin</NavLink>
        </li>
      </ul>



    </nav>
  );
}
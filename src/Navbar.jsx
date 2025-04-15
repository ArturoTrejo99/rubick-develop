import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
        <img 
          src='/assets/1.jpg' 
          alt="Rubick-Develop Logo" 
          className="logo"
        />
        <h1 className="title">RUBICK-DEVELOP</h1>
        <p className="slogan">Desarrollando ideas</p>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Quiénes somos</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li><Link to="/contact">Contáctanos</Link></li>
      </ul>
    </nav>
  );
}
export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#000", padding: "1rem", width: "100%"}}>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", color: "#fff" , width: "100%" }}>
        <li><a href="#home" style={{ color: 'yellow' }}>Inicio</a></li>
        <li><a href="#about" style={{ color: 'yellow' }}>Quiénes somos</a></li>
        <li><a href="#projects" style={{ color: 'yellow' }}>Proyectos</a></li>
        <li><a href="#contact" style={{ color: 'yellow' }}>Contáctanos</a></li>
      </ul>
    </nav>
  );
}
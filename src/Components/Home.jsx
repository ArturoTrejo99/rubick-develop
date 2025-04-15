import logo from '../assets/1.jpg';

export default function Home() {
  return (
    <section id="home" style={{ textAlign: "center", padding: "2rem" }}>
      <img src={logo} alt="Rubick Logo" style={{ maxWidth: "300px" }} />
      <h1 style={{ color: "yellow" }}>RUBICK SISTEMS</h1>
      <h2 style={{ color: "white" }}>OPTIMAL SOLUTIONS</h2>
    </section>
  );
}
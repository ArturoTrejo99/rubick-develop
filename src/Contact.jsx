export default function Contact() {
  return (
    <section id="contact" style={{ paddingLeft: "2rem", color: "#fff" }}>
      <h2>Contáctanos</h2>
      <form>
        <input type="text" placeholder="Tu nombre" /><br /><br />
        <input type="email" placeholder="Tu correo" /><br /><br />
        <textarea placeholder="Tu mensaje" /><br /><br />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
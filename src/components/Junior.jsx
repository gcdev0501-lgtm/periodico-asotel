import "../styles/junior.css";
import ImgJunior from "../assets/img-junior-campeon.jpg";

export default function Junior() {
  return (
    <section className="aside-junior">
      <h3>⚪🔴⚪ Junior Campeón 🔴⚪🔴</h3>

      <img
        src={ImgJunior}
        alt="Junior campeón"
        className="img-victoria"
      />

      <p>
        ¡Barranquilla celebra! Junior se coronó campeón de la Liga Profesional Colombiana 2025.
        Un triunfo histórico que refleja la garra, disciplina y talento del equipo,
        llenando de orgullo a sus aficionados y a toda la ciudad.
      </p>

      <div className="proxima-fecha">
         <h4>📅 Próxima cita</h4>
        <p>Superliga BetPlay 2026: Junior vs Santa Fe</p>
        <span>A inicios de 2026 — Barranquilla  jueves 15 de enero . 
          El partido decisivo se disputará en Bogotá el miércoles 21 de enero, en el estadio El Campín</span>
      </div>

      <a
        href="https://www.instagram.com/juniorclubsa/"
        target="_blank"
        rel="noreferrer"
        className="instagram-link"
      >
        📸 Instagram Oficial del Junior
      </a>
    </section>
  );
}

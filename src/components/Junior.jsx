import { Link } from "react-router-dom";
import "../styles/junior.css";
import ImgJunior from "../assets/img-junior-campeon.jpg";

import { GrInstagram } from "react-icons/gr";
import carnaval from '../assets/img-rancho2.jfif';


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

         <Link to="/entretenimiento" className="preview-link">
        
        <img
          src={carnaval}
          alt="Telecarnavaleando con Asotel"
          className="img-ranch"
        />
          
        <div className="preview-texto">
          <h3>ASOTEL ES DE SOCIOS ALEGRES Y CARNAVALEROS.</h3>

          <p>
            Cada año, el espíritu carnavalero se despierta en nuestra ciudad
            y nos reunimos para celebrar uno de los eventos más alegres
            de nuestra asociación.
          </p>
           
          <span className="leer-mas">Leer más →</span>
        </div>

      </Link>

      <a
        href="https://www.instagram.com/ranchocurrambero/"
        target="_blank"
        rel="noreferrer"
        className="instagram-link"
      >
        <GrInstagram /> Instagram Oficial del Rancho 
      </a>
    </section>
  );
}

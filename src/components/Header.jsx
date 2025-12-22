import { useEffect, } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

import logoAsotel from "../assets/ImgLOGOAsotel_final3.jpg";
import banderaAsotel from "../assets/bandera_Asotel1.png";


export default function Header() {
   const navigate = useNavigate(); // <-- HOOK PARA NAVEGACIÓN
  useEffect(() => {
    function actualizarFechaHora() {
      const ahora = new Date();
      const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };

      const fechaFormateada = ahora.toLocaleDateString("es-ES", opciones);
      const fechaMayus =
        fechaFormateada.charAt(0).toUpperCase() +
        fechaFormateada.slice(1);

      const el = document.getElementById("fecha-hora");
      if (el) el.textContent = fechaMayus;
    }

    actualizarFechaHora();
    const intervalo = setInterval(actualizarFechaHora, 60000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <header className="header">
      <div className="top-bar">
        <span id="fecha-hora" className="date"></span>
        <input
          type="text"
          placeholder="Buscar..."
          className="search-box"
        />
      </div>

      <div className="logo">
  {/* Zona clicable */}
  <div 
    className="logo-container" 
    onClick={() => navigate("/")}
    style={{ cursor: "pointer" }}
  >
    <img src={logoAsotel} alt="Logo ASOTEL" className="logo-final" />
    <h1>ASOTEL</h1>
    <img src={banderaAsotel} alt="Bandera ASOTEL" className="logo-image" />
  </div>

  {/* Esto no se toca, no forma parte del clic */}
  <p className="tagline">
    Asociación de Técnicos Pensionados de la EDT
  </p>
</div>

      <nav className="menu">
        <ul>
          <li><a href="#">Locales</a></li>
          <li><a href="#">Región</a></li>
          <li><a href="#">País</a></li>
          <li><a href="#">Política</a></li>
          <li><a href="#">Judicial</a></li>
          <li><a href="#">Mundo</a></li>
          <li><a href="#">Deportes</a></li>
          <li><a href="#">Entretenimiento</a></li>
           <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
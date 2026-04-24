import "../styles/footer.css";

import { LuScrollText } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <p><LuScrollText /> {year} ASOTEL - Todos los derechos reservados.</p>
      <p>Administracion: Junta Directiva. <br /> Director: J Rodriguez.</p>
      
    </footer>
  );
}
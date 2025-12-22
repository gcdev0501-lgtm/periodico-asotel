import '../styles/noticiaprincipal.css'
import ImgJunta from "../assets/img-asotel-social2.jpg";

export default function NoticiaPrincipal() {
  
  return (
    
    <article className="noticia-principal">
      <h2>LOCALES</h2>
      <img src={ImgJunta} alt="Noticia principal" />
      <h1>JUNTA DIRECTIVA ASOTEL 2025</h1>
      <p>
        Conformada por la nueva junta directiva que liderará la asociación
        durante el período 2025.
      </p>
    </article>
  );
}

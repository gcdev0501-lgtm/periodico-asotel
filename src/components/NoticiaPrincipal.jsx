import '../styles/noticiaprincipal.css'
import ImgJunta from "../assets/img-JuntaDirectiva2026.png";

export default function NoticiaPrincipal() {
  
  return (
    
    <article className="noticia-principal">
      <h2>LOCALES</h2>
      <img src={ImgJunta} alt="Noticia principal" />
      <h1>JUNTA DIRECTIVA ASOTEL 2026</h1>
      <p>
        Conformada por la nueva junta directiva que liderará la asociación
        durante el período 2026. <br />
        De izquierda a derecha:
Cesar Solano, Juan Polo, Gilberto Salas, Roberto Donado, Martin Arango, Alfredo Pérez y José Rodríguez.
      </p>
    </article>
  );
}

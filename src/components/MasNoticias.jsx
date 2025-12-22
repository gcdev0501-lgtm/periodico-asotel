import "../styles/masnoticias.css";

// Importar imágenes desde assets
import juanga from "../assets/Juanga-2.jpg";
import giro from "../assets/Giro-de-Rigo.jpg";
import thrump from "../assets/thrump_maduro.jpeg";
import lideres from "../assets/lideres_sociales.jpeg";

const noticias = [
  {
    id: 1,
    img: juanga,
    categoria: "SOCIEDAD",
    texto: "Juan Gabriel, el artista que siempre pensó en la eternidad.",
  },
  {
    id: 2,
    img: giro,
    categoria: "DEPORTE",
    texto: "El Giro de RIGO; más de 8.000 ciclistas dieron inicio al primer evento en la ciudad de Barranquilla de esta categoría.",
  },
  {
    id: 3,
    img: thrump,
    categoria: "MUNDO",
    texto: "Trump cuestiona una guerra con Venezuela, pero advierte que Maduro tendría los días contados.",
  },
  {
    id: 4,
    img: lideres,
    categoria: "PAÍS",
    texto: "Gobierno anuncia nuevas medidas tras denuncias de líderes sociales.",
  },
];

export default function MasNoticias() {
  return (
    <section className="bottom-news">
      <h3 className="section-title">Más noticias</h3>
      <div className="news-row">
        {noticias.map((n) => (
          <article key={n.id} className="news-item">
            <img src={n.img} alt={`Noticia ${n.categoria}`} />
            <h4>{n.categoria}</h4>
            <p>{n.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
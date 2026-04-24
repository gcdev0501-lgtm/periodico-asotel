import "../styles/masnoticias.css";

// Importar imágenes desde assets
import pension from "../assets/img-mesada-pensional.webp";
import giro from "../assets/Giro-de-Rigo.jpg";
import imgMaduro from "../assets/img-nicolasmaduro.webp";
import lideres from "../assets/lideres_sociales.jpeg";

const noticias = [
  {
    id: 1,
    img: pension,
    categoria: "SOCIEDAD",
    texto: "El aumento a nuestros salarios pensionales se rige por la variación del índice de precios al consumidor (IPC).",
  },
  {
    id: 2,
    img: giro,
    categoria: "DEPORTE",
    texto: "El Giro de RIGO; más de 8.000 ciclistas dieron inicio al primer evento en la ciudad de Barranquilla de esta categoría.",
  },
  {
    id: 3,
    img: imgMaduro,
    categoria: "MUNDO",
    texto: "Tras un ataque militar que dejó civiles fallecidos, la vicepresidenta de Venezuela responsabiliza a Estados Unidos, mientras desconoce el paradero del presidente y la primera dama..",
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
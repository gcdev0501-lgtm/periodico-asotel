 import "../styles/noticiaslinks.css";

const noticiasLinks = [
  {
    id: "noticiaA",
    titulo:
      "La candidata de Olaya Herrera, en Cartagena, ganó el premio al mejor disfraz, un homenaje al Joe Arroyo",
    hora: "12:02 PM",
  },
  {
    id: "noticiaB",
    titulo:
      "Mindefensa atribuye a disidencias de 'Iván Mordisco' el atentado con carrobomba en Suárez, Cauca, y ofrece recompensa",
    hora: "12:01 PM",
  },
  {
    id: "noticiaC",
    titulo:
      "La candidata de Olaya Herrera, en Cartagena, ganó el premio al mejor disfraz, un homenaje al Joe Arroyo",
    hora: "12:02 PM",
  },
  {
    id: "noticiaD",
    img: "",
    titulo:
      "Mindefensa atribuye a disidencias de 'Iván Mordisco' el atentado con carrobomba en Suárez, Cauca, y ofrece recompensa",
      texto: "ahtaehyytaeyhaeyhaeyheyh",
    hora: "12:01 PM",
  },
];

export default function NoticiasLinks({ onSelect }) {
  return (
    <section className="noticias-links">
      {noticiasLinks.map((n) => (
        <div key={n.id} className="elheraldo">
          <h3
            className="ingl-heading"
            onClick={() => onSelect(n)}
          >
            <a>{n.titulo}</a>
          </h3>
          <time>{n.hora}</time>
        </div>
      ))}
    </section>
  );
}

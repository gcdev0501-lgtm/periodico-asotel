import "../styles/recomendados.css";

export default function Recomendados() {
  return (
    <section className="recomendados">
      <h3>Recomendados</h3>

      <ul>
        <li>
          <strong>Transmisiones Deportivas en Vivo</strong>
          <br />
          <small>Accede a partidos de fútbol nacional e internacional, señal deportiva y otros eventos destacados, todo desde un mismo enlace y en tiempo real.</small>
        </li>

        <li>
          <a
            href="//www.rojadirectaenvivo.pl/home4.php"
            target="_blank"
            rel="noreferrer"
          >
            Ver transmisión en vivo
          </a>
        </li>
      </ul>
    </section>
  );
}

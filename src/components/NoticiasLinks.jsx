import imgLunaRio from '../assets/Luna-del-Rio_link.jpg';
import imgPetroSeg from '../assets/img-link-petro-seguridad.webp';
import imgIncabot from '../assets/img-incabot.jpg';
import imgIncabot2 from '../assets/img-incabot2.jpg';
import imgLink4 from '../assets/img-link-4.jpeg';



import "../styles/noticiaslinks.css";

const noticiasLinks = [
  {
    id: "noticiaA",
    img: imgLunaRio,
    titulo:
      "Récord de visitantes desborda movilidad en el Gran Malecón, visitantes del Malecón podrán disfrutar de la ‘Luna del Río’",
      texto:"La nueva atracción ofrece una vista única de 360° de los paisajes del río Magdalena, del Vía Parque Isla Salamanca y del horizonte urbano de Barranquilla.La Luna del Río es desde ya un plan obligado en el lugar más visitado de Colombia, lo que la convierte en una de las principales atracciones de la ciudad y se considera como una de las 5 ruedas de gran formato más grandes de Latinoamérica.",
    hora: "12:02 PM",
  },
  {
    id: "noticiaB",
    img: imgPetroSeg,
    titulo:
      "Colombia: Presidente Petro renueva mando militar para garantizar seguridad en elecciones 2026",
      texto:"El presidente de Colombia, Gustavo Petro, a través de sus redes sociales, anunció el sábado 27 de diciembre una reestructuración en la cúpula de las Fuerzas Militares, con el objetivo de salvaguardar el orden público durante los procesos electorales del año 2026. Según lo expresado por el mandatario colombiano, estos relevos responden a la necesidad de anticiparse a los desafíos de seguridad que implican las elecciones legislativas del 8 marzo y las presidenciales del 31 de mayo; en caso de requerirse una segunda vuelta, la cita en las urnas sería el 21 de junio. ",
    hora: "12:01 PM",
  },
  {
    id: "noticiaC",
    img: imgIncabot,
    imagenes: [imgIncabot2],
    titulo:
      "Incabot: Tecnología con identidad Caribe, esta iniciativa busca unir la inteligencia artificial y la robótica desde lo más auténtico ",
      texto:"En el marco del proceso de adaptación tecnológica que lidera Centro Inca, presentamos con orgullo la iniciativa Incabot, una experiencia pionera en el Caribe colombiano que busca acercar a la comunidad a la inteligencia artificial y la robótica desde lo más auténtico de nuestra identidad cultural.  El reciente video viral del robot bailando cumbia no es un acto casual ni un simple espectáculo. Hace parte de nuestra estrategia pedagógica y cultural para socializar la tecnología y lograr que nuestra comunidad barranquillera y costeña vea en la innovación un aliado, no una amenaza. ",
      textoExtra: "Esta iniciativa busca que niños, jóvenes y adultos pierdan el miedo a las nuevas tecnologías. Nuestra misión es preparar a los estudiantes para un mundo donde la tecnología no sustituye al ser humano, sino que lo potencia, manteniendo viva la esencia de nuestra cultura.  ",
      
      hora: "12:02 PM",
  },
  {
    id: "noticiaD",
    img: imgLink4,
    titulo:
      "Barranquilla ofrece planes turísticos imperdibles para despedir el año y recibir el 2025",
      texto: "Durante el 31 de diciembre y el 1 de enero, Barranquilla se consolida como un destino turístico ideal para propios y visitantes, gracias a su variada oferta cultural, gastronómica y recreativa. El Gran Malecón del Río, la Ventana al Mundo, el tradicional barrio El Prado y las playas cercanas se convierten en escenarios perfectos para compartir en familia, disfrutar del clima caribe y vivir la alegría característica de la ciudad. A estas fechas se suman eventos culturales, recorridos turísticos y espacios de integración que permiten despedir el año con optimismo y comenzar el nuevo con experiencias memorables.",
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

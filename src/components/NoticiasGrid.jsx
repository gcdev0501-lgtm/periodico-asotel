import "../styles/noticiasgrid.css";

const noticiasGrid = [
  {
    id: "noticia1",
    img: "/periodico-asotel/img-marcha-1mayo.jpg",
    titulo: "Participación de Asotel el primero de mayo",
    texto:
      "Organizaciones sociales acompañaron la jornada convocada por el presidente.En el marco de la conmemoración del Día Internacional del Trabajo, Asotel tuvo una destacada participación en la jornada del primero de mayo, un evento que reunió a diversas organizaciones sociales, sindicales y comunitarias. La presencia de la asociación se sumó al amplio respaldo ciudadano al llamado realizado por el presidente, en defensa de los derechos laborales, la dignificación del empleo y el fortalecimiento de las garantías para los trabajadores del país. La jornada transcurrió en un ambiente de unidad, reflexión y compromiso colectivo, donde la voz de los diferentes sectores sirvió para resaltar la importancia del diálogo social y la construcción conjunta de un país más justo e inclusivo."
      
  },
  {
    id: "noticia2",
    img: "/periodico-asotel/img-reunion-socios.jpg",
    titulo: "Reunión de socios Asotel",
    texto:
      "Se trataron temas clave para el fortalecimiento de la asociación. Durante el encuentro se abordaron temas de gran relevancia para el desarrollo social, entre ellos la promoción de condiciones laborales dignas, el fortalecimiento de las políticas públicas orientadas al bienestar colectivo y la necesidad de avanzar en proyectos que impulsen la equidad y el progreso comunitario. Las discusiones reflejaron un profundo interés por construir soluciones que respondan a las realidades actuales del país y que contribuyan de manera efectiva al crecimiento y la cohesión de la sociedad.",
  },
  {
    id: "noticia3",
    img: "/periodico-asotel/img-solidaridad-asotel.jpg",
    titulo: "Solidaridad con asociados",
    texto:
      "Aporte solidario al asociado Fermín Jiménez. Amigos de Asotel, con el asosiado Fermin Jimenez. La suma de $2`640.000",
  },
  {
    id: "noticia4",
    img: "/periodico-asotel/public/img-equipo-asotel.jpg",
    titulo: "Evento cultural Asotel",
    texto:
      "Integración y cultura para nuestros asociados. El equipo de Asotel tuvo una destacada participación en el campeonato realizado en Puerto Colombia, donde demostró un desempeño futbolístico sólido, disciplinado y comprometido. A lo largo del torneo, los jugadores mostraron un alto nivel competitivo que les permitió mantenerse entre los primeros puestos, alcanzando una ubicación muy significativa en la tabla de puntuación.",
  },
  {
    id: "noticia5",
    img: "/periodico-asotel/imagescolpensiones.jpeg",
    titulo: "Asamblea general 2025",
    texto:
      "Decisiones importantes para el nuevo período. El presidente Gustavo Petro ratificó su compromiso con la protección de los fondos de pensiones y anunció la implementación de nuevos mecanismos de control y transparencia dentro del sistema pensional colombiano. Estas medidas buscan garantizar la seguridad financiera de los trabajadores y asegurar que los recursos destinados a su jubilación sean administrados de manera responsable y equitativa. “Nuestro objetivo no es desmantelar lo construido, sino corregir las inequidades que durante años han afectado a los trabajadores de menores ingresos.",
  },
  {
    id: "noticia6",
    img: "/periodico-asotel/img-integracion-socios.jpg",
    titulo: "Jornada de capacitación",
    texto:
      "Espacio formativo para asociados y familias. La jornada en las playas de Cartagena fue recibida con entusiasmo por la mayoría de los socios, quienes expresaron su alegría y satisfacción por el encuentro organizado. El ambiente de integración, acompañado del paisaje costero, permitió fortalecer lazos y compartir momentos de convivencia que enriquecieron la experiencia colectiva. Muchos asistentes manifestaron su agradecimiento a Asotel por promover este tipo de espacios recreativos, que contribuyen al bienestar, la unión y el fortalecimiento de la comunidad asociada.",
  },
];

export default function NoticiasGrid({ onSelect }) {
  return (
    <section className="articulos">
      {noticiasGrid.map((n) => (
        <article
          key={n.id}
          className="articulo"
          onClick={() => onSelect(n)}
        >
          <img src={n.img} alt={n.titulo} />
          <h2>{n.titulo}</h2>
          <p>{n.texto.length > 60 ? n.texto.slice(0, 60) + "..." : n.texto}</p>
          <button className="ver-mas">Ver más</button>
        </article>
      ))}
    </section>
  );
}
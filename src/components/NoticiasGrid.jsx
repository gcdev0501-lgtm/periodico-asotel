import imgFiesta1 from '../assets/imgFiesta1.jpeg';
import imgFiesta2 from '../assets/imgFiesta2.jpeg';
import imgFiesta3 from '../assets/imgFiesta3.jpeg';
import imgFiesta4 from '../assets/imgFiesta4.jpeg';
import imgFiesta5 from '../assets/imgFiesta5.jpeg';
import imgFiesta6 from '../assets/imgFiesta6.jpeg';
import imgFiesta7 from '../assets/imgFiesta7.jpeg';
import imgFiesta8 from '../assets/imgFiesta8.jpeg';
import imgFiesta9 from '../assets/imgFiesta9.jpeg';



import imgMarcha from '../assets/img-marcha-1mayo.jpg';
import imgReunion from '../assets/img-reunion-socios.jpg';
import imgSolidaridad from '../assets/img-solidaridad-asotel.jpg';
import imgEquipo  from '../assets/img-equipo-asotel.jpg';
import imgColpensiones from '../assets/imagescolpensiones.jpeg';
import imgIntegracion from '../assets/img-integracion-socios.jpg';





import "../styles/noticiasgrid.css";

const noticiaEspecial = {
  id: "fiesta-fin-ano",
  img: imgFiesta1,
  tipo: "especial",
  titulo: "Ultimo gran evento de Asotel 2025",
  texto:
    "La fiesta de fin de año de Asotel fue un espacio de integración, alegría y reconocimiento para nuestros asociados y sus familias. Una jornada llena de música, compañerismo y momentos que fortalecen nuestra comunidad.",
  imagenes: [
    imgFiesta2,
    imgFiesta3,
    imgFiesta4,
    imgFiesta5,
    imgFiesta6,
    imgFiesta7,
    imgFiesta8,
    imgFiesta9,
  ],
};

const noticiasGrid = [
  {
    id: "noticia1",
    img: imgMarcha,
    titulo: "Participación de Asotel el primero de mayo",
    texto:
      "Organizaciones sociales acompañaron la jornada convocada por el presidente.En el marco de la conmemoración del Día Internacional del Trabajo, Asotel tuvo una destacada participación en la jornada del primero de mayo, un evento que reunió a diversas organizaciones sociales, sindicales y comunitarias. La presencia de la asociación se sumó al amplio respaldo ciudadano al llamado realizado por el presidente, en defensa de los derechos laborales, la dignificación del empleo y el fortalecimiento de las garantías para los trabajadores del país. La jornada transcurrió en un ambiente de unidad, reflexión y compromiso colectivo, donde la voz de los diferentes sectores sirvió para resaltar la importancia del diálogo social y la construcción conjunta de un país más justo e inclusivo."
      
  },
  {
    id: "noticia2",
    img: imgReunion,
    titulo: "Reunión de socios Asotel",
    texto:
      "Se trataron temas clave para el fortalecimiento de la asociación. Durante el encuentro se abordaron temas de gran relevancia para el desarrollo social, entre ellos la promoción de condiciones laborales dignas, el fortalecimiento de las políticas públicas orientadas al bienestar colectivo y la necesidad de avanzar en proyectos que impulsen la equidad y el progreso comunitario. Las discusiones reflejaron un profundo interés por construir soluciones que respondan a las realidades actuales del país y que contribuyan de manera efectiva al crecimiento y la cohesión de la sociedad.",
  },
  {
    id: "noticia3",
    img:  imgSolidaridad,
    titulo: "Solidaridad con asociados",
    texto:
      "Aporte solidario al asociado Fermín Jiménez. Amigos de Asotel, con el asosiado Fermin Jimenez. La suma de $2`640.000",
  },
  {
    id: "noticia4",
    img: imgEquipo,
    titulo: "Evento cultural Asotel",
    texto:
      "Integración y cultura para nuestros asociados. El equipo de Asotel tuvo una destacada participación en el campeonato realizado en Puerto Colombia, donde demostró un desempeño futbolístico sólido, disciplinado y comprometido. A lo largo del torneo, los jugadores mostraron un alto nivel competitivo que les permitió mantenerse entre los primeros puestos, alcanzando una ubicación muy significativa en la tabla de puntuación.",
  },
  {
    id: "noticia5",
    img: imgColpensiones,
    titulo: "Actualización sobre pensiones",
    texto:
      "Decisiones importantes para el nuevo período. El presidente Gustavo Petro ratificó su compromiso con la protección de los fondos de pensiones y anunció la implementación de nuevos mecanismos de control y transparencia dentro del sistema pensional colombiano. Estas medidas buscan garantizar la seguridad financiera de los trabajadores y asegurar que los recursos destinados a su jubilación sean administrados de manera responsable y equitativa. “Nuestro objetivo no es desmantelar lo construido, sino corregir las inequidades que durante años han afectado a los trabajadores de menores ingresos.",
  },
  {
    id: "noticia6",
    img: imgIntegracion,
    titulo: "Jornada de capacitación",
    texto:
      "Espacio formativo para asociados y familias. La jornada en las playas de Cartagena fue recibida con entusiasmo por la mayoría de los socios, quienes expresaron su alegría y satisfacción por el encuentro organizado. El ambiente de integración, acompañado del paisaje costero, permitió fortalecer lazos y compartir momentos de convivencia que enriquecieron la experiencia colectiva. Muchos asistentes manifestaron su agradecimiento a Asotel por promover este tipo de espacios recreativos, que contribuyen al bienestar, la unión y el fortalecimiento de la comunidad asociada.",
  },
];

export default function NoticiasGrid({ onSelect }) {
  return (
    <section className="articulos">

      {/* 🔥 ARTÍCULO DESTACADO */}
      <article
        className="articulo articulo-destacado"
        onClick={() => onSelect(noticiaEspecial)}
      >
        <img
          src={noticiaEspecial.imagenes[0]}
          alt={noticiaEspecial.titulo}
        />
        <h2>{noticiaEspecial.titulo}</h2>
        <p>{noticiaEspecial.texto}</p>
        <button className="ver-mas">Ver más</button>
      </article>

    {/* 🧱 NOTICIAS NORMALES (las 6 que ya tenías) */}
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
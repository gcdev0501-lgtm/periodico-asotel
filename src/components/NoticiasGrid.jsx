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
import imgFibraOptica from '../assets/img-fibra-optica.png';
import imgIntegracion from '../assets/img-integracion-socios.jpg';


import { FaMask } from "react-icons/fa";




import "../styles/noticiasgrid.css";

const noticiaEspecial = {
  id: "fiesta-fin-ano",
  img: imgFiesta1,
  tipo: "especial",
  titulo: "Ultimo gran evento de Asotel 2025",
  texto:
    "El sábado 6 de diciembre se realizó el evento más esperado por todos los asociados. Fue el encuentro de familias, de hermanos y hermanas que festejaron, en ese gran encuentro, un final de año anticipado, con baile amenizado con conjuntos y equipo de sonido con su discjockey ya conocido y también asociado, que ya conoce la música que le gusta a todos los allí reunidos. Salimos de Barranquilla a las 9:00 a.m., siendo el punto de partida la Universidad del Atlántico. Esperaban a los asociados lujosos y cómodos buses de Brasilia. El bus que se llenaba salía enseguida; había desespero de los asociados por llegar al sitio del gran evento bailable. Y así llegaron los cinco buses que se contrataron. “¡Qué gran sitio!”, expresaron la gran mayoría de nuestros asociados al bajarse de los buses y caminar hacia el interior del gran salón, que estaba bien ordenado para la ocasión. Uno a uno se fueron acomodando y escuchaban de parte de los directivos la manera en que se desarrollarían las actividades ya programadas. Se da la bienvenida de parte de nuestro presidente y arranca la música con aplausos de nuestros asociados. En la pista de baile estaban las parejas bailadoras; igualmente, algunos asociados bailaban solos cualquier ritmo que colocaran. El tiempo fue pasando entre whisky y cervezas, hasta que llegó el gran plato, que fue un deleite al paladar culinario. ¡Qué gran evento, Asotel! ¿Y ahora qué viene? ¿Carnaval o un paseo?",
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
    img: imgFibraOptica,
    titulo: "Infraestructura digital: El salto de la fibra óptica ",
    texto:
      "Lo último en fibra óptica se enfoca en fibras huecas (Air-Core) para latencia ultrabaja y mayor potencia, tecnologías como Ribbon para empalmes más rápidos y económicos, y avances en multinúcleo para multiplicar la capacidad, todo para habilitar la demanda futura de Internet cuántico, IA y realidad extendida, mejorando velocidad, estabilidad y eficiencia energética en redes, como se ve en récords de transmisión y nuevos materiales. Innovaciones Clave Fibras Huecas (Air-Core Fibers): Reemplazan parte del vidrio por aire, reduciendo la distorsión y la latencia drásticamente, prometiendo un internet 1000 veces más potente para el futuro cuántico y IA. Fibras Multicore: Permiten transmitir múltiples señales por un solo hilo, aumentando masivamente la capacidad sin aumentar el grosor del cable, con avances en récords de capacidad y distancia. Tecnología Ribbon: Agrupa hilos de fibra en cintas, permitiendo fusionar 12 hilos a la vez, lo que acelera la instalación, reduce costos y facilita la recuperación de servicios. Materiales y Fabricación Avanzados: Se usan preformas con canales huecos integrados y técnicas de estiramiento precisas para fabricar estas fibras de alta capacidad a escala industrial, incluyendo diseños más resistentes y delgados. Aplicaciones y Beneficios Futuros Robótica e Industria 4.0: Control de calidad, automatización y realidad aumentada en entornos industriales. Computación Cuántica: Las nuevas fibras son esenciales para la infraestructura de la futura internet cuántica. Entretenimiento y Gaming: Experiencias de streaming y juegos en la nube más fluidas con menor latencia. Eficiencia y Sostenibilidad: Menor consumo energético y vida útil más larga (25+ años) comparada con el cobre. Tendencias y Desafíos Escalabilidad: Adaptar estas tecnologías para redes masivas y superar los límites actuales de capacidad. Integración Industrial: Empresas como Microsoft apuestan por la producción de fibras huecas, indicando su rápida adopción.",
  },
  {
    id: "noticia6",
    img: imgIntegracion,
    titulo: "Socios en evento hotel cartagena",
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
        <div className="contenido-preview">
        <p>{noticiaEspecial.texto}</p>
        </div>
        <button className="btn-carnaval">Ver más</button>
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
          <button className="btn-carnaval">
             Ver Mas
          </button>
        </article>
      ))}
    </section>
  );
}
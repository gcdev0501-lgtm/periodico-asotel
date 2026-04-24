import { useState, useEffect } from "react";

import imgSoberania from '../assets/img-mujeres-noticias-link.png';
import imgPetroSeg from '../assets/img-petro-salario.webp';
import imgIncabot from '../assets/noticias.link_c2.webp';
import imgIncabot2 from '../assets/noticias_link_c5.webp';
import imgLink4 from '../assets/noticias_link_c.jpeg';
import imgLink4_2 from '../assets/noticias_link_c1.webp';



import "../styles/noticiaslinks.css";

const noticiasLinks = [
  {
    id: "noticiaA",
    img: imgSoberania,
    titulo:
      "La soberanía se sostiene con voz de mujer; Desde las comunas de Caracas.",
      texto:`Eli Flores habla desde Caracas, desde Caricuao, un territorio que define como aguerrido.
      No se presenta únicamente como comunicadora o lideresa social: se reconoce como parte de una historia larga de organización 
      popular. Hija de dirigentes sindicales de las décadas del setenta y ochenta, creció entre huelgas, alfabetización, luchas por la 
      contratación colectiva y despidos como represalia política. “Nací en el mundo de la acción social”, afirma, trazando una genealogía donde la justicia social 
      no es una consigna, sino una práctica heredada. Su trayectoria está marcada por la comunicación comunitaria. Fue parte de los equipos fundadores
      de los medios alternativos en Venezuela y coordina Radio Perola 92.3 FM, emisora comunitaria de Caricuao, reconocida con el Premio Nacional de Periodismo en 2012
      por el presidente Hugo Chávez. Desde allí, impulsó un plan de radios alternativas en Caracas y en el país, consolidando una red comunicacional popular frente a la hegemonía mediática.
      Paralelamente, Eli coordina el Proyecto Infantil Travesura, una iniciativa con más de tres décadas de trabajo en comunidades populares, orientada a niñas, niños y adolescentes desde el arte,
      la recreación y la formación sin competencia. Para ella, política, comunicación y cuidado de la infancia forman parte de una misma apuesta por la transformación social.
      La soberanía se ejerce desde abajo Para Eli Flores, la soberanía nacional no es una abstracción jurídica ni un discurso institucional. Se construye todos los días.
      “Cada vez que hacemos control territorial de nuestros espacios y cada vez que hacemos gobierno comunal, estamos construyendo la soberanía de nuestra nación”, sostiene. 
      Desde su mirada, las comunas encarnan una ruptura con la vieja cultura política: son espacios donde las comunidades asumen la gestión de la vida social, la salud, el transporte, el trabajo, 
      la educación, la recreación y la defensa. Gobernar desde abajo es, para ella, una forma concreta de autodeterminación frente al asedio externo y las lógicas de dependencia. 
      Esta noción de soberanía se vuelve especialmente relevante en un contexto que describe como de agresión permanente: bloqueo económico, guarimbas, 
      intentos de desestabilización y lo que califica como secuestro político del presidente venezolano por parte de Estados Unidos. Frente a ello, insiste, 
      la respuesta no ha sido la parálisis, sino la organización territorial. Las mujeres sostienen el poder comunal En Caricuao —y, asegura, en buena parte de Caracas— 
      las mujeres son mayoría en los espacios de decisión. “Las reuniones del Consejo Comunal somos veinte mujeres y cinco hombres. En la comuna pasa lo mismo”, explica. 
      No se trata de una excepción, sino de una constante: las mujeres lideran, organizan y sostienen el movimiento popular. Su participación no es simbólica. 
      Las mujeres están al frente de la distribución de alimentos, la organización del gas, las escuelas, la radio comunitaria, las actividades recreativas, las asambleas y la defensa del territorio. 
      “Somos mayoría en todos esos espacios y siempre estamos en primera línea”, afirma. Para Eli, este protagonismo tiene raíces profundas. En un país atravesado por la crisis y el bloqueo, 
      las mujeres cargan históricamente con la responsabilidad principal de la crianza y el sostenimiento de la vida. Desde allí, su entrada a la política comunal no es un desplazamiento, 
      sino una ampliación de ese rol hacia lo colectivo. Feminismo popular en tiempos de asedio Eli reivindica un feminismo construido desde la lucha concreta, no desde la fragmentación. 
      “Creemos en la lucha del feminismo como hombres y mujeres luchando juntos, en equidad”, señala. En su discurso, la emancipación femenina no se opone al proyecto colectivo, sino que lo fortalece. 
      En un contexto de bloqueo económico y presión internacional, las mujeres han estado “a la cabeza del proceso”, organizando la vida cotidiana y defendiendo la continuidad del proyecto bolivariano. 
      Esa defensa no se limita a lo simbólico: incluye la disposición a asumir todas las formas de lucha necesarias para proteger el territorio y la soberanía. Defender la tierra, defender la vida Desde la comuna, 
      la defensa territorial se construye organizando a mujeres, comunidades e infancias. No como una consigna abstracta, sino como una práctica sostenida en asambleas, trabajo social y acción colectiva. 
      “Vamos a defender esta tierra en cualquier circunstancia”, afirma con determinación. Eli Flores está convencida de que el conflicto que atraviesa Venezuela no es interno, sino una disputa por la riqueza y la autodeterminación del país. 
      Frente a ello, sostiene que el pueblo ha despertado y que las mujeres, desde los barrios y las comunas, seguirán siendo columna vertebral de la resistencia.  `,
       palabrasNegrilla: [
      "La soberanía se ejerce desde abajo",
      "Las mujeres sostienen el poder comunal",
      "Feminismo popular en tiempos de asedio",
      "Defender la tierra, defender la vida"
    ],
    saltoLineaCada: 1,
      hora: "12:02 PM",
  },
  {
    id: "noticiaB",
    img: imgPetroSeg,
    titulo:
      "Presidente Petro decreta incremento histórico del salario mínimo para 2026.",
      texto:"El presidente de Colombia, Gustavo Petro, anunció oficialmente en alocución presidencial el aumento del Salario Mínimo Mensual Legal Vigente (SMMLV) para 2026, tras el fracaso de las negociaciones en la mesa de concertación salarial. El ajuste será del 22,7%, elevando el salario base de $1.420.000 a $1.750.905, y con el auxilio de transporte incluido, el ingreso mensual total alcanzará los $2.000.000, lo que representa un incremento global del 23,78%. Esta decisión marca el mayor salto nominal en el salario mínimo en Colombia desde 1997, cuando el aumento fue del 21,02%. En términos reales —descontada la inflación—, el gobierno afirma que el incremento será del 18,7%, superando lo logrado en los tres años anteriores sumados. “En el último año elevamos el salario real más que en la sumatoria de los tres años previos”, afirmó el mandatario. El presidente presentó esta medida como un paso concreto hacia la implementación del “salario mínimo vital”, una figura que, según explicó, busca garantizar condiciones de vida dignas no solo al trabajador, sino a su núcleo familiar. “El salario mínimo vital no es individual, sino familiar”, aclaró Petro, al recordar que los hogares colombianos tienen en promedio 3,4 personas y 1,5 trabajadores por familia. Basado en una canasta familiar estimada en poco más de $3 millones mensuales, el gobierno determinó que el ingreso mínimo necesario por hogar justifica el nuevo nivel salarial. ",
    hora: "12:01 PM",
  },
  {
    id: "noticiaC",
    img: imgIncabot,
    imagenes: [imgIncabot2],
    titulo:
      "De Chicago al mundo: el origen del 1 de mayo y la lucha por la jornada de ocho horas. ",
      texto:"El 1 de mayo, conocido como el Día Internacional de los Trabajadores, tiene sus raíces en la histórica lucha obrera por condiciones laborales dignas. Su origen se remonta a 1886, en la ciudad de Chicago, donde miles de trabajadores se movilizaron para exigir la jornada laboral de ocho horas bajo el lema: “ocho horas de trabajo, ocho de descanso y ocho de ocio”. Durante estas protestas ocurrió el trágico Motín de Haymarket, que derivó en una fuerte represión y en la ejecución de varios líderes obreros, posteriormente reconocidos como mártires del movimiento laboral. Este hecho marcó un antes y un después en la historia de las luchas sociales.En 1889, la Segunda Internacional proclamó el 1 de mayo como una jornada de conmemoración y reivindicación a nivel mundial. ",
      textoExtra: " Desde entonces, esta fecha se ha convertido en un símbolo de la lucha por los derechos laborales, la justicia social y la dignidad del trabajador.Desde la perspectiva de la izquierda, el 1 de mayo representa la resistencia frente a la explotación y la desigualdad, así como la conquista de derechos fundamentales como la jornada laboral de ocho horas, la sindicalización y la seguridad social. Más que una celebración, es un recordatorio de que los avances laborales han sido fruto de la organización y la lucha colectiva.  ",
      
      hora: "12:02 PM",
  },
  {
    id: "noticiaD",
    img: imgLink4,
    imagenes: [imgLink4_2],
    titulo:
      "1 de mayo en Colombia: historia y significado del Día del Trabajador",
      texto: "El 1 de mayo en Colombia es una fecha que refleja la historia y evolución de las luchas laborales en el país. Su conmemoración comenzó a inicios del siglo XX, con las primeras manifestaciones organizadas hacia 1914 en ciudades como Bogotá, Medellín y Barranquilla, donde trabajadores y artesanos exigían mejores condiciones laborales. A lo largo de las décadas de 1920 y 1930, el movimiento obrero tomó fuerza, impulsando la creación de sindicatos y el desarrollo de huelgas en sectores clave de la economía. Uno de los episodios más significativos fue la Masacre de las Bananeras, ocurrida en 1928 en la zona de Santa Marta, donde una protesta de trabajadores fue reprimida violentamente, marcando un hito en la historia social del país. Con el paso del tiempo, estas luchas dieron lugar al reconocimiento de derechos laborales fundamentales, como la regulación de la jornada de trabajo y el derecho a la huelga. Hoy, el 1 de mayo es un día festivo y de movilización en Colombia, en el que trabajadores y organizaciones sociales conmemoran sus conquistas y continúan exigiendo mejores condiciones de vida",
    hora: "12:01 PM",
  },
];

export default function NoticiasLinks({ onSelect }) {

    const [horaActual, setHoraActual] = useState("");
    

  useEffect(() => {
    const actualizarHora = () => {
      const fecha = new Date();
      const opciones = { hour: "2-digit", minute: "2-digit" };
      setHoraActual(fecha.toLocaleTimeString("es-CO", opciones));
    };

    actualizarHora(); // inicial
    const intervalo = setInterval(actualizarHora, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="noticias-links">
      {noticiasLinks.map((n) => (
        <div key={n.id} className="asotel">
          <h3
            className="ingl-heading"
            onClick={() => onSelect(n)}
          >
            <a>{n.titulo}</a>
          </h3>
          <time>{horaActual}</time> {/* ahora dinámica */}
         </div>
    
      ))}
    </section>
  );
}

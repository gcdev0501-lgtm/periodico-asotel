import React, { useState } from "react";
import NoticiaDetalle from "./NoticiaDetalle";

import imgCarnaval1 from "../assets/img-carnaval1.jpeg";
import imgCarnaval2 from "../assets/img-carnaval2.jpeg";
import imgCarnaval3 from "../assets/img-carnaval3.jpeg";
import imgCarnaval4 from "../assets/img-carnaval4.jpeg";
import imgCarnaval5 from "../assets/imgCarnaval5.jpeg";
import imgCarnaval6 from "../assets/imgCarnaval6.jpeg";
import reinaAsotel from "../assets/img-reina-asotel.jpeg";

import "../styles/entretenimiento.css";

const noticiaCarnaval = {
  id: "carnaval-asotel-2026",
  titulo: "UNA NOCHE DE CARNAVAL, MÚSICA Y TRADICIÓN",
  texto: `
El pasado sábado se vivió una noche llena de calor, música y tradición con la
realización de la gran fiesta carnavalera "Asoteleando", un evento que reúne a
nuestros socios en torno a la alegría y al espíritu festivo que caracterizan
estas celebraciones. Desde el inicio, el ambiente estuvo marcado por la emoción,
el baile y esa energía inagotable que contagia a todos los asistentes.

Uno de los momentos más esperados de la velada fue la elección, por parte de la
junta directiva de ASOTEL, de la reina de la fiesta telecarnavalera, honor que
recayó en nuestra socia Lina Iglesias, quien con carisma, elegancia y simpatía
conquistó al público asistente. Su elección fue recibida con aplausos y
ovaciones, consolidándola como digna representante del sentir carnavalero y de
nuestras tradiciones.

La música en vivo y los ritmos propios del Caribe animaron la celebración
durante toda la noche, invitando a socios y visitantes a sumarse al baile y a
disfrutar de un espacio de integración y sano esparcimiento.

Las pintas carnavaleras, las sonrisas y la alegría colectiva hicieron de esta
fiesta un verdadero homenaje al carnaval.

Este evento no solo celebró la tradición, sino que reafirmó el compromiso de
seguir promoviendo espacios culturales que fortalecen la unión y el orgullo de
nuestra comunidad.

Sin duda, una noche memorable que quedará en el recuerdo, con Lina Iglesias como
reina y símbolo de la alegría carnavalera.

Felicitaciones al maravilloso comportamiento de nuestros asociados y a la
esmerada organización de nuestra Junta Directiva.

J. Rodríguez
`,
  palabrasNegrilla: [
    "J. Rodríguez",
  ],
  saltoLineaCada: 1,
  img: imgCarnaval1,
  imagenes: [
     
    imgCarnaval2, 
    imgCarnaval3, 
    imgCarnaval4,
    imgCarnaval5,
    imgCarnaval6],
};

export default function Entretenimiento() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  return (
    <>
      <section className="entretenimiento">
        <div className="entretenimiento-lista">

          <article
            className="entretenimiento-card"
            onClick={() => setNoticiaSeleccionada(noticiaCarnaval)}
          >
            <div className="entretenimiento-imagen">
              <img
                src={noticiaCarnaval.img}
                alt={noticiaCarnaval.titulo}
              />
            </div>

            <div className="entretenimiento-texto">
              <h2>{noticiaCarnaval.titulo}</h2>
              <p>
                El pasado sábado se vivió una noche llena de música, tradición y
                alegría con la realización de la gran fiesta carnavalera
                “Asoteleando”.
              </p>

              <button
                className="btn-ver-mas"
                onClick={(e) => {
                  e.stopPropagation();
                  setNoticiaSeleccionada(noticiaCarnaval);
                }}
              >
                Ver cobertura completa →
              </button>
            </div>
            
          </article>

           {/* 📰 ARTÍCULO HISTORIA DEL CARNAVAL */}
<article className="entretenimiento-card articulo-historia-carnaval">
  <div className="entretenimiento-texto">
    <h2>El Carnaval y parte de su historia</h2>

    <p>
      No es solo en Barranquilla que se celebra el carnaval; esta festividad se
      realiza en muchos países, especialmente aquellos de influencia católica y
      tradición latina. Es una época de folclor y diversión, pero también un
      periodo previo de ayuno y reflexión dentro de la religión católica.
      
      Otros sectores interpretan el carnaval como un símbolo de la muerte del
      ego y la personalidad, permitiendo al individuo liberarse de las
      limitaciones del mundo material. Representa la liberación de la energía
      reprimida y la conexión con la fuente de la vida.
   
      Sus raíces se encuentran en antiguas festividades paganas como las
      saturnales romanas y las bacanales griegas, celebraciones dedicadas a los
      dioses y a la fertilidad.
    
      Con la llegada del cristianismo, la Iglesia intentó prohibir estas fiestas
      por considerarlas paganas. Sin embargo, en el siglo XII decidió
      incorporarlas al calendario litúrgico, estableciendo el carnaval como un
      periodo de celebración previo a la Cuaresma.
   
      A lo largo de los siglos, el carnaval ha evolucionado y se ha adaptado a
      diferentes culturas. En nuestro medio se caracteriza por desfiles de
      carrozas, disfraces con máscaras, bailes y música. Estos elementos son
      fundamentales y abarcan géneros diversos.
    </p>

    <h3>Carnavales importantes en el mundo</h3>
    <ul>
      <li>Carnaval de Río de Janeiro (Brasil)</li>
      <li>Carnaval de Venecia (Italia)</li>
      <li>Carnaval de Nueva Orleans (EE. UU.)</li>
      <li>
        Carnaval de Barranquilla (Colombia), declarado Patrimonio Cultural
        Inmaterial de la Humanidad por la UNESCO.
      </li>
    </ul>

    <p>
      Algunos sectores religiosos han considerado estas fiestas como un espacio
      de tentación y excesos. Sin embargo, el carnaval y la figura del demonio
      han tenido una relación simbólica compleja a lo largo de la historia,
      representando tanto subversión y tentación como libertad y expresión
      cultural.
    </p>

    <p>
      En resumen, el carnaval es una manifestación que refleja la dualidad y la
      complejidad de la naturaleza humana.
    </p>
  </div>
</article>

          {/* 🎥 BLOQUE DE VIDEO – CARNAVAL ASOTEL */}
<div className="bloque-video">
  <h3>Cobertura audiovisual del Carnaval ASOTEL</h3>

  {/* 🎥 VIDEO HORIZONTAL */}
  <div className="video-wrapper horizontal">
    <video controls preload="metadata" playsInline>
      <source src="/video-1.mp4" type="video/mp4" />
      Tu navegador no soporta video HTML5.
    </video>
  </div>

  {/* 🎥 VIDEO VERTICAL */}
  <div className="video-wrapper vertical">
    <video controls preload="metadata" playsInline>
      <source src="/video-2.mp4" type="video/mp4" />
      Tu navegador no soporta video HTML5.
    </video>
  </div>

  <p className="video-descripcion">
    Dos miradas de una misma noche: la amplitud del festejo y la cercanía del
    detalle carnavalero.
  </p>
</div>


          <article className="entretenimiento-card">
            <div className="entretenimiento-texto">
              <h2>Lina Iglesias como Reina de ASOTEL</h2>
                  <br/> 
                 
              <p>
                Fundación Carnaval de Barranquilla oficializa a la Sra. Lina
                Iglesias como soberana de las fiestas carnavaleras de ASOTEL. 
                Lina es una persona alegre y amante del carnaval.
                <br/> 
                <br/>
                Se distingue por su carácter entusiasta y su profunda conexión 
                con las tradiciones festivas. Es portadora de una alegría genuina que se manifiesta en la música, 
                el baile y el colorido propio del carnaval.
                <br/> 
                <br/>
                Su participación activa refleja un espíritu abierto, 
                comunitario y lleno de vitalidad, capaz de transmitir emoción 
                y sentido de pertenencia a cada encuentro festivo.
              </p>

              <strong>
                Celebramos con orgullo esta designación e invitamos a vivir el
                carnaval con alegría y sentido de pertenencia.
              </strong>
            </div>

            <div className="reina-asotel">
              <img src={reinaAsotel} alt="Reina del Carnaval ASOTEL" />
            </div>
          </article>

        </div>
      </section>

      {noticiaSeleccionada && (
        <NoticiaDetalle
          noticia={noticiaSeleccionada}
          onClose={() => setNoticiaSeleccionada(null)}
        />
      )}
    </>
  );
}

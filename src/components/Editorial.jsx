import { useState } from "react";
import NoticiaDetalle from "./NoticiaDetalle";
import "../styles/editorial.css";


export default function Editorial() {

   const [open, setOpen] = useState(false);

  const editorial = {
    titulo: "EDITORIAL",
    texto: `
           Nuestro país tenía 203 años de haberse proclamado república, cuando en junio del 2022 elige el primer gobierno de corte distinto a los que siempre timonearon el barco colombiano.
La dependencia económica, la mala distribución de la tierra, el parasitismo de las clases dominantes y nuestro raquítico capitalismo son males para nada atribuibles al último periodo presidencial.
Nuestra historia llena  de violencia, desigualdad, corrupción, economías ilicitas, grupos armados organizados ilegales, etcétera, no solo impide el desarrollo y el bienestar de los ciudadanos: nos colocaba como una nación paria en el concierto internacional.
Por el contrario, el actual gobierno, es producto de la resistencia de un pueblo que en su mayoría se dió cuenta que quienes conducían a Colombia lo hacían con el propósito de hacer crecer sus fortunas, privilegios y negocios en contra del mejor vivir de nuestro pueblo que al despuntar la segunda década de este siglo intentó por todos los medios hacer valer su dignidad.
Las intenciones del actual huésped del palacio de Nariño, consignadas en su programa de gobierno, se han visto en buena medida frustradas por la acción del Congreso, las altas cortes y los llamados entes de control, debido manejo de "los mismos con las mismas" como dijera el inmolado líder liberal Jorge Eliécer Gaitán.
Las mayoría de las reformas necesarias para enderezar el rumbo y encausarnos hacia mejores puertos se han visto frustradas por la autodenominada "oposición inteligente"
Asuntos tan capitales como garantizar la salud y acabar con el negocio de unos cuantos intermediarios, la administración de justicia, el asegurar las pensiones y los derechos laborales no cristalizan o se hace a medias por el accionar de unos pocos a quienes al parecer les cabe la máxima  "que nunca pensé que poner  un plato de comida a la mesa de un pobre generara tanto odio en una élite que se harta de tirar comida a la basura todos los  dias", como sentenciara Lula Da Silva el líder brasilero.
La familia telefónica agrupada y orientada sabiamente por ASOTEL, no puede marginarse de la situación nacional. Muy a pesar de ser un grupo en su mayoría de personas de edad media y avanzada y tener en lo fundamental asegurado nuestro porvenir por estar pensionados.
No sólo es recordar que nuestra empresa, nosotros y nuestras familias fuimos víctimas de la perversión de la ola privatizadora de los noventas.
El regreso de un gobierno de los mismos también pondría en grave peligro nuestras existencias con el consiguiente recorte  de nuestros derechos si regresan  al ejecutivo.
Por eso y por mucho más es preciso que le apostemos a la continuidad  del progresismo a la cabeza del gobierno.
Los logros como las casi 800 mil hectáreas de tierra entregadas a los campesinos, la devolución de ciertos derechos laborales, el crecimiento económico, la evaluación del peso, los mejores índices del turismo, la producción industrial, la agricultura, la lucha contra la corrupción, el tráfico de narcóticos y la minería ilegal, la transicion energética, entre otros , no pueden retroceder y eso sólo se logra con la continuidad del progresismo.
El miedo con el que pretenden angañar a los incautos de transitar hacia el totalitarismo o el regreso al reino de la situación  anterior no pueden ser banderas atractivas a las mayorías, en boca de quienes hoy se venden como solución cuando realmente son ellos el problema.
Barranquilla.
           `,
    palabrasNegrilla: [
         
      
    ],
    saltoLineaCada: 2
  };

  return (
    <section className="editorial">
      <h3>EDITORIAL</h3>
      <p>"Si no te metes con la política, la política se mete contigo"</p>
      <h4> ASOTEL DEL LADO CORRECTO DE LA HISTORIA.</h4>

      <p>
        Nuestro país tenía 203 años de haberse proclamado república, cuando en junio del 2022 elige el primer gobierno de corte distinto a los que siempre timonearon el barco colombiano.
La dependencia económica, la mala distribución de la tierra, el parasitismo de las clases dominantes y nuestro raquítico capitalismo son males para nada atribuibles al último periodo presidencial.
Nuestra historia llena  de violencia, desigualdad, corrupción, economías ilicitas, grupos armados organizados ilegales, etcétera, no solo impide el desarrollo y el bienestar de los ciudadanos: nos colocaba como una nación paria en el concierto internacional.
Por el contrario, el actual gobierno, es producto de la resistencia de un pueblo que en su mayoría se dió cuenta que quienes conducían a Colombia lo hacían con el propósito de hacer crecer sus fortunas, privilegios y negocios en contra del mejor vivir de nuestro pueblo que al despuntar la segunda década de este siglo intentó por todos los medios hacer valer su dignidad.

      </p>
      
      
      
      <button className="btn-editorial" onClick={() => setOpen(true)}>
        Leer editorial completo
      </button>

      {open && (
        <NoticiaDetalle
          noticia={editorial}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
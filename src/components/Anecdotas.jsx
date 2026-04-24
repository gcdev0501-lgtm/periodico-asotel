import React from 'react'
import { useState } from "react";
import NoticiaDetalle from "./NoticiaDetalle";

import '../styles/anecdotas.css';


export default function Anecdotas() {

const [verModal, setVerModal] = useState(false);

  const anecdota = {
    titulo: "Anécdotas",
    texto: `En los 70's se hicieron ampliaciones en varias centrales con la instalación de nuevas Centrales sistema  ARF 102,
      Serie 4, que eran de mejor tecnología q el sistema AGF Serie 3 ya obsoleto, para esas calendas la empresa Ericsson de Colombia
      realizó esos trabajos y trajo personal de sus filiales en Medellín y Bogotá para realizar el respectivo montaje... 
      Desafortunadamente, Barranquilla tenía problemas con la calidad del agua e incluso, hubo epidemia de gastroenteritis en la ciudad,
      así q se imaginan el viacrucis con la cagalera de estos cristianos del interior, al consumir el agua nuestra, los baños de nuestras
      centrales permanecían sucios, chorreaos de excrementos ante la epidemia de diarrea del personal de Ericsson lo cual molestaba a Álvaro Díaz,
      QEPD, compañero de planta Interna, Álvaro era un compañero muy culto, lector empedernido del Larousse de aquella época, q era el Google de hoy,
      así mismo Álvaro era suscriptor de una revista famosa llamada Selecciones q lo mantenía al día en todos los eventos culturales científicos
      etc... de manera que Álvaro cuando entraba al baño explotaba en improperios contra el personal de Ericsson, por la porquería
      q encontraba en nuestros sanitarios ,esa mañana Álvaro empezó  a decirles ,"puercos "cochinos" hasta los perros cuando
      cagan tapan la mierda... no tienen costumbres, nojoda, estando Álvaro gritándoles de todo a los cachacos entraba a
      la central un técnico de Ericsson q venía de Bogotá enchaquetado, con maleta incorporada se veía que venía del aeropuerto y el tipo pasa delante de nosotros y Álvaro gritándoles de todo 
      y el Cachaco decía con la cabeza enterrada y esa voz asolapada, que los distingue "yo acabo de llegar" yo acabo de llegar" 
      y Álvaro le dice con esa chispa q tenía,, "espero que haya cagao en su casa nojoda, porque le puse llave al baño..." el cachaco 
      hizo un gesto así como cuando el chapulín Colorao decía; y "ahora quien podrá salvarnos" se pueden imaginar la risa nuestra... al
      final la Ericsson tuvo que comprarles botellones de agua filtrada... Otra anécdota. Esta continuara...`
  };

 

  return (
    <div className='anecdotas'>
        <article className='news-card'>
            <h1>Anecdotas</h1>
      <p className="resumen">En los 70's se hicieron ampliaciones en varias centrales con la instalación de nuevas Centrales sistema  ARF 102,
      Serie 4, que eran de mejor tecnología que el sistema... </p>  

      <strong className='autor'>Roberto Donado.</strong> 


         {/* BOTÓN */}
        <button
          className="ver-mas"
          onClick={() => setVerModal(true)}
        >
          Ver más
        </button>

            </article>

            {/* MODAL */}
      {verModal && (
        <NoticiaDetalle
          noticia={anecdota}
          onClose={() => setVerModal(false)}
        />
      )}

      {/* Segunda anécdota (audio) */}
      <article className='news-card audio-card'>
        <strong className='autor'>Cuentista: Alfredo Echeverria</strong>
       <audio controls>
  <source src="/Audio-Asotel-anecdotas.mp3" type="audio/mp3" />
  Tu navegador no soporta audio.
</audio>
      </article>
    </div>
  )
}

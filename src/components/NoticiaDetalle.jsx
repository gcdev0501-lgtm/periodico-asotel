import "../styles/noticiamodal.css";



export default function NoticiaDetalle({ noticia, onClose }) {
  if (!noticia) return null;



  return (
    <div className="modal-noticia">
      <div className="modal-contenido">
        <button className="cerrar" onClick={onClose}>✕</button>

         {/* Imagen principal SOLO si existe */}
        {noticia.img && (
          <img src={noticia.img} alt={noticia.titulo} />
        )}


         {/*  Contenido */}
        <h1>{noticia.titulo}</h1>
        <p>{noticia.texto}</p>


          {/* Imágenes intermedias */}
        {noticia.imagenes?.map((img, i) => (
          <img
            key={i}
            className="imagen-secundaria"
            src={img}
          />
        ))}
         {/* Párrafo final SOLO si existe */}
        {noticia.textoExtra && (
          <p className="texto-extra">{noticia.textoExtra}</p>
        )}


      </div>
    </div>
  );
}
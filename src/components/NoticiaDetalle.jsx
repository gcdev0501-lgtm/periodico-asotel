import "../styles/noticiamodal.css";

export default function NoticiaDetalle({ noticia, onClose }) {
  if (!noticia) return null;

  return (
    <div className="modal-noticia">
      <div className="modal-contenido">
        <button className="cerrar" onClick={onClose}>✕</button>
        <img src={noticia.img} alt={noticia.titulo} />
        <h1>{noticia.titulo}</h1>
        <p>{noticia.texto}</p>
      </div>
    </div>
  );
}
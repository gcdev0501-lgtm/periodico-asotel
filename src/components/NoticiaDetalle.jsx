import "../styles/noticiamodal.css";

export default function NoticiaDetalle({ noticia, onClose }) {
  if (!noticia) return null;

  // --- Función para renderizar texto con negrillas y saltos de línea ---
  const renderTextoConNegrillas = (texto) => {
    if (!texto) return null;

    // Usar palabras de la noticia o array vacío
    const palabrasNegrilla = noticia.palabrasNegrilla || [];
    // Cuántos fragmentos antes de saltar línea
    const saltoLineaCada = noticia.saltoLineaCada || 2;

    let partes = [texto];

    palabrasNegrilla.forEach((palabra) => {
      partes = partes.flatMap((fragmento) => {
        if (typeof fragmento === "string") {
          const regex = new RegExp(`(${palabra})`, "gi");
          return fragmento.split(regex).map((p, i) =>
            p.toLowerCase() === palabra.toLowerCase() ? <strong key={i}>{p}</strong> : p
          );
        }
        return fragmento;
      });
    });

    return partes.flatMap((parte, i) => (
      <span key={i}>
        {parte}
        {i % saltoLineaCada === 0 ? (
          <>
            <br /><br />
          </>
        ) : null}
      </span>
    ));
  };

  return (
    <div className="modal-noticia">
      <div className="modal-contenido">
        <button className="cerrar" onClick={onClose}>✕</button>

        {/* Imagen principal */}
        {noticia.img && (
          <img src={noticia.img} alt={noticia.titulo} />
        )}

        {/* Título */}
        <h1>{noticia.titulo}</h1>

        {/* Texto con negrillas y saltos */}
        <p className="noticia-texto">
          {renderTextoConNegrillas(noticia.texto)}
        </p>

        {/* Imágenes secundarias */}
        {noticia.imagenes?.map((img, i) => (
          <img key={i} className="imagen-secundaria" src={img} />
        ))}

        {/* Texto extra */}
        {noticia.textoExtra && (
          <p className="texto-extra">{noticia.textoExtra}</p>
        )}
      </div>
    </div>
  );
}

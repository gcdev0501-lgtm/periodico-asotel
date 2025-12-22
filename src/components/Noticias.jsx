import { useState } from "react";
import NoticiasLinks from "./NoticiasLinks";
import NoticiaPrincipal from "./NoticiaPrincipal";
import NoticiasGrid from "./NoticiasGrid";
import NoticiaDetalle from "./NoticiaDetalle";
import "../styles/noticias.css";

export default function Noticias() {
  const [noticiaActiva, setNoticiaActiva] = useState(null);

  return (
    <section className="noticias">
      <NoticiasLinks onSelect={setNoticiaActiva} />

      {!noticiaActiva && <NoticiaPrincipal />}

      <NoticiasGrid onSelect={setNoticiaActiva} />

      {noticiaActiva && (
        <NoticiaDetalle
          noticia={noticiaActiva}
          onClose={() => setNoticiaActiva(null)}
        />
      )}
    </section>
  );
}
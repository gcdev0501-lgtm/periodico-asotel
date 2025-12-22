import "../styles/editorial.css";
import ImgEditorial from "../assets/foto_editorial_jose.jpg";

export default function Editorial() {
  return (
    <section className="editorial">
      <h3>EDITORIAL</h3>
      <h4>Medio Informativo</h4>

      <p>
        Queridos socios(as) de Asotel. Hoy regalamos a ustedes, este medio informativo que los mantendrá al tanto de los 
        acontecimientos nuestros. Un paso más que damos en el desarrollo tecnológico e informativo de nuestra amada sociedad Asotel.
        Sera un medio muy llamativo, que mostrara con lujos de detalles nuestras actividades y también noticias de interés local, 
        nacional e internacional. Daremos inicio con un despliegue fotográfico de algunas actividades que hemos realizado últimamente,
        el cual mostrara esa gran alegría que nos caracteriza como una sociedad unida por una gran hermandad. Se mostrará una reseña 
        histórica de lo que es nuestra sociedad Asotel, escrita por el compañero ROBERTO DONADO que narra como dimos nuestros primeros
        pasos para construir una entidad combativa y llena de principios morales y justicia humana. Se ira conformando un equipo periodístico
        aficionado, que nutrirá este medio de información. Invitamos a nuestros socios apoyar este proyecto, expresando críticas constructivas
        que nos llevaran día a día a mejorar la calidad de este medio de información.
      </p>

      <img
        src={ImgEditorial}
        alt="Editorial Asotel"
        className="img_editorial"
      />

      <p><strong>J. J. Rodríguez</strong></p>
      <p>Director</p>
    </section>
  );
}
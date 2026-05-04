import "../styles/primiciamarcha.css";
import imgMarcha1 from "../assets/imgMarchaa2.jpeg";
import imgMarcha2 from "../assets/img-mujeresAsotel.jpeg";
import imgMarcha3 from "../assets/imgMarchaa3.jpeg";
import imgMarcha4 from "../assets/imgMarchaa4.jpeg";
import imgMarcha5 from "../assets/imgMarcha5.jpeg";
import imgMarcha6 from "../assets/imgMarchaa6.jpeg";
import imgMarcha7 from "../assets/imgMarchaa7.jpeg";
import imgMarcha8 from "../assets/imgMarchaa8.jpeg";
import imgMarcha9 from "../assets/imgMarchaa9.jpeg";


const imagenesReales = [
  imgMarcha1,
  imgMarcha2,
  imgMarcha3,
  imgMarcha4,
  imgMarcha5,
  imgMarcha6,
  imgMarcha7,
  imgMarcha8,
  imgMarcha9,
];

export default function PrimiciaMarcha() {
  return (
    <section className="primicia-marcha-container">
      <div className="primicia-header">
      <h1 className="primicia-titulo">ASOTEL presente el primero de mayo. </h1>
      <p>ASOTEL se hizo presente en la gran marcha del primero de mayo con sus asociados y acompañantes. En unión y solidaridad con todos los trabajadores de Colombia. </p>
      </div>

      <div className="mosaico-grid">
        {imagenesReales.map((img, index) => (
          <div key={index} className="mosaico-item">
            <img src={img} alt={`Marcha 1 de Mayo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

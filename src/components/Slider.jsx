import { useEffect, useState } from "react";
import "../styles/slider.css";

// 🔹 Imágenes desde assets
import slide1 from "../assets/slider_elcorral.jpg";
import slide2 from "../assets/sld_subway.jpg";
import slide3 from "../assets/sld-colpensiones2.jpg";

export default function Slider() {
  const slides = [slide1, slide2, slide3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`fade ${i === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
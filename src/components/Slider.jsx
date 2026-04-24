import { useEffect, useState } from "react";
import "../styles/slider.css";


import slide1 from "../assets/img-slider-cooperativa.jpeg";
import slide2 from "../assets/slider-electronic-final.png";
import slide3 from "../assets/img-slider-ingetech.jpeg";




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
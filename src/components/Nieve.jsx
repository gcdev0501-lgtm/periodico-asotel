import { useEffect } from "react";
import "../styles/nieve.css";

export default function Nieve() {
  useEffect(() => {
    const contenedor = document.querySelector(".nieve-nav");

    if (!contenedor) return;

    function crearCopo() {
      const copo = document.createElement("div");
      copo.classList.add("snowflake");
      copo.textContent = "❄";

      copo.style.left = Math.random() * window.innerWidth + "px";
      copo.style.fontSize = 10 + Math.random() * 10 + "px";
      copo.style.animationDuration = 2 + Math.random() * 3 + "s";

      contenedor.appendChild(copo);

      setTimeout(() => {
        copo.remove();
      }, 5000);
    }

    const intervalo = setInterval(crearCopo, 200);

    return () => clearInterval(intervalo);
  }, []);

  return <div className="nieve-nav"></div>;
}
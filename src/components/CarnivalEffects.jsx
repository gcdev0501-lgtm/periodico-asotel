import { useEffect } from "react";
import "../styles/confetti.css";

export default function CarnivalEffects() {
  useEffect(() => {
    const container = document.getElementById("confetti-container");
    if (!container) return;

    const colors = ["#008000", "#FFD700", "#B38B00", "#E63946"];
    let intervalId;

    function createConfetti() {
      const confetti = document.createElement("span");
      confetti.className = "confetti";

      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration =
        4 + Math.random() * 3 + "s";

      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 7000);
    }

    intervalId = setInterval(createConfetti, 300);

    //  LIMPIEZA REACT (muy importante)
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Confeti */}
      <div id="confetti-container"></div>

      
    </>
  );
}

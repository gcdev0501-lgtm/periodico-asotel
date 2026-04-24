import React, { useState } from "react";
import { db } from "../firebaseConfig/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

import { FaUserCheck } from "react-icons/fa6";

import "../styles/encuestasidebar.css";

export default function EncuestaUltraSimple() {
  const [respuesta, setRespuesta] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviarRespuesta = async (e) => {
    e.preventDefault();

    if (!respuesta) {
      Swal.fire("Selecciona una opción", "", "warning");
      return;
    }

    setEnviando(true);

    try {
      await addDoc(collection(db, "encuestarapida"), {
        respuesta,
        fecha: serverTimestamp(),
      });

      Swal.fire("¡Gracias!", "Tu opinión fue registrada", "success");
      setRespuesta("");
    } catch (error) {
      console.error("Firebase error:", error);
      Swal.fire("Error", "No se pudo enviar la respuesta", "error");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="encuesta-sidebar">
      <h3>  <FaUserCheck /> Encuesta rápida</h3>

      <form onSubmit={enviarRespuesta}>
        <p>¿Cómo califica nuestro medio informativo?</p>

        <label className="radio-opcion">
          <input
            type="radio"
            name="calificacion"
            value="Excelente"
            checked={respuesta === "Excelente"}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          Excelente
        </label>

        <label className="radio-opcion">
          <input
            type="radio"
            name="calificacion"
            value="Bueno"
            checked={respuesta === "Bueno"}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          Bueno
        </label>

        <label className="radio-opcion">
          <input
            type="radio"
            name="calificacion"
            value="Regular"
            checked={respuesta === "Regular"}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          Regular
        </label>

        <button type="submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}

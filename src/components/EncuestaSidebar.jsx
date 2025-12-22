import React, { useState } from "react";
import { db } from "../firebaseConfig/firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

import '../styles/encuestasidebar.css';

export default function EncuestaSidebar() {

  const [respuesta, setRespuesta] = useState("");

  // Colección Firebase
  const encuestaCollection = collection(db, "encuesta");

  const enviarRespuesta = async (e) => {
    e.preventDefault();

    if (!respuesta) {
      Swal.fire("Error", "Selecciona una opción antes de enviar", "warning");
      return;
    }

    try {
      await addDoc(encuestaCollection, {
        fld_respuesta: respuesta,
        fecha: new Date()
      });

      Swal.fire("Gracias por participar", "", "success");
      setRespuesta(""); // Limpiar selección
    } catch (error) {
      Swal.fire("Error", "No se pudo enviar tu respuesta", "error");
      console.error(error);
    }
  };

  return (
    <div className="encuesta-sidebar">
      <h3>Encuesta rápida</h3>
      <form onSubmit={enviarRespuesta}>
        <p>¿Cómo calificarías nuestro servicio?</p>
        <label>
          <input
            type="radio"
            name="opcion"
            value="Excelente"
            checked={respuesta === "Excelente"}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          Excelente
        </label>
        <label>
          <input
            type="radio"
            name="opcion"
            value="Bueno"
            checked={respuesta === "Bueno"}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          Bueno
        </label>
        <label>
          <input
            type="radio"
            name="opcion"
            value="Regular"
            checked={respuesta === "Regular"}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          Regular
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

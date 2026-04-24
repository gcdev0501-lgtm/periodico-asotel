import React, { useState } from "react";
import { db } from "../firebaseConfig/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

import { FaUserCheck } from "react-icons/fa6";
import "../styles/encuestasidebar.css";

// 🔧 Función para normalizar nombre + apellido
const normalizarNombre = (texto) => {
  return texto
    .toLowerCase()
    .normalize("NFD")                // elimina tildes
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")            // espacios → guiones
    .trim();
};

export default function EncuestaSidebar() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [enviando, setEnviando] = useState(false);

  const enviarRespuesta = async (e) => {
    e.preventDefault();

    if (!nombreCompleto || !respuesta) {
      Swal.fire(
        "Datos incompletos",
        "Ingresa tu nombre y selecciona una opción",
        "warning"
      );
      return;
    }

    const personaId = normalizarNombre(nombreCompleto);

    setEnviando(true);

    try {
      await setDoc(doc(db, "encuesta", personaId), {
        personaId,
        nombreCompleto: nombreCompleto.trim(),
        respuesta,
        fecha: serverTimestamp()
      });

      Swal.fire("¡Gracias por participar!", "", "success");

      setNombreCompleto("");
      setRespuesta("");
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Voto ya registrado",
        "Esta persona ya participó en la encuesta",
        "info"
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="encuesta-sidebar">
      <h3>
        <FaUserCheck /> Encuesta rápida
      </h3>

      <form onSubmit={enviarRespuesta}>
        <p>¿Qué tipo de evento te gustaría para nuestro próximo encuentro?</p>

        <input
          className="box-correo"
          type="text"
          placeholder="Nombre y apellido"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
        />

        <label>
          <input
            type="radio"
            name="opcion"
            value="Rumba"
            checked={respuesta === "Rumba"}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          Rumba
        </label>

        <label>
          <input
            type="radio"
            name="opcion"
            value="Paseo"
            checked={respuesta === "Paseo"}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          Paseo
        </label>

        <button type="submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
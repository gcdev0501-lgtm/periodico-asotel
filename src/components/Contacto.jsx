import React, { useState } from "react";
import { db } from "../firebaseConfig/firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

import '../styles/contacto.css';

export default function Contacto() {

  // 🔹 Estados del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  // 🔹 Colección Firebase
  const contactoCollection = collection(db, "contacto");

  // 🔹 Función para guardar contacto en Firebase
  const guardarContacto = async (e) => {
    e.preventDefault();

    try {
      await addDoc(contactoCollection, {
        fld_nombre: nombre,
        fld_correo: correo,
        fld_mensaje: mensaje,
        fecha: new Date() // opcional: agregar fecha de envío
      });

      Swal.fire({
        title: '¡Formulario enviado!',
        text: 'Gracias por contactarnos.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      // Limpiar formulario
      setNombre("");
      setCorreo("");
      setMensaje("");

    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo enviar el mensaje. Intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      console.error("Error al guardar contacto: ", error);
    }
  }

  return (
    <section className="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={guardarContacto}>
        <label>Nombre:</label>
        <input 
          type="text" 
          placeholder="Tu nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />

        <label>Correo:</label>
        <input 
          type="email" 
          placeholder="Tu email" 
          value={correo} 
          onChange={(e) => setCorreo(e.target.value)} 
          required 
        />

        <label>Mensaje:</label>
        <textarea 
          rows="4" 
          placeholder="Escribe tu mensaje..." 
          value={mensaje} 
          onChange={(e) => setMensaje(e.target.value)} 
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
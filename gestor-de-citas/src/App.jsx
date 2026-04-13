import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React from "react";
import './App.css'

function Titulo(props) {
  return (
    <h2>{props.titulo}</h2>
  )
}
function ListadoCitas({ citas, eliminarCita }) {
  return (
    <>
      {citas.map(cita => (
        <Cita 
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
        />
      ))}
    </>
  );
}
function Cita({ cita, eliminarCita }) {
  return(
    <div className="Cita">
      <p>Mascota: <span>{cita.nombre}</span></p>
      <p>Dueño: <span>{cita.dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>

      <button 
        className="button u-full-width"
        onClick={() => eliminarCita(cita.id)}
      >
        Eliminar ×
      </button>
    </div>
  )
}
function Formulario({ agregarCita }) {

  const [cita, setCita] = useState({
    nombre: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      cita.nombre === "" ||
      cita.dueño === "" ||
      cita.fecha === "" ||
      cita.hora === "" ||
      cita.sintomas === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    cita.id = Date.now();

    agregarCita(cita);

    setCita({
      nombre: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <>
      <Titulo titulo="Crear mi Cita" />

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input name="nombre" value={cita.nombre} onChange={handleChange} />

        <label>Nombre Dueño</label>
        <input name="dueño" value={cita.dueño} onChange={handleChange} />

        <label>Fecha</label>
        <input type="date" name="fecha" value={cita.fecha} onChange={handleChange} />

        <label>Hora</label>
        <input type="time" name="hora" value={cita.hora} onChange={handleChange} />

        <label>Sintomas</label>
        <textarea name="sintomas" value={cita.sintomas} onChange={handleChange}></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
}
function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      nombre: "Niña",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      id: 2,
      nombre: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      id: 3,
      nombre: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]);
  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    if (confirm("¿Eliminar esta cita?")) {
      setCitas(citas.filter(cita => cita.id !== id));
    }
  };

  return (
    <>
      <section id="center">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Titulo titulo="ADMINISTRADOR DE PACIENTES" />
        <div className="container">
          <div className="row">

            {/* IZQUIERDA */}
            <div className="one-half column">
            <Formulario agregarCita={agregarCita} />            </div>

            {/* DERECHA */}
            <div className="one-half column">
              <Titulo titulo="Administra tus citas" />
              <ListadoCitas 
                citas={citas} 
                eliminarCita={eliminarCita} 
              />
            </div>

          </div>
        </div>
        {/*<script src="/static/js/bundle.js"></script>
        <script src="/static/js/vendors~main.chunk.js"></script>
        <script src="/static/js/main.chunk.js"></script>*/}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

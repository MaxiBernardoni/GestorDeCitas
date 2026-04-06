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
function ListadoCitas() {
    return (
    <>
      <Cita nombre="Niña" dueño="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>
      <Cita nombre="Sifon" dueño="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho"/>
      <Cita nombre="Floki" dueño="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo"/>
    </>
    );
}
function Cita(props) {
    return(
    <div className="Cita">
              <p>Mascota: <span>{props.nombre}</span></p>
              <p>Dueño: <span>{props.dueño}</span></p>
              <p>Fecha: <span>{props.fecha}</span></p>
              <p>Hora: <span>{props.hora}</span></p>
              <p>Sintomas: <span>{props.sintomas}</span></p><button className="button u-full-width">Eliminar ×</button>
    </div>)
}
function Formulario() {
    return (
      <>
      <Titulo titulo="Crear mi Cita" />
        <form><label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value="" readOnly/><label>
                     Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value="" readOnly/><label>
                      Fecha</label><input type="date" name="fecha" className="u-full-width" value="" readOnly/><label>
                      Hora</label><input type="time" name="hora" className="u-full-width" value="" readOnly/><label>Sintomas</label><textarea name="sintomas" className="u-full-width" readOnly></textarea>
                     <button type="submit"
                     className="u-full-width button-primary">Agregar Cita</button></form>

        </>
    )
}
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <section id="center">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Titulo titulo="ADMINISTRADOR DE PACIENTES" />
        <div className="container">
  <div className="row">

    {/* IZQUIERDA */}
    <div className="one-half column">
      <Formulario />
    </div>

    {/* DERECHA */}
    <div className="one-half column">
      <Titulo titulo="Administra tus citas" />
      <ListadoCitas />
    </div>

  </div>
</div>
    <script src="/static/js/bundle.js"></script>
    <script src="/static/js/vendors~main.chunk.js"></script>
    <script src="/static/js/main.chunk.js"></script>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

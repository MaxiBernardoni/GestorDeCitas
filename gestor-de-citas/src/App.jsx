import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function ListadoCitas() {
    
  }
  function Cita(props) {
    return(
    <div class="cita">
              <p>Mascota: <span>{props.nombre}</span></p>
              <p>Dueño: <span>{props.dueño}</span></p>
              <p>Fecha: <span>{props.fecha}</span></p>
              <p>Hora: <span>{props.hora}</span></p>
              <p>Sintomas: <span>{props.sintomas}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
            </div>)
  }
  return (
    <>
      <section id="center">
        <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <form><label>Nombre Mascota</label><input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"
                     value=""/><label>Nombre Dueño</label><input type="text" name="propietario" class="u-full-width"
                     placeholder="Nombre dueño de la mascota" value=""/><label>Fecha</label><input type="date" name="fecha"
                     class="u-full-width" value=""/><label>hora</label><input type="time" name="hora" class="u-full-width"
                     value=""/><label>Sintomas</label><textarea name="sintomas" class="u-full-width"></textarea><button type="submit"
                      class="u-full-width button-primary">Agregar Cita</button></form>
          </div>
          <div class="one-half column">
            
            <h2>Administra tus citas</h2>
            
            <Cita nombre="Niña" dueño="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>
            <Cita nombre="Sifon" dueño="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho"/>
            <Cita nombre="Floki" dueño="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo"/>
          </div>
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

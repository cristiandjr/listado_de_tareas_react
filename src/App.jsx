import { useEffect, useState } from 'react'

import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'
import Buscador from './components/Buscador'

import './index.css'

function App() {

  // ===== estados
  const [tareas, setTareas] = useState(() => JSON.parse(localStorage.getItem('tareas')) || []) // almacenamos todas la taareas
  const [tarea, setTarea] = useState({})
  const [search, setSearch] = useState('')


  // ===== logica
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  // guardamos en LS
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  // contador de tareas
  const tareasCompletasOk = tareas.filter(tarea => !!tarea.tareaCompletada).length
  const totalTareas = tareas.length // total de tareas

  let tareasOK = false
  if(totalTareas == tareasCompletasOk) {
    //console.log('completaste todas las TAREAS, hay q hacer una animacion de cohetes')
    tareasOK = true
  }

  // buscador
  let searchTareas = []
  if(!search.length >= 1) {
    searchTareas = tareas.reverse()
  } else {
    searchTareas = tareas.filter(tarea => {
      const tareasText = tarea.tarea.toLocaleLowerCase()
      const searchText = search.toLocaleLowerCase()
      return tareasText.includes(searchText)
    })
  }


  // marcar tareas completas
  const tareasCompletas = (text) => {
    const tareaIndex = tareas.findIndex(tarea => tarea.tarea === text)
    const tareaNueva = [...tareas]
    tareaNueva[tareaIndex].tareaCompletada = !tareaNueva[tareaIndex].tareaCompletada
    setTareas(tareaNueva)
  }
  

  return (
    <div className="App" id='inicio'>
      
      <header className='header'></header>

      <main className="tareas" id='crear'>
        <h2 className="tareas__heading">Seguimiento de Tareas 📝</h2>
        <h3 className="tareas__heading--subtitle">Haz completado {tareasCompletasOk} de {totalTareas} Tareas {tareasOK && '😁'}</h3>

        <Buscador 
          search={search}
          setSearch={setSearch}
        />

        <div className="tareas__contenedor">
          <div className="tareas__grid">
            <div className="tareas__form">
              <h2 className="tareas__heading">Añade Tareas</h2>
              
              <Formulario
                tareas={tareas}
                setTareas={setTareas}
                searchTareas={searchTareas}
                // lo que viene cuando se toca edit
                tareaApp={tarea}
                setTareaApp={setTarea}

          
              />

            </div>
            <div className="listado">
              <h2 className="tareas__heading">Administra tus Tareas</h2>

                <ListaTareas 
                    tareas={tareas}
                    setTareaApp={setTarea}
                    eliminarTarea={eliminarTarea}

                    // lo q viene del b uscador
                    searchTareas={searchTareas}

                    // tarea completa
                    tareasCompletas={tareasCompletas}

                />

            </div>
          </div>
        </div>
      </main>

      <section className="descarga" id='descarga'>
        <div className="descarga__contenedor">
          <h2 className="descarga__heading">Descarga Lista de Tareas App 📱</h2>
          <div className="descarga__grid">
            <div className="descarga__imagen">
              <img src="https://jade-cat-592245.netlify.app/src/assets/celu.png" alt="Lista de tareas Imagen" />
            </div>
            <div className="listado">
              <div className="listado__elemento">
                <p>Descarga la app en tu celular para mayor comodidad</p>
              </div>
              <div className="listado__elemento">
                <p>Organiza tu día, semana o mes para cumplir tus metas</p>
              </div>
              <div className="listado__elemento">
                <p>Alarmas personalizadas antes de que venza una fecha</p>
              </div>
              <div className="listado__elemento">
                <p>No necesitas conexión a internet</p>
              </div>
              <div className="listado__elemento">
                <p>Compatible con cualquier Sistema Operativo</p>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      <section className="testimonios" id='testimonios'>
        <div className="testimonios__contenedor">
          <h2 className="testimonios__heading">Testimonios 🙌</h2>
          <div className="testimonios__grid">
            <div className="testimonio">
              <p className="testimonio__texto">Excelente app de me organiza el día.</p>
              <p className="testimonio__autor">Denzel Washington</p>
            </div>
            <div className="testimonio">
              <p className="testimonio__texto">La verdad que me cambio el día, es un ayuda de memoria increíble.</p>
              <p className="testimonio__autor">Bruce Willis</p>
            </div>
            <div className="testimonio">
              <p className="testimonio__texto">Desde que descargue la app me siento mas cómodo.</p>
              <p className="testimonio__autor">Christian Bale</p>
            </div>
            <div className="testimonio">
              <p className="testimonio__texto">Lastima no conocer antes esta app!, excelente!.</p>
              <p className="testimonio__autor">Keanu Reeves</p>
            </div>
            <div className="testimonio">
              <p className="testimonio__texto">Que comodo se me hace el día.</p>
              <p className="testimonio__autor">Tom Cruise</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__contenedor">
          <div className="footer__grid">
            <div className="footer__logo">
              <img src="../src/assets/footer_logo.png" alt="Logo Footer" />
            </div>
            <div className="footer__web">
              <a href="http://cristiandjr.com" target="_blank">Creado por cristiandjr</a>
            </div>
            <nav className="navegacion">
              <a href="#inicio">Home</a>
              <a href="#crear">Crea tu lista de Tareas</a>
              <a href="#descarga">Descarga la app</a>
              <a href="#testimonios">Testimonios</a>
            </nav>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App

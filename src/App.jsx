import { useEffect, useState } from 'react'

import Header from './components/Header'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'
import Descarga from './components/Descarga'
import Testimonios from './components/Testimonios'
import Footer from './components/Footer'

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
      
      <Header />

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

      <Descarga />
      <Testimonios />
      <Footer />

    </div>
  )
}

export default App

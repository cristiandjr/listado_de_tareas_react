import Tareas from "./Tareas"

import styled from 'styled-components'



const Cotenedor = styled.div`
    width: auto;
    height: auto;
    margin: 0 auto;
    text-align: center;
`
const SinTarea = styled.h2`
    color: #ff0000;
`

const ListaTareas = ({ eliminarTarea, setTareaApp, searchTareas, tareasCompletas }) => {

    return (
        <>
        {
            searchTareas && searchTareas.length ? (
                <>
                    {
                        searchTareas.map( (tareaMap, index) => (
                            <Tareas
                                key={index}
                                tareaMap={tareaMap}
                                setTareaApp={setTareaApp}
                                tareasCompletas={() => tareasCompletas(tareaMap.tarea)}
                                eliminarTarea={eliminarTarea}
                            />
                        ))
                    }
                </>
            ) : (
                <Cotenedor>
                    <SinTarea>No hay tareas</SinTarea>
                    <p>Comienza agregando tareas y aparecerán en este lugar</p>
                </Cotenedor>
            )
        }
            
        </>
    )
}

export default ListaTareas
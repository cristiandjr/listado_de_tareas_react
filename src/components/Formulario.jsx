import { useEffect, useState } from "react"
import Error from "./Error"


const Formulario = ({ tareas, setTareas, tareaApp, setTareaApp }) => {

    // ===== estados
    const [tarea, setTarea] = useState('')
    const [tareaCompletada, setTareaCompletada] = useState(false)
    const [error, setError] = useState(false)

    // ===== logica
    
    // escuchacmos lo que sucede cuando se toca el boton editar
    useEffect(() => {
        if(Object.keys(tareaApp).length > 0) {
            setTarea(tareaApp.tarea)
        }
    }, [tareaApp])


    // generamos un id al azar

    // escuchamos lo que viene del form
    const handleSubmit = (e) => {
        e.preventDefault()

        if([tarea].includes('')) {
            console.log('error')
            setError(true)
            return
        }
        setError(false)

        // objeto entero con tareas
        const objetoTarea = {
            tarea,
            tareaCompletada
        }

        // validamos si se toco el boton editar o se agrega una new tarea
        if(tareaApp.id) {
            objetoTarea.id = Date.now()
            const tareasActualizadas = tareas.map(tareaState => tareaState.id === tareaApp.id ? objetoTarea : tareaState)
            setTareas(tareasActualizadas)
            setTareaApp({})
            
        } else {
            objetoTarea.id = Date.now()
            setTareas([...tareas, objetoTarea])
        }

        // reiniciamos el form
        setTarea('')


    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                { error && <Error>* Tienes que escribir tu tarea</Error>}

                <div className="tareas__form--textarea">
                    <textarea 
                        name="" 
                        id="tarea" 
                        value={tarea}
                        onChange={(e) => setTarea(e.target.value)}
                        placeholder="Escribe tu tarea aqui..."
                    />
                </div>

                <input 
                    type="submit"
                    className="tareas__form--submit"
                    value={
                        tareaApp.id ? 'Editar tarea' : 'Agregar tarea'
                    }
                />

            </form>
        </>
    )
}

export default Formulario
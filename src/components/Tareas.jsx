

const Tareas = ({ tareaMap, eliminarTarea, setTareaApp, tareasCompletas }) => {

    const { id, tarea, tareaCompletada } = tareaMap


   //console.log(tareasCompletas.tareaCompletada, 'EN TAREA')
   //console.log(tareaCompletada, 'EN TAREA')


    // ===== logica
    const handleEliminar = () => {
        const respuesta = confirm('Desea eliminar esta tarea?')
        if(respuesta) {
            eliminarTarea(id)
        }
    }

    // tareasCompletas && TodoItem-p--complete

    return (
        <div className="listado__elemento">
            <p 
                className={`listado__texto ${tareaCompletada && 'tarea__completa'}`}
                onClick={tareasCompletas}    
            >
                {tarea}
            </p>

            <div className="listado__button">
                <button
                    type="button"
                    className="listado__button--edit"
                    onClick={() => setTareaApp(tareaMap)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="listado__button--delete"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>

            </div>
        </div>
    )
}

export default Tareas


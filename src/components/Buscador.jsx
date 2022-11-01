

const Buscador = ({ search, setSearch }) => {

    const onSearchValueChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="tareas__buscador">
                <span className="tareas__buscador--icon"></span>
                <input 
                    type="text" 
                    placeholder="Busca tu tarea"
                    value={search}
                    onChange={onSearchValueChange}
                />
        </div>
    )
}

export default Buscador
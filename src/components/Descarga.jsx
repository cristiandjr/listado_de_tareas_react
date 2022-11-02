

const Descarga = () => {

    return (
        <section className="descarga" id='descarga'>
        <div className="descarga__contenedor">
          <h2 className="descarga__heading">Descarga Lista de Tareas App 📱</h2>
          <div className="descarga__grid">
            <div className="descarga__imagen">
              <img src="/celu.png" alt="Lista de tareas Imagen" />
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
    )
}

export default Descarga
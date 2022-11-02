

const Footer = () => {

    return (
        <footer className="footer">
        <div className="footer__contenedor">
          <div className="footer__grid">
            <div className="footer__logo">
              <img src="/footer_logo.png" alt="Logo Footer" />
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
    )
}

export default Footer
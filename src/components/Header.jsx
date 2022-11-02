

const Header = () => {

    return (
        <header className='header'>
            <div className="header__contenedor">
                <h1>Anota tus tareas y <span>cumplelas 😁!</span></h1>
                <div class="scroll-down">
                    <a href="#crear" class="mouse-wrapper">
                        <span class="mouse">
                            <span class="wheel"></span>
                        </span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
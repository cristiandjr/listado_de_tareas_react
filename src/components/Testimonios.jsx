

const Testimonios = () => {

    const testimonios = [
        {usuario: 'Denzel Washington', comment: 'Excelente app de me organiza el día.'},
        {usuario: 'Bruce Willis', comment: 'La verdad que me cambio el día, es un ayuda de memoria increíble.'},
        {usuario: 'Christian Bale', comment: 'Desde que descargue la app me siento mas cómodo.'},
        {usuario: 'Keanu Reeves', comment: 'Lastima no conocer antes esta app!, excelente!.'},
        {usuario: 'Tom Cruise', comment: 'Que comodo se me hace el día.'},
    ]

    return (
        <section className="testimonios" id='testimonios'>
            <div className="testimonios__contenedor">
                <h2 className="testimonios__heading">Testimonios 🙌</h2>
                <div className="testimonios__grid">

                    {
                        testimonios.map((testimonio, index) => (
                            <div className="testimonio" key={index}> 
                                <p className="testimonio__texto">{testimonio.comment}</p>
                                <p className="testimonio__autor">{testimonio.usuario}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Testimonios
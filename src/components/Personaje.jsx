import React from 'react'

const Personaje = ({ personaje }) => {
    return (
        <div className='card__personaje' >
            <div className="card__img">
            <img src={personaje.image} alt={personaje.image} />
            </div>

            <div className="card__texto">
            <h2>{personaje.name}</h2>
            <h3>Especie: {personaje.species}</h3>
            <h3 className='estado'>Estado: {personaje.status}</h3>
            </div>
        </div>
    )
}

export default Personaje
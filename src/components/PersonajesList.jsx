import React, { useState, useEffect } from 'react'
import Personaje from './Personaje'

const PersonajesList = () => {
    const [personajes, setPersonajes] = useState([])
    const [pagina,setPagina] = useState(1)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            const data = await response.json()
            setPersonajes(data.results)
            console.log(data.results)
        }
        fetchData()

    }, [pagina])

    return (
        <>
        <div className='botonera'>
        <button onClick={() => setPagina(pagina - 1)} >Pagina Ant</button>
            <p>Pagina: {pagina}</p>
            <button onClick={()=>setPagina(pagina+1)} >Pagina Sig</button>
        </div>

        <div className='contenedor__card'>
         {personajes.map((personaje) => {
                return (
                    <Personaje key={personaje.id} personaje={personaje} />
                )
            })}
        </div>

        <div className='botonera'>
        <button onClick={() => setPagina(pagina - 1)} >Pagina Ant</button>
            <p>Pagina: {pagina}</p>
            <button onClick={()=>setPagina(pagina+1)} >Pagina Sig</button>
        </div>
        </>
    )


}

export default PersonajesList
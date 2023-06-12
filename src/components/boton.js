import React from 'react'

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <div className="contenedor-botones">
            <button className='boton' onClick={manejarClic}>
                {texto}
            </button>
        </div>
    );
}

export default Boton;
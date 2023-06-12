import React from 'react'

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <div className="contenedor-botones">
            <button className='boton' onClick={manejarClic}><span>
                {texto}
            </span></button>
        </div>
    );
}

export default Boton;
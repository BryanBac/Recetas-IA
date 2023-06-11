import React from 'react';

function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <div classname=''>
            <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}>

                {texto}
            </button>
        </div>
    );
}

export default Boton;
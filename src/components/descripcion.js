import React from 'react';

function Descripcion(props) {
    return (
        <div classname='contenedor-descripcion'>
            <p className='descripcion-parrafo1'>{props.descripcion1}</p>
            <p className='descripcion-parrafo2'>{props.descripcion2}</p>
        </div>
    );
}

export default Descripcion;
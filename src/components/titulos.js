import React from 'react';

function Titulo(props) {
    return (
        <div className='contenedor-titulos'>
            <p className='titulo-principal'>{props.titulo}</p>
            <p className='subtitulo-pricipal'>{props.subtitulo}</p>
        </div>
    );
}

export default Titulo;
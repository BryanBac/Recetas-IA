import React from 'react'

function Boton(props) {
    const {texto, value, setValue} = props;
    return (
        <div className="contenedor-botones">
            <button className='boton' onClick={()=>{
                setValue(texto)
            }}><span>
                {texto}
            </span></button>
        </div>
    );
}

export default Boton;
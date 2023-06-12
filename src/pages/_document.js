import { Html, Head, Main, NextScript } from 'next/document';
import Boton from '../components/boton.js';
import Descripcion from '../components/descripcion.js';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {/* Header */}
        <div className='contenedor-header'>
          <img src='header.png' alt="" />
        </div>
        {/* Descripcion de la página */}
        <div className='contenedor-descripcion'>
          <Descripcion
            descripcion1='¡Bienvenido!'
            descripcion2='Ingresa tu presupuesto y selecciona el tipo de comida que más te apetezca, nosotros hacemos la magia.'
            descripcion3='¡Comencemos!'
          />
        </div>
        {/* Ingreso de Presupuesto */}
        <div className='presupuesto'>
          <p>Presupuesto: </p>
          <form onSubmit={ev => {ev.preventDefault; console.log(ev.target.search.value)}}>
            <input className='formPresupuesto' type='sumbit' name='presupuesto' autoComplete='off'></input>
          </form>
        </div>

        <div className='contenedor-btn-respuesta'>
          {/* Botones */}
          <div className='contenedor-botones'>
            <Boton texto='Comida Italiana'></Boton>
            <Boton texto='Comida Mexicana'></Boton>
            <Boton texto='Comida Japonesa'></Boton>
            <Boton texto='Comida China'></Boton>
            <Boton texto='Comida Estadounidense'></Boton>
            <Boton texto='Comida Clásicas'></Boton>
          </div>
          {/* Respuesta IA */}
          <div className='respuesta'>
            <p>Respuesta de la IA</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis metus eleifend, hendrerit magna vel, aliquam nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc quis velit vel tellus semper tempor. Mauris efficitur volutpat massa, in volutpat nunc. Fusce eleifend tincidunt scelerisque. Fusce eu viverra est, a iaculis tortor. Quisque quis felis vel eros pharetra bibendum ut et ipsum. Quisque dapibus tincidunt lacus, at ultricies tellus tincidunt in. Nam malesuada pulvinar purus, vitae maximus lorem fringilla a. Cras varius, leo nec condimentum gravida, lectus tellus iaculis justo, et pretium nisl lorem eget risus. </p>
          </div>
        </div>
          {/* Footer */}
          <div className='contenedor-footer'>
            <img src='footer.png' />
          </div>
        <NextScript />
      </body>
    </Html>
  )
}

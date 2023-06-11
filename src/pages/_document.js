import { Html, Head, Main, NextScript } from 'next/document'
import Titulo from '../components/titulos.js'
import Boton from '../components/boton.js';
import Descripcion from '../components/descripcion.js';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {/* Imagen */}
        
        {/* titulo y subtitulo */}
        <Titulo
          titulo='Este es un titulo'
          subtitulo='Este es un subtitulo'
        />
        {/* Descripcion de la página */}
        <Descripcion
          descripcion1='¡Bienvenido!'
          descripcion2='Ingresa tu presupuesto y selecciona el tipo de comida que más te apetezca, nosotros hacemos la magia.'

        />
        {/* Botones */}
        <div className='contenedor-botones'>
          <Boton texto='Comida Italiana'></Boton>
          <Boton texto='Comida Mexicana'></Boton>
          <Boton texto='Comida Japonesa'></Boton>
          <Boton texto='Comida China'></Boton>
          <Boton texto='Comida Estadounidense'></Boton>
          <Boton texto='Comida Clásicas'></Boton>
        </div>

        <NextScript />
      </body>
    </Html>
  )
}

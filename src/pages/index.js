import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Boton from "@/components/boton";
import Descripcion from "@/components/descripcion";

export default function Home() {
  const [pais, setPais] = useState("");
  const [monto, setMonto] = useState("");
  const [result, setResult] = useState("");
  useEffect(()=>{
    console.log(pais)
  }, [pais])
  useEffect(()=>{
    console.log(monto)
  }, [monto])

  const subir = async () => {
    event.preventDefault();
    setResult("");
    if(monto!=="" && pais!==""){
      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comida: pais, monto: monto }),
        });
  
        const data = await response.json();
        if (response.status !== 200) {
          throw data.error || new Error(`Request failed with status ${response.status}`);
        }
        console.log(data)
        setResult(data.result);
        setPais("");
        setMonto("")
      } catch (error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
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
          <form onSubmit={ev => { ev.preventDefault; console.log(ev.target.search.value) }}>
            <input className='formPresupuesto' type='sumbit' name='presupuesto' autoComplete='off' onChange={(event) => setMonto(event.target.value)}></input>
          </form>
          <button className="boton-presupuesto" onClick={subir}>Subir</button>
        </div>

        <div className='contenedor-btn-respuesta'>
          {/* Botones */}
          <div className='contenedor-botones'>
            <Boton texto='Comida Italiana' value={pais} setValue={setPais}></Boton>
            <Boton texto='Comida Mexicana' value={pais} setValue={setPais}></Boton>
            <Boton texto='Comida Japonesa' value={pais} setValue={setPais}></Boton>
            <Boton texto='Comida China' value={pais} setValue={setPais}></Boton>
            <Boton texto='Comida Estadounidense' value={pais} setValue={setPais}></Boton>
            <Boton texto='Comida Clásicas' value={pais} setValue={setPais}></Boton>
          </div>
          {/* Respuesta IA */}
          <div className='respuesta'>
            <p>Respuesta de la IA</p>
            {result}
          </div>
        </div>
        {/* Footer */}
        <div className='contenedor-footer'>
          <img src='footer.png' />
        </div>
      </main>
    </div>
  );
}
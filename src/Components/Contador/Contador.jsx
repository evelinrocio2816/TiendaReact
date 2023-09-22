import { useState } from "react"


const Contador = ({stock, inicial}) => {
    const [contador, setContador]=useState (inicial)
    
    const Sumar = ()=>{
        if (contador < stock){
            setContador (contador +1)
        };
         }
        const Restar = ()=>{
            if (contador > inicial){
                setContador (contador -1)
            }
        }
        const agregarAlCarrito =()=>{
            alert(`Agregaste ${contador} Productos al carrito`)
        }
  return (
    <>
    <div >
    <button onClick={Restar}> - </button>
    <strong>{contador}</strong>
    <button  onClick={Sumar}>+</button>
    </div>

    <button onClick={agregarAlCarrito}>Agregar Al Carrito</button>
    </>
  )
}

export default Contador
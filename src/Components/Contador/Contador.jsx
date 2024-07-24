import { useState } from "react";
import "./Contador.css"

const Contador = ({ stock, initial, addFunction }) => {
  const [counter, setCounter] = useState(initial);

  const Sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const Restar = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <button onClick={Restar}> - </button>
        <strong>{counter}</strong>
        <button onClick={Sumar}>+</button>
      </div>

      <button onClick={() => addFunction(counter)}>Agregar Al Carrito</button>
    </>
  );
};

export default Contador;

import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, price, img }) => {
  return (
    <div className="container-card">
      <img className="imgCard" src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {price}</p>
      <p>ID:{id} </p>

      <button>
        <Link className="btnDetalles" to={`/item/${id}`}>
          Ver Detalles
        </Link>
      </button>
    </div>
  );
};

export default Item;

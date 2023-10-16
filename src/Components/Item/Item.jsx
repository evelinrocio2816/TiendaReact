import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, price, img, stock }) => {
  return (
    <div className="container-card">
      <img className="imgCard" src={img} alt={nombre} />
      <h3> {nombre}</h3>
      <p>$ {price}</p>
      
      <p>Stock: {stock}</p>

      <button>
        <Link className="btnDetalles" to={`/item/${id}`}>
          Ver Detalles
        </Link>
      </button>
    </div>
  );
};

export default Item;

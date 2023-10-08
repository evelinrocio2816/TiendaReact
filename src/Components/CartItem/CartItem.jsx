import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item, quantity }) => {
  const { deleteProduct } = useContext(CartContext);
  return (
    <div>
      <h3>{item.nombre}</h3>
      <p>Cantidad:{quantity} </p>
      <p>Precio:{item.price} </p>
      <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
      <hr />
    </div>
  );
};

export default CartItem;

import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, totalQuantity, total, emptyCart } = useContext(CartContext);
  if (totalQuantity === 0) {
    return (
      <>
        <h2>No hay productos en el Carrito</h2>
        <Link to="/">Ver Productos</Link>
      </>
    );
  }
  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <h3>Total de la compra:${total}</h3>
      <h3>Cantidad Total ${totalQuantity}</h3>
      <button onClick={() => emptyCart()}>Vaciar Carrito</button>
      <Link to="/checkout">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;

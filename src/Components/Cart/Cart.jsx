import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
  const { cart, totalQuantity, total, emptyCart } = useContext(CartContext);
  if (totalQuantity === 0) {
    return (
      <div className="btnContainerCart">
        <h2>No hay productos en el Carrito</h2>
        <Link className="btnCart" to="/">Ver Productos</Link>
      </div>
    );
  }
  return (
    <div className="cartContainer">
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <h3>Total de la compra:${total}</h3>
      <h3>Cantidad Total ${totalQuantity}</h3>
    
      <div className="buttonCart">
      <button  className="boton-dos" onClick={() => emptyCart()}>Vaciar Carrito</button>
    <Link   className="boton-dos" to="/checkout">Finalizar Compra</Link>
    </div>
    </div>
  );
};

export default Cart;

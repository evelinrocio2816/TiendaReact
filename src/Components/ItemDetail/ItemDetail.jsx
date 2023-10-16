import React, { useState } from "react";
import "./ItemDetail.css";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ id, img, price, nombre, stock,description }) => {
  const [addQuantity, setAddQuantity] = useState(0);

  const {addProduct}=useContext(CartContext)

  const handleQuantity = (quantity) => {
    setAddQuantity(quantity);
   const item={id, price,nombre};
  addProduct(item,quantity)
  };
 

  return (
    <div className="containerCard">
      <img className="imgCards" src={img} alt={nombre} />
      <div className="datosCard">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio :${price} </h3>
        <p> <b>Descripcion:</b>{description}</p>
      </div>

      {addQuantity > 0 ? (
        <Link className="BtnTerminarCompra" to="/Cart">Terminar Compra</Link>
      ) : (
        <Contador initial={1} stock={stock} addFunction={handleQuantity} />
      )}
    </div>
  );
};

export default ItemDetail;

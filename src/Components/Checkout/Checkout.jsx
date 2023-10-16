import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const { cart, totalQuantity, emptyCart, total } = useContext(CartContext);

  const handleForm = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !confirmEmail) {
      setError("Completar todos los Campos");
      return;
    }
    if (email !== confirmEmail) {
      setError("Los campos de correo no coinciden");
      return;
    }

    const order = {
      items: cart.map((product) => ({
        id: product.item.id,
        nombre: product.item.nombre,
        quantity: product.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "Products", productOrder.id);

        const productDoc = await getDoc(productRef);
        const currentStock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: currentStock - productOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            emptyCart();
          })
          .catch((error) => {
            setError(
              "Error al crear la orden, por favor vuelva a intentarlo",
              error
            );
          });
      })
      .catch((error) => {
        setError("no se puede actualizar el Stock", error);
      });
  };
  return (
    <>
      <h1 className="title-checkout">CheckOut</h1>
      <div className="checkout-cart">
        <form onSubmit={handleForm}>
          {cart.map((product) => (
            <div key={product.item.id}>
              <p>{product.item.img}</p>
              <p>{product.item.nombre}</p>
              <p>Catidad:{product.quantity}</p>

              <p>Precio: ${product.item.price} </p>
              <button>Eliminar</button>
              <hr />
            </div>
           
           
          ))
          
          }
          <h1 className="title-checkout">Formulario de Contacto</h1>
          

          <div className="form-group">
            <label htmlFor="">Nombre: <span>*</span> </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Apellido:<span>*</span> </label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Telefono:<span>*</span> </label>
            <input
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email:<span>*</span> </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Confirm Email: <span>*</span></label>
            <input
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </div>
          
          {error && <p style={{ color: "red" }}>{error}</p>}
         
          <button className="btnForm"  type="submit">Finalizar Compra</button>
        </form>
        <p className="btnForm" >Cantidad Total es :{ totalQuantity} </p>
        {orderId && (
          <strong className="btnForm" >
            Gracias Por tu compra ! Tu numero de orden es: <span className="orderId"> {orderId}</span>
            <img src="../img/logo-tdm.jpg" alt="" />
          </strong>
          
        )}
        </div>
      
    </>
  );
};
export default Checkout;

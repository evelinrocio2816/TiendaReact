import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
 totalQuantity: 0,
});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  
  console.log(cart);
//Funcion de agregar Productos
  const addProduct = (item, quantity) => {
    const productExist = cart.find(prod => prod.item.id === item.id);

    if (!productExist) {
      setCart(prev => [...prev, { item,quantity }]);
      setTotalQuantity(prev => prev + quantity);
      setTotal(prev => prev + (item.price * quantity));
    } else {

      const cartActualized = cart.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity};
        }else{
            return prod;
        }
      });
      setCart(cartActualized);
      setTotalQuantity(prev => prev + quantity);
      setTotal(prev => prev + (item.price * quantity));

    }
  };
  //Funcion para eliminar productos
  const deleteProduct =(id)=>{
    const productDelete = cart.find(prod =>prod.item.id=== id)
    const cartActualized= cart.filter(prod =>prod.item.id !== id)
    setCart(cartActualized);
    setTotalQuantity(prev => prev - productDelete.quantity);
    setTotal(prev=> prev-(productDelete.item.price *  productDelete.quantity));
  }
  //funcion para vaciar el carrito
  const emptyCart = ()=>{
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  }
  return(
    <CartContext.Provider value={{cart, deleteProduct,emptyCart,addProduct, total,totalQuantity}}>
        {children}

    </CartContext.Provider>
   
  )
};


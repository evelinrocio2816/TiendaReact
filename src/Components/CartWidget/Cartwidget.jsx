import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


const Cartwidget = () => {
  const {totalQuantity}=useContext(CartContext)
  return (
    <div>
      <Link to="/cart">
    <img className="imgCarrito" src="../img/CarritoImg.png" alt="" />
    {
      totalQuantity > 0 && <strong style={{color:"white"}}>{totalQuantity}</strong>
    }
    
   </Link>
    </div>

  )
}

export default Cartwidget
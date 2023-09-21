import"./ItemListContainer.css"
import { useState,useEffect } from "react"
import { getProduct, getProductosPorCategoria } from "../../AsincMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {
    const [product,setProduct]=useState([])

    const {idCategoria}=useParams();

    useEffect( ()=>{
      const funcion = idCategoria? getProductosPorCategoria: getProduct ;

      funcion(idCategoria)
      .then(res => setProduct(res))  
    
    },[idCategoria])


  return (
    <>
        <h2>{props.greeting}</h2>
        <ItemList product={product}/>
    </>
  )
}

export default ItemListContainer
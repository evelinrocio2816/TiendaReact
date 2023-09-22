import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'

const ItemDetail = ({id,img,precio,nombre}) => {
  return (
    <div className='containerCard'>
      <img className="imgCards" src={img} alt= {nombre} />
      <div className='datosCard'>
        <h2>Nombre: {nombre}</h2> 
        <h3>Precio : $ {precio} </h3>
        <h3> ID: {id} </h3>
        <p> <b>Descripcion:</b>No se que poner aca todavia xD</p>
        <Contador stock={10} inicial={1}/>
       </div>
    </div>
  )
}

export default ItemDetail

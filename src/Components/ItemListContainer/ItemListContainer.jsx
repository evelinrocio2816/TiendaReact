import "./ItemListContainer.css";
import { useState, useEffect } from "react";
//import { getProduct, getProductosPorCategoria } from "../../AsincMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Services/config";

const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProducts = idCategoria
      ? query(collection(db, "Products"), where("idCat", "==", idCategoria))
      : collection(db, "Products");

    getDocs(misProducts)
      .then((res) => {
        const newProducts = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProduct(newProducts);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <>
      <h2>{props.greeting}</h2>
      <ItemList product={product} />
      <img className="ImgFondo" src="../img/mascotitas.webp" alt="Mascotitas" />
    </>
  );
};

export default ItemListContainer;

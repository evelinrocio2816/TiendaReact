import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Services/config";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const newDoc = doc(db, "Products", idItem);

    getDoc(newDoc)
      .then(res => {
        const data = res.data();
        const newProduct = { id: res.id, ...data };
        setProduct(newProduct);
      })
      .catch(error => console.log(error));
  }, [idItem]);

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;

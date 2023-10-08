import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({ product }) => {
  return (
    <div className="products">
      {product.map(prod=> <Item key={prod.id} {...prod} />)}
    </div>
  );
};

export default ItemList;

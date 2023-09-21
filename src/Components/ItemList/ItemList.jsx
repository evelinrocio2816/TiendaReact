import Item from "../Item/Item";

const ItemList = ({ product }) => {
  return (
    <div>
      {product.map(prod=> <Item key={prod.id} {...prod} />)}
    </div>
  );
};

export default ItemList;

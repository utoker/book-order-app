import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = ({ id, title, price, description }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addItemToCart({ id, title, price }));
  };

  return (
    <li key={id} className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

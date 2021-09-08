import { useDispatch } from "react-redux";
import { removeItem, addItemToCart } from "../../store/cartSlice";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(
      addItemToCart({ id: item.id, price: item.price, title: item.title })
    );
  };
  const removeHandler = () => {
    dispatch(removeItem(item.id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.totalPrice.toFixed(2)}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

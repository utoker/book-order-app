import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/uiSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(toggle());
      }}
      className={classes.button}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

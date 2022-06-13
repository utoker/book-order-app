import { showNotification } from "./uiSlice";
import { replaceCart } from "./cartSlice";

export const sendCartData = (cart) => {
  const {REACT_APP_URL} = process.env
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(`${REACT_APP_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });
      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success ",
          title: "Success!",
          message: "sent cart data succesfully",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const getCartData = (cart) => {
  const {REACT_APP_URL} = process.env
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "fetching...",
        message: "Getting cart data",
      })
    );
    const getRequest = async () => {
      const response = await fetch(`${REACT_APP_URL}/cart.json`);
      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }
      const cartData = await response.json();
      return cartData;
    };

    try {
      const cartData = await getRequest();
      dispatch(
        replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      dispatch(
        showNotification({
          status: "success ",
          title: "Success!",
          message: "got cart data succesfully",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

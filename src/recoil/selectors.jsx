import { selector } from "recoil";
import { cartState } from "./atoms";

export const cartCountState = selector({
    key: 'cartCountState',
    get: ({get}) => {
      const cart = get(cartState);
  
      return cart.length;
    },
  });
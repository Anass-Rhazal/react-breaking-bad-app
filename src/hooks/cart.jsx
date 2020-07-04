import { useSetRecoilState } from "recoil";
import { cartState } from "../recoil/atoms";


export function useCart() {

    const setCart = useSetRecoilState(cartState);

    return (action, payload) => {
        setCart((oldCart) => {

            switch (action) {
                case 'ADD_CART': {
                    const foundItemIndex = oldCart.findIndex((i) => i.id === payload.id)
                    if (foundItemIndex > -1) {
                        const item = oldCart[foundItemIndex]
                        return [...oldCart.slice(0, foundItemIndex), { ...item, quantity: item.quantity + 1 }, ...oldCart.slice(foundItemIndex + 1)];
                    }
                    return [...oldCart, { id: payload.id, quantity: 1 }]
                }
                case 'UPDATE_QUANTITY': {
                    const foundItemIndex = oldCart.findIndex((i) => i.id === payload.id)
                    const item = oldCart[foundItemIndex]
                    return [...oldCart.slice(0, foundItemIndex), { ...item, quantity: payload.quantity }, ...oldCart.slice(foundItemIndex + 1)];
                }
                case 'DELETE_CART': {
                    const foundItemIndex = oldCart.findIndex((i) => i.id === payload.id)
                    return [...oldCart.slice(0, foundItemIndex), ...oldCart.slice(foundItemIndex + 1)];
                }
                default : return oldCart
            }
    
        })
    }

    


}
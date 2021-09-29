import React, { useReducer,createContext } from "react";
export const CartContext = createContext();


function reducer(state, { type, payload }) {

    switch (type) {
        case "ADD_TO_CART":

            // works for updating product in cart if already exist in the cart

            const idx = state.findIndex(item => item.id === payload.id)

            if(idx > -1){
                const newState = [
                    ...state.slice(0, idx),
                    {...state[idx], quantity: state[idx].quantity + payload.quantity },
                    ...state.slice(idx + 1)
                ]
                return newState
            }
            
            // works for adding product in cart first time
            return [...state, payload];

        case "DELETE_FROM_CART":
            return state.filter((c) => c.id !== payload.id);
        case "CHECKOUT_CART":
            return [];
        default:
            return state;
    }
}


export const CartContextProvider = (props) => {
    const [cart, setCart] = useReducer(reducer, []);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    );
};
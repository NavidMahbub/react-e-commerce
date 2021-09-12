import React, {useReducer} from 'react'

export const CartContext = React.createContext();

function reducer(state, action){
    // state[action.id] = action
    // console.log(state)
    // return state
    return [...state, action]
}

export const CartContextProvider = (props) => {

    const [cart, setCart] = useReducer(reducer, [])

    return (
        <CartContext.Provider value ={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

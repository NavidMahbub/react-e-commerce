import React, {useReducer} from 'react'

export const CartContext = React.createContext();

function reducer(state, {type, action}){
    // state[action.id] = action
    // console.log(state)
    // return state

    switch(type){
        case 'ADD_CART' :
            for(let i = 0; i < state.length; i++){
                if(state[i].id === action.id){
                    state[i].quantity += action.quantity;
                    console.log(state[i])
                    
                    return [...state];
                }
            }
        
            return [...state, action]
        case 'DELETE_CART' :
            return state.filter(c => c.id !==action.id)
        default:
            return state;

    }
    
    
}

export const CartContextProvider = (props) => {

    const [cart, setCart] = useReducer(reducer, [])

    return (
        <CartContext.Provider value ={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

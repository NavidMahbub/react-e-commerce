import React,{useContext} from 'react'
import {CartContext } from "../../contexts/CartContext/CartContext";


export default function CartItem({item}) {
    const {setCart} = useContext(CartContext)
    return (
        <div className = 'flex bg-gray-100 m-6 p-4'>
            <div  className = "cursor-pointer mr-5" onClick ={e =>setCart({type: 'DELETE_CART',action:item})}>X</div>
            <img src = {item.image} className = "w-6 mr-5" alt = ""/>
            <div>
            <p>{item.title}</p>
            <p>$ {item.price}</p>
            </div>
            

            <div className = "flex justify-between m-2"> 
                <div className = 'py-1 flex justify-between border w-20 px-3'>
                    <p className = 'cursor-pointer' onClick = {e =>setCart({type: 'ADD_CART',action:{...item, quantity: -1}})}>-</p>
                    {item.quantity}
                    <p className = 'cursor-pointer' onClick = {e =>setCart({type: 'ADD_CART',action:{...item, quantity: 1}})}>+</p>
                </div>
            </div>
        </div>
    )
}

import React, {useState, useContext} from 'react'
import {CartContext } from "../../contexts/CartContext/CartContext";

export default function Product({product}) {

    const [counter, setcounter] = useState(1)
    const {setCart} = useContext(CartContext)

    return (
        <div className = 'w-56 shadow-xl m-8 flex flex-col justify-between bg-white border-2 rounded-lg'>
            <img src = {product.image} className = 'h-36 m-auto' alt ='product-img'/>

            <div className ='text-xs mt-6 pb-0px m-2'>
                <p>{product.title}</p>
                <p className = 'mt-2 font-bold'>$ {product.price}</p>
            </div>

            <div className = "flex justify-between m-2"> 
                <div className = 'py-1 flex justify-between border w-20 px-3'>
                    <p className = 'cursor-pointer' onClick = {e => setcounter(prev => prev-1 < 1 ? 1 : prev -1 ) }>-</p>
                    {counter}
                    <p className = 'cursor-pointer' onClick = {e => setcounter(prev => prev+1)}>+</p>
                </div>

                <div className = 'border cursor-pointer py-1 px-1 hover:bg-black hover:text-white' onClick = {e =>{
                    let cnt = counter;
                    setcounter(1)
                    return setCart({type: 'ADD_CART',action:{...product, quantity: cnt}})
                }}>Add to Cart</div>
            </div>
        </div>
    )
}

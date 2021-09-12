import React, {useContext} from 'react'
import {CartContext } from "../../contexts/CartContext/CartContext";

export default function NavBar() {
    const {cart} = useContext(CartContext)
    return (
        <div className = 'bg-white flex justify-between h-14'>
            <div className = 'mx-8 text-3xl mt-2'>
                <h1>Arredo</h1>
            </div>

            <div className = 'text-lg mr-10 mt-3'>
                <ul className= 'list-none flex'>
                    <li>Home</li>
                    <li className= 'ml-12'>Products</li>
                    <li className= 'ml-12'>About</li>
                    <li className= 'ml-12'>{cart.length} Cart</li>
                </ul>
            </div>
            {console.log("cart = ")}
            {console.log(cart)}
        </div>
    )
}

import React, {useContext, useEffect,useState} from 'react'
import {CartContext } from "../../contexts/CartContext/CartContext";



export default function NavBar({setIsOpen, modalIsOpen}) {
    const {cart} = useContext(CartContext)
    const [qnt, setqnt] = useState(0)

    useEffect(() => {
        setqnt(0)
        for(let i = 0; i < cart.length; i++){
            setqnt(prev => prev + cart[i].quantity)
        }
    }, [cart])

    return (
        <div className = 'bg-gray-100 flex justify-between h-14'>
            <div className = 'mx-8 text-3xl mt-3'>
                <h1>DSi</h1>
            </div>

            <div className = 'text-md mr-10 mt-4'>
                <ul className= 'list-none flex'>
                    <li className = 'cursor-pointer'>Home</li>
                    <li className= 'cursor-pointer ml-12'>Products</li>
                    <li className= 'cursor-pointer ml-12'>About</li>
                    <li className= 'cursor-pointer ml-12' onClick = {e => setIsOpen(!modalIsOpen)}>{qnt} Cart</li>
                </ul>
            </div>
        </div>
    )
}

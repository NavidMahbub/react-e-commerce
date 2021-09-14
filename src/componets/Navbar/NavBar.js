import React, {useContext, useEffect,useState} from 'react'
import {CartContext } from "../../contexts/CartContext/CartContext";
import {FaCartPlus} from "react-icons/fa"


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
        <div className = 'bg-gray-100 flex justify-between h-12'>
            <div className = 'mx-8 text-3xl mt-2 cursor-pointer tracking-widest'>
                <h1>DSi</h1>
            </div>

            <div className = 'text-md mr-10 mt-3'>
                <ul className= 'list-none flex'>
                    <li className = 'cursor-pointer'>Home</li>
                    <li className= 'cursor-pointer ml-12'>Products</li>
                    <li className= 'cursor-pointer ml-12'>About</li>
                    <li className= 'cursor-pointer ml-12' onClick = {e => setIsOpen(!modalIsOpen)}> <FaCartPlus className =' text-xl text-yellow-500'/> </li>
                    <li className= 'cursor-pointer ml-2' onClick = {e => setIsOpen(!modalIsOpen)}>{qnt}</li>
                </ul>
            </div>
        </div>
    )
}

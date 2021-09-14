import React from 'react'

export default function Footer() {
    return (
        <div className = 'h-96 flex flex-col m-auto  bg-gray-600 text-white'>
            <div className ='text-4xl tracking-widest text-center mt-28'>Our Online Store!</div>
            <div className ='tracking-wide text-center mt-4'>DSI™ features 80+ millions of products with all at incredible prices.,<br/> We provide shoppers with a hassle-free and worry-free international shopping ...</div>
            <div className = 'border cursor-pointer py-2 px-4 hover:bg-black hover:text-white text-center m-auto mt-4'>Buy Products</div>
            <div className ='text-center mb-2'>All right is Reserved by DSi</div>
        </div>
    )
}

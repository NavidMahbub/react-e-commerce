import React, { useEffect, useState } from "react";
import axios from "axios";
import {CartContextProvider } from "../../contexts/CartContext/CartContext";
import NavBar from "../Navbar/NavBar";
import Product from "../Product/Product";

export default function Home() {
    const [ products, setproducts ] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setproducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <CartContextProvider>
            <div className = 'sticky top-0'>
                <NavBar/> 
            </div>
            
            <div  className = 'flex flex-wrap justify-around  bg-gray-100'>
                {products.map((product,index) => <Product key = {index} product = {product}/>)}
            </div>
        </CartContextProvider>
    );
}

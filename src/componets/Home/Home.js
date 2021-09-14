import React, { useEffect, useState } from "react";
import axios from "axios";
import {CartContextProvider } from "../../contexts/CartContext/CartContext";
import NavBar from "../Navbar/NavBar";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";

export default function Home() {
    const [ products, setproducts ] = useState([]);
    const [fourOfourpage, setfourOfourpage] = useState()
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setproducts(res.data);
                setfourOfourpage(null)
            })
            .catch((err) => {
                //console.log(err);
                setfourOfourpage(err.toString())
            });
    }, []);

    return (
        <CartContextProvider>
          
            <Router>
                <Switch>
                    <Route exact path ="/">
                        <div className = 'sticky top-0'>
                            <NavBar setIsOpen = {setIsOpen} modalIsOpen ={modalIsOpen}/> 
                        </div>

                        <Cart setIsOpen = {setIsOpen} modalIsOpen ={modalIsOpen}/>
                        <Banner/>
                        {fourOfourpage && (<div className = 'text-4xl flex justify-center mt-48'>{fourOfourpage}...</div>)}

                        <div  className = 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 justify-around sm:justify-center bg-gray-100'>
                            {products.map((product,index) => <Product key = {index} product = {product}/>)}
                        </div>
                        <Footer/>

                    </Route>

                    <Route path = "/check_out">
                        {/* <div className = 'text-4xl flex justify-center mt-60'>Thank You for Choosing us!</div> */}
                        <CheckOut/>
                    </Route>

                    <Route path ="*">
                        <div className = 'text-4xl flex justify-center mt-48'>Please Provide a Valid Route Path...</div>
                    </Route>

                </Switch>
            </Router>
           
           
        </CartContextProvider>
    );
}

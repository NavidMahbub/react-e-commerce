import React, { useState } from "react";

import { CartContextProvider } from "../../contexts/CartContext/CartContext";
import NavBar from "../Navbar/NavBar";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import CheckOut from "../CheckOut/CheckOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  useFetchProducts  } from "../../hook/useFetchProducts";
import useModalOpen from "../../hook/useModalOpen";

export default function Home() {
    // const [products, setproducts] = useState([]);
    const [fourOfourpage, setfourOfourpage] = useState(false);
    // const [modalIsOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     axios
    //         .get("https://fakestoreapi.com/products")
    //         .then((res) => {
    //             setproducts(res.data);
    //             setfourOfourpage(null);
    //         })
    //         .catch((err) => {
    //             setfourOfourpage(err.toString());
    //         });
    // }, []);

    //custom hooks
    const {products} = useFetchProducts("https://fakestoreapi.com/products")
    const {modalIsOpen, setIsOpen} = useModalOpen(false)

    return (
        <CartContextProvider>
            <Router>
                <div className="sticky top-0">
                    <NavBar setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
                </div>
                <Cart setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />

                <Switch>
                    <Route exact path="/">
                        <Banner />

                        {fourOfourpage && (
                            <div className="text-4xl flex justify-center mt-48">
                                {fourOfourpage}...
                            </div>
                        )}

                        <div className="flex justify-center bg-gray-100">
                            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 ">
                                {products.map((product, index) => (
                                    <Product key={index} product={product} />
                                ))}
                            </div>
                        </div>

                    </Route>

                    <Route path="/check_out">
                        <CheckOut />
                    </Route>

                    <Route path="*">
                        <div className="text-4xl flex justify-center mt-20 mb-32">
                            Please Provide a Valid Route Path...
                        </div>
                    </Route>
                </Switch>
                
                <Footer />

                
            </Router>
        </CartContextProvider>
    );
}

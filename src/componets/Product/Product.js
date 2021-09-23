import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

export default function Product({ product }) {
    const [counter, setcounter] = useState(false);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {

        let check = true;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id) {
                setcounter(cart[i].quantity);
                check = false;
            }
        }
        if (check) setcounter(false);
    }, [cart, product.id]);

    return (
        <div className="w-52 shadow-xl m-6 lg:m-10 flex flex-col justify-between bg-white border-2 rounded-lg">
            <img
                src={product.image}
                className="h-32 m-auto"
                alt="product-img"
            />

            <div className="text-xs mt-6 pb-0px m-2">
                <p>{product.title}</p>
                <p className="mt-2 font-bold">$ {product.price}</p>
            </div>

            <div className="flex justify-between p-2">
                {counter && (
                    <div className="py-1 m-auto flex justify-between border w-20 ">
                        <p
                            className="cursor-pointer px-2"
                            onClick={(e) => {
                                setcounter((prev) =>
                                    prev - 1 < 1 ? false : prev - 1
                                );
                                return setCart({
                                    type: "ADD_CART",
                                    action: { ...product, quantity: -1 },
                                });
                            }}
                        >
                            -
                        </p>

                        <p>{counter}</p>

                        <p
                            className="cursor-pointer px-2"
                            onClick={(e) => {
                                setcounter((prev) => prev + 1);
                                return setCart({
                                    type: "ADD_CART",
                                    action: { ...product, quantity: 1 },
                                });
                            }}
                        >
                            +
                        </p>
                    </div>
                )}

                <div
                    className="border m-auto cursor-pointer py-1 px-1 hover:bg-black hover:text-white"
                    onClick={(e) =>
                        setCart({
                            type: "ADD_CART",
                            action: { ...product, quantity: 1 },
                        })
                    }
                >
                    Add to Cart
                </div>
            </div>
        </div>
    );
}

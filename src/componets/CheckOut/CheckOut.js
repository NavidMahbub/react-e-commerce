import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext/CartContext";

export default function CheckOut() {
    const { cart, setCart } = useContext(CartContext);
    return (
        <div className="flex flex-col mt-20 mb-32">
            <div className="m-auto text-xl mb-10">---- Product list -----</div>

            {cart.map((c, idx) => (
                <div className="m-auto">
                    {idx + 1} : {c.title}
                </div>
            ))}
            {/* {setCart({type: "CHECKOUT_CART",action: [],})} */}
            <div className="text-4xl flex justify-center mt-10">
                Thank You for Choosing us!
            </div>

            <Link className="m-auto mt-3 border cursor-pointer p-1 border-black hover:bg-black hover:text-white" to="/"
                 onClick={(e) =>
                    setCart({ type: "CHECKOUT_CART", action: [] })
                }
            >
               
                Back to Home

            </Link>
        </div>
    );
}

import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

export default function CartItem({ item }) {
    
    const { setCart } = useContext(CartContext);

    return (
        <div>
            {item.quantity ? (
                <div className="flex bg-gray-100 my-3 px-2 lg:m-6 lg:p-4 justify-between rounded shadow-xl">
                    <div className="flex">
                        <div
                            className="cursor-pointer m-auto"
                            onClick={(e) =>
                                setCart({ type: "DELETE_FROM_CART", payload: item })
                            }
                        >
                            X
                        </div>
                        <img
                            src={item.image}
                            className="w-6 h-auto ml-4 lg:ml-6"
                            alt=""
                        />
                        <div className=" ml-6 m-auto text-sm">
                            <p>{item.title}</p>
                            <p>$ {item.price}</p>
                        </div>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="py-1 flex justify-between border w-20  m-auto">
                            <p
                                className="cursor-pointer px-3"
                                onClick={(e) =>
                                    setCart({
                                        type: "ADD_TO_CART",
                                        payload: { ...item, quantity: -1 },
                                    })
                                }
                            >
                                -
                            </p>
                            {item.quantity}
                            <p
                                className="cursor-pointer px-3"
                                onClick={(e) =>
                                    setCart({
                                        type: "ADD_TO_CART",
                                        payload: { ...item, quantity: 1 },
                                    })
                                }
                            >
                                +
                            </p>
                        </div>
                    </div>
                </div>
            ):null}
        </div>
    );
}

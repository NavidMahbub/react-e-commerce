import { useEffect, useState } from "react";


export const useFetchProducts = (url) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            localStorage.setItem('products', JSON.stringify(data))
            setProducts(data);
        };

        if(localStorage.getItem('products')){
            setProducts(JSON.parse(localStorage.getItem('products')))
        }else fetchData();
    }, [url]);

    return { products };
};

import { useEffect, useState } from "react";
import useAxios from "./useAxios";


const useProducts = () => {

    const axiosPublic = useAxios()
    const [products,setProducts] = useState(0)

    useEffect(()=>{
        axiosPublic.get("/pagination")
        .then(products => setProducts(products.data)) 
    },[axiosPublic])
   
    const totalProducts = products.length
    return totalProducts
};

export default useProducts;
import { useEffect, useState } from "react";
import ListProduct from "../components/ListProduct";
import { instance } from "../config/configAxios";
import IProduct from "../interface/product";

function ProductPage(){

    const [products,setProducts] = useState<IProduct[]>([])
    useEffect(()=>{
    
        (async ()=>{
        try{
            const res = await instance.get('/products');
            // console.log(res);
            setProducts(res.data)
        }catch(err){
            alert(err)
        }
        })();
    },[])
    return(
        <ListProduct listProduct={products}/>
    )
}

export default ProductPage;
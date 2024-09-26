import { useEffect, useState } from "react";
import IProduct from "../interface/product";
import { instance } from "../config/configAxios";

function ProductDetailPage(){
    //lấy id trên url
    const [product,setProduct]= useState<IProduct>()
    const id=1;
    useEffect(()=>{
        (async()=>{
            // lấy thông tin sản phẩm theo id
            const data = await instance.get(`/product/${id}`);
            if(data.data){
                setProduct(data.data)
            }
        })()
    },[])
    return(
        <>
            <h1>Chi tiết sản phẩm</h1>
        </>
    )
}

export default ProductDetailPage;
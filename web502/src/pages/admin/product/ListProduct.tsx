import { useEffect, useState } from "react";
import { instance } from "../../../config/configAxios";
import IProduct from "../../../interface/product";

function ListProduct() {
  //10p: sử useEffect để lấy danh sách sản phẩm
  // gán vào biến(listProduct) sử useState

  //20p: Đổ dữ liệu listProduct ra 1 table
  const [listProduct,setListProduct] = useState<IProduct[]>([])

  const getAllProduct =async ()=>{
    const data =await instance.get('/products');
    if(data.data){
      setListProduct(data.data)
    }
  }

  useEffect(()=>{
    getAllProduct();
  },[])

  console.log(listProduct);
  

  return (
    <>
      <h1>Danh sách sản phẩm</h1>
      
    </>
  );
}

export default ListProduct;

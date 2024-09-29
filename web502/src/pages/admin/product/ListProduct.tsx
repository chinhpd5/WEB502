import { useEffect, useState } from "react";
import { instance } from "../../../config/configAxios";
import IProduct from "../../../interface/product";
import { Link } from "react-router-dom";

function ListProduct() {
  //10p: sử useEffect để lấy danh sách sản phẩm
  // gán vào biến(listProduct) sử useState

  //20p: Đổ dữ liệu listProduct ra 1 table
  const [listProduct, setListProduct] = useState<IProduct[]>([]);

  const getAllProduct = async () => {
    const data = await instance.get("/products");
    if (data.data) {
      setListProduct(data.data);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  console.log(listProduct);

  return (
    <>
      <h1>Danh sách sản phẩm</h1>
      <Link to={`add`} className="btn btn-primary m-3">Thêm mới sản phẩm</Link>
      {/* <Link to={`/admin/product/add`}>Thêm mới sản phẩm</Link> */}

      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr className="table-success">
            <th scope="col">STT</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Giá bán</th>
            <th scope="col">Hình Ảnh</th>
            <th scope="col">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {
            listProduct?.map((item:IProduct,index)=>{
              return (
                <tr key={item.id}>
                  <th scope="row">{index+1}</th>
                  <td>{item.title}</td>
                  <td>{item.stock}</td>
                  <td>{item.price}</td>
                  <td><img style={{width:"100px"}} src={item.thumbnail} alt={item.title} /></td>
                  <td>{item.description}</td>
                </tr>
              )
            })
          }
         
          
        </tbody>
      </table>
    </>
  );
}

export default ListProduct;

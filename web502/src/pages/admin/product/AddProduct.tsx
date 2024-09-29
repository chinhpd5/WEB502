import { useState } from "react";
import { ProductInput } from "../../../interface/product";

const init:ProductInput ={
  title:'',
  price:0,
  description:'',
  thumbnail:''
}

function AddProduct() {
  const [data,setData]= useState<ProductInput>(init)

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(data);
        
  }

  return (
    <>
      <h1>Thêm mới sản phẩm </h1>
      <div className="container">
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            {/* Tên sản phẩm */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tên sản phẩm
            </label>
            <input
              type="text"
              value={data.title}
              onChange={
                (e)=>{
                  setData((pre)=>{
                    //spread
                    return {...pre, title: e.target.value}
                  })
                  
                }
              }
              className="form-control"
              id="title"
            />
          </div>
            {/* giá sản phẩm */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Giá sản phẩm
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={data.price}
              onChange={
                (e)=>{
                  setData((pre)=>{
                    return {...pre,price: Number(e.target.value)}
                  })
                }
              }
            />
          </div>

          {/* Hình ảnh sản phẩm */}
          <div className="mb-3">
            <label htmlFor="thumbnail" className="form-label">
              Hình ảnh
            </label>
            <input
              type="text"
              className="form-control"
              id="thumbnail"
            />
          </div>

          {/* Mô tả sản phẩm */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Mô tả
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;

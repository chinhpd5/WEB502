import { useState } from "react";
import { ProductInput } from "../../../interface/product";
import { instance } from "../../../config/configAxios";
import { useNavigate } from "react-router-dom";

const init:ProductInput ={
  title:'',
  price:0,
  description:'',
  thumbnail:''
}

function AddProduct() {
  const [data,setData]= useState<ProductInput>(init);
  const navigate = useNavigate();

  const handleSubmit =async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // console.log(data);
    try {
      await instance.post(`/products`,data);
      alert("Thêm sản phẩm thành công");
      // setData(init)
      // chuyển về trang danh sách sản phẩm
      navigate('/admin/product')
      
    } catch (error) {
      alert("Thêm mới sản phẩm thất bại: "+ error)
    }

  }
  const handleChangeInput=(key:string, e:React.ChangeEvent<HTMLInputElement>)=>{
    setData((pre)=>{ //title,price
      //spread
      return {...pre, [key] : e.target.value}
    })
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
                (e)=>{handleChangeInput("title",e)}
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
                (e)=>{handleChangeInput("price",e)}
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
              value={data.thumbnail}
              onChange={
                (e)=>{handleChangeInput("thumbnail",e)}
              }
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
              value={data.description}
              onChange={
                (e)=>{
                  setData((pre)=>{
                    return {...pre,description: e.target.value}
                  })
                }
              }
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

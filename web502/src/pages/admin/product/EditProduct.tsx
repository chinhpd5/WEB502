import { useEffect, useState } from "react";
import { ProductInput } from "../../../interface/product";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../../config/configAxios";

const init:ProductInput ={
    title:'',
    price:0,
    description:'',
    thumbnail:''
}

function EditProduct(){
    const {id} = useParams();
    // console.log(id);
    const [product,setProduct]= useState<ProductInput>(init);
    const navigate = useNavigate();

    useEffect(()=>{
        const getProductById = async(id:string)=>{
            try {
                const data = await instance.get(`/products/${id}`)
                // console.log(data);
                if(data.data){
                    setProduct(data.data)
                }
                
            } catch (error) {
                alert("Lỗi")
            }
        }
        if(id){
            getProductById(id);
        }


    },[id])
    

    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // console.log(product);
        try {
            // cập nhật
            await instance.put(`/products/${id}`,product);
            // chuyển về trang danh sách
            navigate('/admin/product')
        } catch (error) {
            alert("Lỗi")
        }
    }

    const handleChangeInput=(key:string, e:React.ChangeEvent<HTMLInputElement>)=>{
        setProduct((pre)=>{ //title,price
          //spread
          return {...pre, [key] : e.target.value}
        })
    }

    return(
        <>
            <h1>Cập nhật sản phẩm</h1>
            <div className="container">
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                {/* Tên sản phẩm */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                    Tên sản phẩm
                    </label>
                    <input
                    type="text"
                    value={product.title}
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
                    value={product.price}
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
                    value={product.thumbnail}
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
                    value={product.description}
                    onChange={
                        (e)=>{
                        setProduct((pre)=>{
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
    )
}
export default EditProduct;
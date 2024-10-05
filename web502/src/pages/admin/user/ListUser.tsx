import { useEffect, useState } from "react";
import { instance } from "../../../config/configAxios";
import IUser from "../../../interface/user";
import { Link } from "react-router-dom";

function ListUser() {
  // danh sách
  // xóa
  const [users,setUsers] = useState<IUser[]>([]);

  useEffect(()=>{
    // lấy dữ liệu user
    getAllUser();
  },[])

  const getAllUser = async()=>{
    try {
        const res =await instance.get('/users');
        // console.log(res.data);
        if(res.data){
            setUsers(res.data);
        }
    } catch (error) {
        alert("Lỗi")
    }
  }
  const handleDelete = async (id: string)=>{
    // console.log(id);
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
        // xóa
        try {
            await instance.delete(`/users/${id}`)

            // lọc users
            setUsers((pre)=>{
                return pre.filter((item)=>{return item.id != id})
            })

        } catch (error) {
            alert("Lỗi")
        }
    }
    
  }

//   console.log(users);
  

  return (
    <>
      <h1>Danh sách User</h1>
      <Link to={'add'} className="btn btn-primary">Thêm mới</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
                users?.map((item,index)=>{
                    return (
                        <tr key={item.id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={()=>{handleDelete(item.id)}} className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    )
                })
            }
          
        </tbody>
      </table>
    </>
  );
}
export default ListUser;

import { useForm } from "react-hook-form";
import { UserInput } from "../../../interface/user";
import { instance } from "../../../config/configAxios";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<UserInput>()

    const onSubmit = async (data:UserInput )=>{
        // console.log(data);
        if(data){
            // thêm vào db
            try {
                await instance.post('/users',data);
                alert("Thêm thành công")
                // chuyển về trang danh sách
                navigate('/admin/user');
            } catch (error) {
                alert("Thêm thất bại")
            }
        }
    }

  return (
    <>
        <h1>Thêm mới user</h1>
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        {...register("name",{
                            required: "Không được để trống name"
                        })}
                    />
                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        {...register("email",{
                            required: "Không để trống email",
                            pattern: {
                                value:/^\S+@\S+\.\S+$/,
                                message: "Sai định dạng email"
                            }
                        })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}

                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        {...register("password",{
                            required: "Không để trống password",
                            minLength: {
                                value: 6,
                                message: "Cần tối thiểu 6 kí tự"
                            },
                            maxLength: {
                                value: 10,
                                message: "Cần tối đa 10 kí tự"
                            }
                        })}
                    />
                    {errors.password && <span className="text-danger">{errors.password.message}</span>}

                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Age
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        {...register("age",{
                            required: "Không để trống tuổi",
                            pattern: {
                                value: /^\d+$/,
                                message: "Sai định dạng số"
                            }
                        })}
                    />
                    {errors.age && <span className="text-danger">{errors.age.message}</span>}

                </div>
                
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </form>
        </div>
      
    </>
  );
}

export default AddUser;

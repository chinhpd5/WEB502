import { useForm } from "react-hook-form";
import { RegisterInput } from "../interface/user";
import { instance } from "../config/configAxios";

function Register() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm<RegisterInput>();

    const onSubmit= async (data:RegisterInput)=>{
       try {
            const {email,password} = data;// destructuring
            const res = await instance.post('/register',{email,password});
            console.log(res);
       } catch (error:any) {
            alert(error.response.data)
       }
        
    }

  return (
    <>
      <h1>Đăng kí</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            {...register("email",{
                required: "Không để trống email",
                pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Sai định dạng email"
                }
            })}
          />
          {errors.email && <span className="text-danger">{errors.email.message}</span> }
          
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
                minLength:{
                    value: 6,
                    message: "Cần tối thiểu 6 kí tự"
                }
            })}
            />
            {errors.password && <span className="text-danger">{errors.password.message}</span> }

        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            className="form-control"
            id="confirmPassword"
            {...register("confirmPassword",{
                required: "Cần nhập lại password",
                validate: (valueConfirm)=>{
                    // console.log(valueConfirm);
                    return valueConfirm == watch("password") || "Không trùng mật khẩu"
                }
            })}
          />
            {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span> }

        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Register;

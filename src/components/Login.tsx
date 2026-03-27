import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

interface ILoginInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<ILoginInput> = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label>First Name</label>
        <input
          {...register("firstName", { required: true })}
          type="text"
          className="border-3"
        />
        <label>Last Name</label>
        <input
          {...register("lastName", { required: true })}
          type="text"
          className="border-3"
        />
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          type="text"
          className="border-3"
        />
        <label>Password</label>
        <input
          {...register("password", { required: true })}
          type="text"
          className="border-3"
        />
        <label>Confirm Password</label>
        <input
          {...register("confirmPassword", { required: true })}
          type="text"
          className="border-3"
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;

/* 
Login Form:
- Use react form hook
  - Password === confirmPassword
- Create login with google button
- Add backend auth route call to submit btn (login user function upon submit)
*/

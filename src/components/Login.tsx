import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

interface ILoginInput {
  firstName: string;
  lastName: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<ILoginInput> = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label>First Name</label>
        <input {...register("firstName")} type="text" className="border-3" />
        <label>Last Name</label>
        <input {...register("lastName")} type="text" className="border-3" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;

/* 
Login Form:
- Use react form hook
- Create login with google button
*/

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<ILoginInput> = (data) => console.log(data);

  const labelClassName: string = "text-2xl underline underline-offset-2";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className={labelClassName}>First Name</label>
        <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
          type="text"
          className="border-3"
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
        <label className={labelClassName}>Last Name</label>
        <input
          {...register("lastName", { required: true })}
          aria-invalid={errors.lastName ? "true" : "false"}
          type="text"
          className="border-3"
        />
        {errors.lastName?.type === "required" && (
          <p role="alert">Last name is required</p>
        )}
        <label className={labelClassName}>Email</label>
        <input
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
          type="text"
          className="border-3"
        />
        {errors.email?.type === "required" && (
          <p role="alert">Email is required</p>
        )}
        <label className={labelClassName}>Password</label>
        <input
          {...register("password", { required: "Email is required" })}
          aria-invalid={errors.password ? "true" : "false"}
          type="text"
          className="border-3"
        />
        {errors.password && <p role="alert">{errors.password.message}</p>}
        <label className={labelClassName}>Confirm Password</label>
        <input
          {...register("confirmPassword", {
            required: "Password confirmation is required",
          })}
          type="text"
          className="border-3"
        />
        {errors.confirmPassword && (
          <p role="alert">{errors.confirmPassword.message}</p>
        )}
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

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

  const formClassName: string =
    "flex flex-col justify-items-center items-center";
  const labelClassName: string = "text-2xl underline underline-offset-2";
  const errorMessageClassName: string = "text-red-500 text-[12px]";
  const borderClassName: string = "border-2 w-50 rounded-lg";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
        <label className={labelClassName}>First Name</label>
        <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
          type="text"
          className={borderClassName}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert" className={errorMessageClassName}>
            First name is required
          </p>
        )}
        <label className={labelClassName}>Last Name</label>
        <input
          {...register("lastName", { required: true })}
          aria-invalid={errors.lastName ? "true" : "false"}
          type="text"
          className={borderClassName}
        />
        {errors.lastName?.type === "required" && (
          <p role="alert" className={errorMessageClassName}>
            Last name is required
          </p>
        )}
        <label className={labelClassName}>Email</label>
        <input
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
          type="text"
          className={borderClassName}
        />
        {errors.email?.type === "required" && (
          <p role="alert" className={errorMessageClassName}>
            Email is required
          </p>
        )}
        <label className={labelClassName}>Password</label>
        <input
          {...register("password", { required: "Email is required" })}
          aria-invalid={errors.password ? "true" : "false"}
          type="text"
          className={borderClassName}
        />
        {errors.password && (
          <p role="alert" className={errorMessageClassName}>
            {errors.password.message}
          </p>
        )}
        <label className={labelClassName}>Confirm Password</label>
        <input
          {...register("confirmPassword", {
            required: "Password confirmation is required",
          })}
          type="text"
          className={borderClassName}
        />
        {errors.confirmPassword && (
          <p role="alert" className={errorMessageClassName}>
            {errors.confirmPassword.message}
          </p>
        )}
        <input
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 text-black font-semibold py-2 px-4 rounded"
        />
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

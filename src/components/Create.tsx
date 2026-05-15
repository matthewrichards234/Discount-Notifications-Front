import { useForm } from "react-hook-form";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, dirtyFields },
    reset,
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center m-auto p-30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-items-center items-center"
      >
        <p className="text-5xl">UPLOAD</p>
        <label>Paste URL below...</label>
        <input
          {...register("website", {
            required: "URL is required",
            validate: (value) => {
              try {
                new URL(value);
                return true;
              } catch {
                return "Invalid URL";
              }
            },
          })}
          type="text"
          className="border-2 rounded-lg m-2 w-120"
        />
        <input
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 text-black font-semibold py-2 px-4 rounded mt-5 w-50 h-12 disabled:opacity-40 disabled:pointer-events-none"
          disabled={!isValid}
          onClick={() => reset()}
        />
      </form>
    </div>
  );
};

export default Create;

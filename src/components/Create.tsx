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
        <label htmlFor="website">Paste URL below...</label>
        <input
          id="website"
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
        {errors.website && errors.website.type === "required" && (
          <span className="text-red-700">Please enter a URL</span>
        )}
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

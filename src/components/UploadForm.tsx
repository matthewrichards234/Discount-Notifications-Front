const UploadForm = () => {
  const formClassName: string =
    "flex flex-col justify-items-center items-center";
  const borderClassName: string = "border-2 w-50 rounded-lg m-2";
  return (
    <div>
      <form className={formClassName}>
        <label>Paste URL below...</label>
        <input type="text" className={borderClassName} />
        <input
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 text-black font-semibold py-2 px-4 rounded mt-5 w-50 h-12"
        />
      </form>
    </div>
  );
};

export default UploadForm;

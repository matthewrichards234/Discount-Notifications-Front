import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useRef, useState } from "react";
import { postUrl } from "../utils/fetches/urlFetch";

interface IUploadForm {
  website: string;
}

const UploadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<IUploadForm> = (url) => {
    console.log(url);
    postUrl();
  };

  const sampleURLRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const copyLink = () => {
    const text = sampleURLRef.current?.textContent;
    // console.log(text);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Regex for URL validation
  const urlPattern =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  const formClassName: string =
    "flex flex-col justify-items-center items-center";
  const borderClassName: string = "border-2 w-50 rounded-lg m-2";
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
        <label>Paste URL below...</label>
        <input
          {...register("website", {
            pattern: { value: urlPattern, message: "Invalid URL" },
          })}
          type="url"
          className={borderClassName}
        />
        {errors.website && <p>{errors.website.message}</p>}
        <input
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 text-black font-semibold py-2 px-4 rounded mt-5 w-50 h-12"
        />
      </form>
      <div className="flex flex-col items-center m-7 border-2">
        <p>Sample URL</p>
        <p ref={sampleURLRef}>
          https://www.nike.com/t/air-max-95-big-bubble-mens-shoes-2xNsHz6W/IB6830-001
        </p>
        <button onClick={copyLink} className="cursor-pointer">
          Copy
        </button>
        {copied && (
          <span className="ml-2 text-green-500 font-semibold">Copied!</span>
        )}
      </div>
    </div>
  );
};

export default UploadForm;

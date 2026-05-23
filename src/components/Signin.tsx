import { GoogleLogin } from "@react-oauth/google";

const Signin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      Signin
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => console.log("Login Failed")}
      />
      <p>Continue w/ Apple</p>
      <p>or</p>
      <br />
      <p>continue with email</p>
    </div>
  );
};

export default Signin;

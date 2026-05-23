import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      Signin
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          console.log(jwtDecode(credentialResponse.credential));
          navigate("/"); // Navigate user to home after successful login.
          /* To - Do:
          1. Change state of "Sign-In" button to "Profile" button upon successful login.
          2. Add Logout functionality via 'googleLogout' from '@react-oauth.google'.
          */
        }}
        onError={() => console.log("Login Failed")}
        auto_select={true} // Automatic sign-ins for users who have signed in in the past.
        width={400}
        shape="pill"
        size="large"
        cancel_on_tap_outside={true}
        ux_mode="redirect"
        type="standard"
      />
      <p>Continue w/ Apple</p>
      <p>or</p>
      <br />
      <p>continue with email</p>
    </div>
  );
};

export default Signin;

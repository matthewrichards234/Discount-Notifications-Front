import { Route, Routes } from "react-router";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import UploadForm from "./UploadForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="upload" element={<UploadForm />}></Route>
      </Routes>
    </>
  );
}

export default App;

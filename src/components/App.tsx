import { Route, Routes } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function App() {
  return (
    <>
      <h1 className="text-blue-500">Hello</h1>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;

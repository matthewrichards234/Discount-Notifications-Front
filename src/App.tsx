import { Routes, Route } from "react-router";
import "./index.css";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";

export function App() {
  return (
    <div>
      <h1 className="font-medium text-sky-500">Hello</h1>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

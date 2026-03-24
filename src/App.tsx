import { Routes, Route } from "react-router";
import "./index.css";
import Profile from "./Profile";

export function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

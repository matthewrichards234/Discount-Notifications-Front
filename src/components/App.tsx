import { Route, Routes } from "react-router";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import UploadForm from "./UploadForm";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };
  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}
    >
      <button onClick={handleDarkModeToggle}>Light or Dark ahh mode</button>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadForm />} />
      </Routes>
    </div>
  );
}

export default App;

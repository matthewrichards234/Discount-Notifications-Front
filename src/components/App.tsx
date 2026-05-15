import { Route, Routes } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Profile from "./Profile";
import UploadForm from "./UploadForm";
import Main from "./Main";
import About from "./About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/cart" />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

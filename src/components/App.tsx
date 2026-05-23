import { Route, Routes } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Profile from "./Profile";
import UploadForm from "./UploadForm";
import Main from "./Main";
import About from "./About";
import Create from "./Create";
import Cart from "./Cart";
import Signin from "./Signin";
import Login from "./Login";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/email-auth" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/create" element={<Create />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

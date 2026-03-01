import { Routes, Route } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Login from "./component/auth/Login";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />    
        <Route path="/contact" element={<ContactPage />} />    
        <Route path="/login" element={<LoginPage />} />    
        <Route path="/signup" element={<SignupPage/>} />    
      </Routes>

      <Footer />
    </>
  );
}

export default App;
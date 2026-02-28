import { Routes, Route } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
     
      </Routes>

      <Footer />
    </>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import ServicesPage from "./pages/services";
import About from "./pages/about";
import ContactPage from "./pages/contact";
import Footer from "./components/footer"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App

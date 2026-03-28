import{ BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Home from "./pages/home"
import ServicesPage from "./pages/services"
import About from "./pages/about"
import ContactPage from "./pages/contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

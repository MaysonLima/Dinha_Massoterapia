import { useState } from 'react';
import Contact from './components/contact';
import Services from './components/services';
import Header from './components/header';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Services />
      <Contact />

    </div>
    
  )
}

export default App

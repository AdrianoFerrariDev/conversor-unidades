import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home";
import Length from "./pages/Length";
import Area from "./pages/Area";
import Volume from "./pages/Volume";
import Mass from "./pages/Mass";
import Speed from "./pages/Speed";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comprimento" element={<Length />} />
            <Route path="/area" element={<Area />} />
            <Route path="/volume" element={<Volume />} />
            <Route path="/massa" element={<Mass />} />
            <Route path="/velocidade" element={<Speed />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

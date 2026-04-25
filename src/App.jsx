import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home";
import Length from "./pages/Length";
import Area from "./pages/Area";
import Volume from "./pages/Volume";
import Mass from "./pages/Mass";
import Speed from "./pages/Speed";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSync from "./components/LanguageSync";
import { routes } from "./routes";

const langRoutes = routes.pt; // só para mapear estrutura

function App() {  
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/:lang" element={<LanguageSync />}>
              <Route path="*" element={<Home />} />
              {Object.keys(routes.pt).map((key) => (
                <Route
                  key={key}
                  path={routes.pt[key]}
                  element={
                    key === 'length' ? <Length /> :
                    key === 'area' ? <Area /> :
                    key === 'volume' ? <Volume /> :
                    key === 'mass' ? <Mass /> :
                    key === 'speed' ? <Speed /> :
                    null
                  }
                />
              ))}

              {Object.keys(routes.en).map((key) => (
                <Route
                  key={`en-${key}`}
                  path={routes.en[key]}
                  element={
                    key === 'length' ? <Length /> :
                    key === 'area' ? <Area /> :
                    key === 'volume' ? <Volume /> :
                    key === 'mass' ? <Mass /> :
                    key === 'speed' ? <Speed /> :
                    null
                  }
                />
              ))}
              
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

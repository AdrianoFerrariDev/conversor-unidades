import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import LanguageSync from "./components/LanguageSync";
import PageRouter from "./components/PageRouter";

function App() {
  const fallbackLang = localStorage.getItem("lang") || "pt"

  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Navigate to={`/${fallbackLang}`} replace />} />
            <Route path="/:lang" element={<LanguageSync />}>
              <Route index element={<Home />} />
              <Route path=":slug" element={<PageRouter />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

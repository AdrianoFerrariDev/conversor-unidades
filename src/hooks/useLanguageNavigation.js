import { useNavigate, useParams, useLocation } from "react-router-dom";
import i18n from "../i18n";
import { routes } from "../routes";

export function useLanguageNavigation() {
  const navigate = useNavigate();
  const { lang: currentLang } = useParams();
  const location = useLocation();

  function changeLanguage(newLang) {
    const lang = currentLang?.slice(0, 2) || 'pt';

    // remove idioma da URL
    const pathWithoutLang = location.pathname.replace(/^\/(pt|en)/, '');

    const cleanPath = pathWithoutLang.replace(/^\//, '')

    // 🔥 IMPORTANTE: procurar em TODOS os idiomas
    let pageKey = null;

    for (const l of Object.keys(routes)) {
      const foundKey = Object.keys(routes[l]).find(
        key => routes[l][key] === cleanPath
      );

      if (foundKey) {
        pageKey = foundKey;
        break;
      }
    }

    // fallback seguro
    if (!pageKey) {
        pageKey = cleanPath === '' ? 'home' : 'length';
    }

    const newPath = `/${newLang}/${routes[newLang][pageKey]}`;

    // evita navegação desnecessária
    if (location.pathname === newPath) return;

    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);

    navigate(newPath);
  }

  return { changeLanguage };
}
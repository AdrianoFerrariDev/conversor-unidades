import { useNavigate, useParams, useLocation } from "react-router-dom";
import i18n from "../i18n";
import { routes } from "../routes";

export function useLanguageNavigation() {
  const navigate = useNavigate();
  const { lang: currentLang } = useParams();
  const location = useLocation();

  function changeLanguage(newLang) {
    const currentPath = location.pathname;

    const lang = currentLang || 'pt';

    // remove idioma da URL
    const pathWithoutLang = currentPath.replace(/^\/(pt|en)/, '');

    const routeMap = routes[lang];

    // descobre qual página atual
    let pageKey = Object.keys(routeMap).find(
      key => routeMap[key] === pathWithoutLang.replace('/', '')
    );

    // fallback
    if (!pageKey) pageKey = 'length';

    const newPath = `/${newLang}/${routes[newLang][pageKey]}`;

    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);

    navigate(newPath);
  }

  return { changeLanguage };
}
import { useParams, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { languages } from '../config/languages'
import i18n from '../i18n'
import NotFound from '../pages/NotFound'

function LanguageSync() {
  const { lang } = useParams()

  const isValidLanguage = languages.includes(lang)

  useEffect(() => {
    if (isValidLanguage) {
      i18n.changeLanguage(lang)
      localStorage.setItem('lang', lang)
    } /*else {
      i18n.changeLanguage('en')
      localStorage.removeItem('lang')
    }*/
  }, [lang, isValidLanguage])

  if( !isValidLanguage) {
    return <NotFound />
  }

  return <Outlet />
}

export default LanguageSync
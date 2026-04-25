import { useParams, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import i18n from '../i18n'

function LanguageSync() {
  const { lang } = useParams()

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang)
      localStorage.setItem('lang', lang)
    }
  }, [lang])

  return <Outlet />
}

export default LanguageSync
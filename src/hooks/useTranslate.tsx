import { useTranslation } from 'react-i18next'

export const useTranslate = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return {
    changeLanguage,
    translator: t,
  }
}

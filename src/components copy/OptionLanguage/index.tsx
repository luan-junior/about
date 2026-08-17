import { useState } from 'react'
import { getI18n } from 'react-i18next'

import { Container } from './styles'
import { Dropdown } from '@/components/Dropdown'
import { useTranslate } from '@/hooks/useTranslate'
import { LANGUAGES } from '@/utils/constants'

export const OptionLanguage = () => {
  const [language, setLanguage] = useState(getI18n().language)
  const { translator, changeLanguage } = useTranslate()

  const handleSelectLanguage = (option: string) => {
    changeLanguage(option)
    setLanguage(option)
  }
  return (
    <Container>
      <Dropdown
        value={language}
        options={LANGUAGES.map((lang) => {
          return {
            ...lang,
            label: translator(lang.label),
          }
        })}
        onChange={handleSelectLanguage}
      />
    </Container>
  )
}

import { useEffect, useRef, useState } from 'react'
import { getI18n } from 'react-i18next'
import { MdKeyboardArrowDown } from 'react-icons/md'

import {
  Container,
  Trigger,
  Flag,
  Menu,
  OptionButton,
} from './styles'
import { useTranslate } from '@/hooks/useTranslate'
import { LANGUAGES } from '@/utils/constants'

function currentLanguage() {
  const language = getI18n().language.split('-')[0]
  if (LANGUAGES.some((lang) => lang.value === language)) {
    return language
  }
  return 'pt'
}

function FlagIcon({ code }: { code: string }) {
  if (code === 'pt') {
    return (
      <svg viewBox="0 0 28 20" aria-hidden>
        <rect width="28" height="20" rx="2" fill="#009B3A" />
        <polygon points="14,2 26,10 14,18 2,10" fill="#FEDD00" />
        <circle cx="14" cy="10" r="4.2" fill="#002776" />
      </svg>
    )
  }

  if (code === 'en') {
    return (
      <svg viewBox="0 0 28 20" aria-hidden>
        <rect width="28" height="20" rx="2" fill="#B22234" />
        <path
          fill="#FFF"
          d="M0 2.2h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0zm0 3.08h28v1.54H0z"
        />
        <rect width="12" height="10.8" fill="#3C3B6E" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 28 20" aria-hidden>
      <rect width="28" height="20" rx="2" fill="#AA151B" />
      <rect y="5" width="28" height="10" fill="#F1BF00" />
    </svg>
  )
}

export const OptionLanguage = () => {
  const [language, setLanguage] = useState(currentLanguage)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { translator, changeLanguage } = useTranslate()
  const selected = LANGUAGES.find((lang) => lang.value === language) ?? LANGUAGES[0]

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  const handleSelectLanguage = (option: string) => {
    changeLanguage(option)
    setLanguage(option)
    setOpen(false)
  }

  return (
    <Container ref={containerRef}>
      <Trigger
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Flag>
          <FlagIcon code={selected.value} />
        </Flag>
        <span>{translator(selected.label)}</span>
        <MdKeyboardArrowDown />
      </Trigger>
      {open && (
        <Menu role="listbox" aria-label={translator(selected.label)}>
          {LANGUAGES.map((lang) => (
            <OptionButton
              key={lang.value}
              type="button"
              role="option"
              aria-selected={lang.value === language}
              $active={lang.value === language}
              onClick={() => handleSelectLanguage(lang.value)}
            >
              <Flag>
                <FlagIcon code={lang.value} />
              </Flag>
              <span>{translator(lang.label)}</span>
            </OptionButton>
          ))}
        </Menu>
      )}
    </Container>
  )
}

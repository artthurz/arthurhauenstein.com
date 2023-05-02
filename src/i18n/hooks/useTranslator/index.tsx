import { useRouter } from 'next/router'
import en from '@src/i18n/dictionaries/en-US.json'
import pt from '@src/i18n/dictionaries/pt-BR.json'
import es from '@src/i18n/dictionaries/es-ES.json'

export const defaultLocale = 'en'
export const locales = ['en', 'pt', 'es'] as const
export type TLocales = 'en' | 'pt' | 'es'

const dictionaries: Record<TLocales, any> = {
  en,
  pt,
  es
} as const

export default function useTranslator() {
  const router = useRouter()
  const locale = router.locale as TLocales

  const dictionary = dictionaries[locale]

  console.log(dictionary)

  function translate(key: string) {
    let translation = key
      .split('.')
      .reduce((obj, key) => obj && obj[key], dictionary)
    if (!translation) {
      return key as string
    }
    return translation as string
  }

  return translate
}

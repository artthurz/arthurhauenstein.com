export const defaultLocale = 'en'
export const locales = ['en', 'pt', 'es'] as const
export type ValidLocale = (typeof locales)[number]

const dictionaries: Record<ValidLocale, any> = {
  en: () =>
    import('src/i18n/dictionaries/en-US.json').then(module => module.default),
  pt: () =>
    import('src/i18n/dictionaries/pt-BR.json').then(module => module.default),
  es: () =>
    import('src/i18n/dictionaries/es-ES.json').then(module => module.default)
} as const

export const useTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]()
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split('.')
      .reduce((obj, key) => obj && obj[key], dictionary)
    if (!translation) {
      return key
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value))
      })
    }
    return translation
  }
}

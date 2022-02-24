import i18n, { Scope, TranslateOptions } from 'i18n-js'
import memoize from 'lodash.memoize'
import { Portuguese } from './ptBR'
import { English } from './enUS'
import { StorageService } from '~/services'
import { StorageKeys } from '~/constants'

const localization = StorageService.get(StorageKeys.Language) || 'pt-BR'

i18n.locale = localization
i18n.fallbacks = true
i18n.defaultLocale = 'pt-BR'
i18n.translations = { 'pt-BR': Portuguese, 'en-US': English }

const translate = memoize(
  (key: Scope, config?: TranslateOptions) => i18n.t(key, config),
  (key: Scope, config?: TranslateOptions) => (config ? key + JSON.stringify(config) : key)
)

export default translate

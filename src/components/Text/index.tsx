import type { Scope } from 'i18n-js'

import * as Variants from './styles'
import translate from '~/translations'

interface Props {
  textKey: Scope
  variant?: 'P' | 'Hero'
  params?: string
  fontSize?: 'small' | 'medium' | 'large'
}

export const Text = ({ textKey, variant = 'P', params, fontSize = 'medium' }: Props) => {
  const TextComponent = Variants[variant]

  if (params) {
    return (
      <TextComponent size={fontSize}>
        {translate(textKey, { placeholder: params, defaultValue: textKey })}
      </TextComponent>
    )
  }

  return (
    <TextComponent size={fontSize}>
      {translate(textKey, { defaultValue: textKey })}
    </TextComponent>
  )
}

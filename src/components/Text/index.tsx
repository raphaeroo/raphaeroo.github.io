import type { Scope } from 'i18n-js'

import * as Variants from './styles'
import translate from '~/translations'

interface Props {
  textKey: Scope
  variant?: 'P' | 'Hero'
  params?: string
  fontSize?: number
  weight?: 'regular' | 'bold' | 'light' | 'semi-bold'
  lines?: number
  color?: string
}

export const Text = ({ textKey, variant = 'P', params }: Props) => {
  const TextComponent = Variants[variant]

  if (params) {
    return (
      <TextComponent>
        {translate(textKey, { placeholder: params, defaultValue: textKey })}
      </TextComponent>
    )
  }

  return (
    <TextComponent>
      {translate(textKey, { defaultValue: textKey })}
    </TextComponent>
  )
}

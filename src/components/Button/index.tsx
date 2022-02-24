import type { ReactNode } from 'react'

import { Btn, Label } from './styles'
import translate from '~/translations'

interface Props {
  fullWidth?: boolean
  compact?: boolean
  label?: string
  onClick?: () => void
  children?: ReactNode
}

export const Button = ({ onClick = () => {}, fullWidth = false, label = '', children, compact }: Props) => {
  if (children) {
    return (
      <Btn onClick={onClick} fullWidth={fullWidth} compact={compact}>
        {children}
      </Btn>
    )
  }

  return (
    <Btn fullWidth={fullWidth} onClick={onClick} compact={compact}>
      <Label>
        {translate(label, { defaultValue: label })}
      </Label>
    </Btn>
  )
}

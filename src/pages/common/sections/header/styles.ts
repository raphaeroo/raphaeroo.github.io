import { styled } from '@stitches/react'

export const ItemContainer = styled('div', {
  borderTopWidth: 3,
  borderTopStyle: 'solid',
  borderTopColor: '#525259',
  paddingTop: 8,

  variants: {
    size: {
      w100: {
        width: '100%'
      },
      w50: {
        width: '50%'
      }
    }
  }
})

export const MobileHeader = styled('div', {})

export const DesktopHeader = styled('div', {})

import { styled } from '@stitches/react'
import { darken, modularScale } from 'polished'

import { Colors } from '~/constants'

export const Btn = styled('button', {
  height: 55,
  width: 200,
  border: 'none',
  borderRadius: 10,
  background: Colors.Secondary,
  color: Colors.Background,
  transition: 'all 0.4s ease',

  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    outline: {
      true: {
        background: 'transparent',
        border: `1px solid ${Colors.Secondary}`,
        color: Colors.Secondary
      }
    },
    compact: {
      true: {
        padding: '10px 25px',
        width: 'initial',
        height: 'initial'
      }
    }
  },

  '&:hover': {
    background: darken(0.3, Colors.Secondary)
  }
})

export const Label = styled('span', {
  fontFamily: "'Jost', sans-serif",
  fontSize: modularScale(1),
  fontWeight: '500'
})

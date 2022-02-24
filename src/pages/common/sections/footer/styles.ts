import { styled } from '@stitches/react'
import { Colors } from '~/constants'

export const Link = styled('a', {
  cursor: 'pointer',
  color: '#525259',
  padding: '0 0 10px 10px',
  textDecoration: 'none',
  transition: 'all 0.4s ease',

  '&:hover': {
    color: Colors.Secondary
  },

  variants: {
    selected: {
      true: {
        color: Colors.FontPrimary
      }
    }
  }
})

import { styled } from '@stitches/react'
import { Colors } from '~/constants'

export const Hero = styled('h1', {
  fontWeight: 'bold',
  color: Colors.FontPrimary,
  fontFamily: "'Orbitron', sans-serif",

  variants: {
    size: {
      small: {
        fontSize: '2rem'
      },
      medium: {
        fontSize: '3rem'
      },
      large: {
        fontSize: '4rem'
      }
    }
  }
})

export const P = styled('p', {
  color: Colors.FontPrimary,
  fontFamily: "'Jost', sans-serif",

  variants: {
    size: {
      small: {
        fontSize: '1.2rem'
      },
      medium: {
        fontSize: '1.5rem'
      },
      large: {
        fontSize: '2rem'
      }
    }
  }
})

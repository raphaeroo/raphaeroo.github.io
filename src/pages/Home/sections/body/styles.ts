import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',

  '&:before': {
    content: '',
    backgroundImage: 'url(assets/images/home-circle.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    position: 'relative',
    padding: 200,
    left: '13rem',
    top: '-5rem',
    zIndex: 1
  }
})
